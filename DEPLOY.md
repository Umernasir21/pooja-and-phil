# Deploying to Namecheap shared hosting

This site is a Next.js app with server-side API routes (contact form,
newsletter, admin dashboard), so it runs as a **Node.js application** on
Namecheap — not as plain HTML files. Namecheap's Stellar shared plans support
this through cPanel's **Setup Node.js App** (Phusion Passenger). The steps
below take about twenty minutes.

> If the cPanel menu has no "Setup Node.js App" item, the plan doesn't
> include Node. Ask Namecheap support to enable it or move to a Stellar
> Plus/Business plan — the contact form and admin dashboard cannot run on a
> plan without it.

**Good news for this host specifically:** newsletter signups and contact
messages are stored as JSON files on the server's filesystem
(`src/lib/store.ts`, written to `.data/`). Unlike a serverless host (e.g.
Vercel), Namecheap's Node app runs as a normal always-on process with a
persistent filesystem, so this storage works correctly here with no extra
setup — no database needed for it to actually keep data.

## 1. Build on your computer

Shared hosting has tight memory limits and the build step is the heaviest
thing this app does, so build locally and upload the result.

```bash
npm install
```

```bash
npm run build
```

This produces the `.next` folder. Build on the same major Node version
you'll select in cPanel (20 is the safe choice).

## 2. Upload the files

Create a folder in your hosting account — for example `~/poojaandphil`
(**outside** `public_html`). Upload these into it, keeping the structure:

```
.next/                 ← the build output (everything inside it)
public/                ← images, video, fonts
src/                   ← source (Next needs it for server components)
.data/                 ← create this empty folder; forms write here
server.js
package.json
package-lock.json
next.config.mjs
tsconfig.json
postcss.config.mjs
```

Do **not** upload `node_modules` (installed on the server in step 4) or any
`.env*` file (the one real secret is set as an environment variable in step 5
instead).

Easiest way: zip the folder locally (exclude `node_modules` and `.next`'s
cache sub-folder isn't needed either, but the rest of `.next` is required),
upload the zip through cPanel → **File Manager**, then right-click → Extract.

Give `.data/` write permission (755 is fine — Passenger runs as your user).

## 3. Create the Node.js app

cPanel → **Setup Node.js App** → **Create Application**:

| Setting | Value |
| --- | --- |
| Node.js version | 20.x (18.18 or newer works) |
| Application mode | **Production** |
| Application root | `poojaandphil` (the folder from step 2) |
| Application URL | your domain, e.g. `poojaandphil.com` |
| Application startup file | `server.js` |

Click **Create**. Passenger now wires the domain to the app — no
`.htaccess` editing needed.

## 4. Install dependencies

On the same screen, click **Run NPM Install**. It installs `node_modules`
inside the application root — including `sharp`, used for image
optimisation.

If it fails with a memory error, open cPanel → **Terminal**, then:

```bash
source ~/nodevenv/poojaandphil/20/bin/activate && cd ~/poojaandphil && npm install --omit=dev
```

## 5. Set the environment variables

Still in **Setup Node.js App**, under **Environment variables** add:

| Name | Value |
| --- | --- |
| `ADMIN_PASSWORD` | a long, unique password for `/admin` — without this set, the dashboard falls back to a dev-only default password, so this is required before going live |
| `NODE_ENV` | `production` |

Click **Save**, then **Restart**.

## 6. Update the production domain in the code

`src/content/site.ts` has a `domain` field used for canonical URLs, the
sitemap, `robots.txt` and Open Graph/social image tags. Before (or right
after) your first deploy, set it to the real domain:

```ts
domain: "https://www.yourdomain.com",
```

Rebuild (`npm run build`) and re-upload `.next/` after changing it.

## 7. Check it

- `https://yourdomain.com` — the site.
- `https://yourdomain.com/contact` — submit a test message.
- `https://yourdomain.com/admin` — sign in with `ADMIN_PASSWORD` and confirm
  the test message and a test newsletter signup both appear.
- `https://yourdomain.com/sitemap.xml` and `/robots.txt` — should render.

## 8. SSL

cPanel → **SSL/TLS Status** → select the domain → **Run AutoSSL**. Namecheap
issues a free certificate. Once active, force HTTPS under
**Domains → Force HTTPS Redirect**.

## Updating the site later

1. `npm run build` locally.
2. Upload the new `.next` folder (replace the old one) and any changed files
   in `src/` or `public/`.
3. **Setup Node.js App → Restart**.

Newsletter signups and contact messages submitted through the live site are
**not** part of your local project — they live only in `.data/` on the
server. Don't overwrite that folder when you upload updates.

## Backing up submissions

Download `.data/newsletter.json` and `.data/contact.json` from File Manager
periodically if you want a backup. Before relying on this long-term, see the
note in `LAUNCH_CHECKLIST.md` about connecting a real database — a single
JSON file has no protection against two near-simultaneous submissions
corrupting each other, which is a real (if low-probability) risk for a
higher-traffic site.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| "503 / Passenger error" page | Open **Setup Node.js App**, check the startup file is `server.js` and mode is Production, then Restart. The log is in `~/poojaandphil/stderr.log`. |
| Admin login says incorrect password even though you're sure it's right | `ADMIN_PASSWORD` isn't set in the app's environment variables (or the app wasn't restarted after adding it) — it's silently using the dev-only fallback instead. |
| Newsletter/contact submissions don't show in `/admin` | Check `.data/` exists in the application root and is writable. Check `stderr.log` for a filesystem permission error. |
| Images slow or broken on first load | Image optimisation runs on first request and caches. If the host blocks `sharp`, set `images: { unoptimized: true }` in `next.config.mjs`, rebuild, re-upload. |
| Build on the server runs out of memory | Don't build on the server — build locally (step 1) and upload `.next`. |
