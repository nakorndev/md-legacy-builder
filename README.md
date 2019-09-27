# md-legacy-builder

Simple markdown generator for legacy and lazy version.

## Installation

Clone this project into your work space then use [Node 10.x (LTS)](https://nodejs.org/en/download/) to install dependency.

```bash
npm i
```

## Commands

### Build

Build all markdown at `/docs` and copy `/public` to `/dist`

```bash
npm run build
```

### Serve

Serve html file from `/dist`

```bash
npm run serve
```

## Usage

### Development

- Create a new page at `/docs` by create any `*.md` file support with frontmatter.
- Change template at `/templates/default.ejs` for your own layouts and styles.
  - `attributes.*` is data from frontmatter.
- Add file into `/public` for any asset files (js, css, images, etc.).

### Production

Upload any file from `/dist` to your host.

