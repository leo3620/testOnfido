import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig, defineConfig as defineViteConfig, mergeConfig } from 'vite'
import istanbul from 'vite-plugin-istanbul'
import {  defineConfig as defineVitestConfig } from 'vitest/config'

const vitestConfig = defineVitestConfig({
    test: {
        include: ['**/?(*.)+(spec|test).[tj]s?(x)'],
        globals: true,
        retry: 3,
        testTimeout: 10000,
        environment: 'jsdom',
        setupFiles: ['./test/vitest.setup.ts'],
        css: true,
        unstubEnvs: true,
        unstubGlobals: true
    }
})

const viteConfig = defineViteConfig((env) => ({
    resolve: {
        alias: {
            src: path.resolve('src/')
        }
    },
    plugins: [react(), istanbul()],
    envPrefix: 'REACT_APP',
    build: {
        target: ['es2020', 'edge88', 'firefox78', 'chrome79', 'safari12'],
        outDir: 'build',
        rollupOptions: {
            logLevel: 'silent',
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                    lodash: ['lodash']
                }
            }
        }
    },
    server: {
        open: true,
        port: 3000
    }
}))

export default defineConfig((configEnv) => mergeConfig(viteConfig(configEnv), vitestConfig))
