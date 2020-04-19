# mrm-task-webpack

[mrm](https://github.com/sapegin/mrm) task that adds basic [webpack](https://webpack.js.org/) configuration and yarn scripts.

This should allow you to do `yarn start:dev` immediately after running `mrm webpack`.

## What it does

- Installs dependencies
- Adds yarn scripts to run Webpack and DevServer
- Creates webpack.config.js, index.html, and src/index.js if they don't exist

## Usage

```bash
yarn global add mrm mrm-task-webpack
mrm webpack
```

### Scripts

```bash
yarn start:dev # starts webpack dev server
yarn build:dev # builds webpack in development mode
yarn build     # builds webpack in production mode
```

## Changelog

The changelog can be found in [changelog](Changelog.md).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Authors and license

[Victor Chan](https://vctr.dev) and [contributors](https://github.com/victorzchan/mrm-task-webpack/graphs/contributors).

MIT License, see the included [License.md](License.md) file.
