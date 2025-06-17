import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' /* instead of @tailwindcss/postcss */

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: '/lab10/', // do not change this line
})