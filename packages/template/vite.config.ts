import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.tsx"),
            name: "umd",
            fileName: "index",
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    plugins: [react()],
});
