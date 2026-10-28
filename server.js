/**
 * Custom entry point for hosts that run Node apps through Phusion Passenger
 * (Namecheap shared hosting / cPanel "Setup Node.js App").
 *
 * Passenger sets PORT itself; locally you can `node server.js` after
 * `npm run build` and it listens on 3000.
 */
const { createServer } = require("http");
const next = require("next");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const dev = process.env.NODE_ENV !== "production";
const hostname = process.env.HOST || "0.0.0.0";
const port = Number(process.env.PORT) || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => handle(req, res)).listen(port, hostname, () => {
    console.log(`> Pooja and Phil ready on http://${hostname}:${port}`);
  });
});
