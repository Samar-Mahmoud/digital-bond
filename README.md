# Angular Landing Page

Angular landing page built with modern best practices, focusing on:

- Server-Side Rendering (SSR)
- Zoneless architecture
- Performance optimization
- Responsive and clean UI design

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.21.

## Live Demo

- **SSR Deployment (Vercel):**  
  https://digital-bond-inky.vercel.app/

- **Static Version (GitHub Pages - `gh-pages` branch):**  
  https://samar-mahmoud.github.io/digital-bond/


## Project setup

Install dependencies

```bash
npm install
```

Run development server (client-side)

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

Build production client

```bash
npm run build
```

Server-side render (SSR) - after building

```bash
npm run serve:ssr:digital-bond
```

There are also scripts to prepare and deploy a GitHub Pages demo:

```bash
npm run github-build      # builds production output into dist/digital-bond
npm run github-deploy     # deploys dist/digital-bond/browser to GitHub Pages
```

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm test
```

## SSR implementation

This project uses Angular Universal for server-side rendering. Key implementation notes:

- Server entry: [server.ts](server.ts) and [main.server.ts](main.server.ts) configure the server bundle and the Express handler used for SSR.
- Server-specific app configuration and routes live in [src/app/app.config.server.ts](src/app/app.config.server.ts) and [src/app/app.routes.server.ts](src/app/app.routes.server.ts).
- The `@angular/ssr` and `@angular/platform-server` packages are included in `package.json` and used to generate the server bundle during `ng build`.
- The `serve:ssr:digital-bond` script runs the compiled server bundle at `dist/digital-bond/server/server.mjs`.

During SSR the server renders the initial HTML on the server and streams it to the client; static assets and client hydration are then handled by the browser.

## Zoneless architecture

This repository was adapted with a zoneless-friendly architecture to reduce reliance on `NgZone` and enable more predictable server rendering:

- Components prefer OnPush change detection where possible to avoid global zone triggers.
- Reactive state is implemented with signal-like patterns and explicit change triggers rather than implicit zone-based updates.
- Server-specific bootstrap and routing configuration are placed in `app.config.server.ts` / `app.routes.server.ts` so server-only logic does not rely on browser-only APIs or NgZone behavior.
- These patterns help make SSR output deterministic and reduce unnecessary change detection cycles on the client.

## Branches

This repository should contain two branches:

- `master`: Full source code for the application (this branch).
- `gh-pages`: Build-only branch containing the static production `browser` output for a GitHub Pages demo.

To produce the `gh-pages` demo locally:

```bash
npm run github-build
npm run github-deploy
```

The `github-deploy` script uses `angular-cli-ghpages` to push `dist/digital-bond/browser` to the `gh-pages` branch.
