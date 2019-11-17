
# Base template for svelte app

This is my version of a base template for getting started with creating an [Svelte](https://svelte.dev) app.

This repo takes [sveltejs/template](https://github.com/sveltejs/template) as a base and it was modified to support the following:
- Sass preprocessing (without linting / error checking);
- ESLint for svelte3
- ESLint - VSCode integration
- Absolute paths (relative to `/src`)

if you are looking for the base svelte template. Head towards [the sveltejs/template repo](https://github.com/sveltejs/template)

To make a quick scaffolding of this repo you can use [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit antonyacosta78/svelte-template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

To get your dev server started just follow two steps
- install the dependencies
  ```bash
  cd svelte-app
  yarn install
  ```

- start rollup dev server
  ```bash
  yarn dev
  ```

Navigate to [localhost:10001](http://localhost:10001). You should see your app running. Every change made in any file of the `src` folder will automatically trigger a reload of the page. 
For more info on how to configure the serve of the project, visit [rollup-plugin-serve](https://github.com/thgh/rollup-plugin-serve)


## Next steps

Please note that this repo is just a modified version of [the sveltejs/template repo](https://github.com/sveltejs/) to support sass and to be served with [rollup-plugin-serve](https://github.com/thgh/rollup-plugin-serve). All the info that this readme is lacking is available there 