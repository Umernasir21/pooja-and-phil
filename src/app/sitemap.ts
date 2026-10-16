import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/the-book",
    "/characters",
    "/trailer",
    "/reading-guide",
    "/about",
    "/media",
  ];

  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
