import * as path from 'path'

export default {
    alias: { '/@/': path.resolve(__dirname, './src'), },
    rollupPluginVueOptions: {
        transformAssetUrls: {
            img: ['src', 'data-src'],
        }
    }
}