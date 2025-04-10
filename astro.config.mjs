import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://arwenbenatar.github.io",
  base: "CvArwen",
  trailingSlash: "always",
  integrations: [tailwind()],
});
