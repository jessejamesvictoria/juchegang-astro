> ## Live site: kim.juche.org
> **Status (17 October 2026): live. Do not delete or archive this repository.** It is the source of https://kim.juche.org (주체강 · Strategic Intelligence: the home page, The Current, Arithmetic, Report 7394-K and the Support page). Vercel builds `main` to production, so every merge to `main` redeploys the site.
>
> **Correction.** A banner added on 14 October 2026 called this repository "a two-commit experiment (May 2026)", "not maintained, marked for deletion". That was wrong. The repository has 39 commits from December 2025 to October 2026. On 17 October 2026 a build of `main` produced the same compiled assets and the same page content as the live site. The only differences were the analytics settings Vercel adds during deployment.
>
> `API_INTEGRATIONS.md` (a Senior Living Trust Score API guide) is unrelated to this site and belongs with the Cherish properties.

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
