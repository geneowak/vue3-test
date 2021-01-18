import * as path from 'path'
import vue from '@vitejs/plugin-vue'

export default {
    plugins: [vue()],
    alias: { '/@': path.resolve(__dirname, './src'), },
    rollupPluginVueOptions: {
        transformAssetUrls: {
            img: ['src', 'data-src'],
        }
    }
}