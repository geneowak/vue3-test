# Vue 3 Test App

## This repo is to demo the issue referenced [here](https://github.com/vitejs/vite/issues/1241#issue-770741932)

### Steps to reproduce

1. Clone the repo -> `git clone https://github.com/geneowak/vue3-test.git`
2. `cd vue3-test`
3. Install the dependencies -> `yarn`
4. Check that the assets are viewed properly in development -> `yarn dev`
5. Build the app -> `yarn build`
6. Install [`serve`](https://www.npmjs.com/package/serve) in order to run the production build on your machine `yarn global add serve`.
7. Serve the production build to see the missing images -> `serve -S dist`
