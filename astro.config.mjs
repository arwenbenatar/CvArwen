import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: "https://arwenbenatar.github.io",
  base: "CvArwen",
  trailingSlash: "always",
=======
>>>>>>> 4fe20cef4dcb15e16a4989c14e85e427bb85e66d
  integrations: [tailwind()],
});
