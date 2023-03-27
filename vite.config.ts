/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { PluginOption } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plugins: [react()] as PluginOption[],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"]
    }
});
