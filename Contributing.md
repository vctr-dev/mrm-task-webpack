# How to contribute

I love pull requests. And following this guidelines will make your pull request easier to merge.

## Prerequisites

- Install dependencies: `yarn`.

## Development workflow

1. Clone this repository into ~/dotfiles/mrm/webpack/
2. Create a new branch
3. Create a sandbox directory to test
4. `cd` into the sandbox directory and run `mrm webpack`
5. Make changes to the mrm task
6. Wipe the sandbox directory and run `mrm webpack`
7. See your changes

## Other notes

- I'm using [Prettier](https://github.com/prettier/prettier) to format code, so don’t worry much about code formatting.
- Don’t commit generated files, like minified JavaScript.
- Don’t change version number and changelog.

## Need help?

If you want to contribute but have any questions, concerns or doubts, feel free to ping maintainers. Ideally create a pull request with `WIP` (Work in progress) in its title and ask questions in the pull request description.
