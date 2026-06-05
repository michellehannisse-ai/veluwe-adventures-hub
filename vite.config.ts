// On Vercel, neutralise Lovable sandbox detection so the wrapper does NOT force
// the cloudflare-module preset and dist/server/ output layout.
if (process.env.VERCEL) {
  delete process.env.LOVABLE_SANDBOX;
  delete process.env.DEV_SERVER__PROJECT_PATH;
}

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: { preset: "vercel" },
});
