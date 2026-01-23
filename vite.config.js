  import { defineConfig } from "vite";
  import tailwindcss from "@tailwindcss/vite";

  // Export a single Vite config
  export default defineConfig({
    root: ".",            // optional, sets the project root
    plugins: [tailwindcss()] , // add Tailwind plugin
    base: '/frontBookinabus/', // replace with your repo name
  });
