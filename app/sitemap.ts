import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "publications/", "projects/"].map((path) => ({
    url: `https://pudumagico.github.io/${path}`,
  }));
}
