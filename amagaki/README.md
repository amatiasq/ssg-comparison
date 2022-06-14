# amagaki-starter

[![NPM Version][npm-image]][npm-url]
[![GitHub Actions][github-image]][github-url]
[![TypeScript Style Guide][gts-image]][gts-url]

A minimal starter project that uses the [Amagaki](https://amagaki.dev) website generator.

## Getting started

The easiest way to start this project from scratch is to use [Create
Amagaki](https://github.com/blinkk/amagaki/tree/main/packages/create-amagaki)
which clones this project and sets it up for you.

```
npx create-amagaki
```

![Website screenshot](/.github/screenshot_1400x1024.png)

## Features

- Reusable page modules in Preact (`TSX`).
- Responsive media elements using `<degu-image>` and `<degu-video>`.
- Per-partial CSS splitting.
- TypeScript compilation with tree-shaking for minimal payloads.
- Opinionated autofixing and linting.

## Commands

```shell
# Install dependencies.
npm install

# Run the development server.
npm run dev

# Build the static site.
npm run build
```

## Creating pages

This project uses the
[`@amagaki/amagaki-plugin-page-builder`](https://github.com/blinkk/amagaki-plugin-page-builder).
The plugin generates the core markup for each page and manages
partials.

Partials are standalone, isolated modules that can be mixed and
matched to approach page building by assembling reusable modules.

1. Create partials by adding files in the following locations:

- CSS: `/src/partials/{partial}/{partial}.sass`
- Preact: `/src/partials/{partial}/{partial}.tsx`

1. Create pages by mixing and matching partials:

- Document: `/content/pages/{page}.yaml`

## Previewing modules

Visit http://localhost:3000/preview/ to preview a gallery of all partials
available to use. Modules can be built and previewed independently of pages.

## Other tips

- Use the `?` hotkey to show keyboard shortcuts.

[github-image]: https://github.com/blinkk/amagaki-starter/workflows/Build%20site/badge.svg
[github-url]: https://github.com/blinkk/amagaki-starter/actions
[npm-image]: https://img.shields.io/npm/v/@amagaki/amagaki-starter.svg
[npm-url]: https://npmjs.org/package/@amagaki/amagaki-starter
[gts-image]: https://img.shields.io/badge/code%20style-google-blueviolet.svg
[gts-url]: https://github.com/google/gts
