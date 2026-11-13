# Arcadia websites

Source for the three public Arcadia web properties, exported from their current ChatGPT Sites projects.

## Sites

| Directory | Website | Current domain |
| --- | --- | --- |
| `acs/` | Arcadia Command Solutions | `arcadiacommandsolutions.com` |
| `arcadiaone/` | ArcadiaOne | `arcadiaone.us` |
| `arc-horizon/` | Arc-Horizon | `arc-horizon.net` |

| `acs-wordpress/` | Arcadia Command Solutions (WordPress edition) | not deployed yet |

`acs` and `arcadiaone` are standard Next.js projects. `arc-horizon` is a static multi-page site whose deployable files are in `arc-horizon/dist/`.

### WordPress edition of the ACS site

`acs-wordpress/` holds a WordPress block theme (`acs-command`) that recreates the `acs/` site design as ordinary WordPress pages, so the content can be edited visually in the block editor. Activating the theme creates the pages, header, footer, and media automatically. See `acs-wordpress/INSTALL.md` for hosting and install steps. It is independent of the Next.js `acs/` project, which stays as the reference source.

## Working locally

Each application is intentionally independent. Install and run the application you are changing from its directory.

```bash
cd acs
pnpm install
pnpm dev
```

Use the same process for `arcadiaone`. Arc-Horizon can be previewed with any static file server pointed at `arc-horizon/dist`.

## Hosting status

This repository preserves the current website source without the ChatGPT Sites runtime and authentication scaffolding. DNS should remain pointed at the current Sites deployments until replacement containers have been built and tested on the VPS.
