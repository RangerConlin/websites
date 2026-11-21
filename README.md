# Arcadia websites

Source for the three public Arcadia web properties, exported from their current ChatGPT Sites projects.

## Sites

| Directory | Website | Current domain |
| --- | --- | --- |
| `acs/` | Arcadia Command Solutions | `arcadiacommandsolutions.com` |
| `arcadiaone/` | ArcadiaOne | `arcadiaone.us` |
| `arc-horizon/` | Arc-Horizon | `arc-horizon.net` |
| `acs-wordpress/` | Arcadia Command Solutions (WordPress edition) | not deployed yet |
| `arc-horizon-wordpress/` | Arc-Horizon (WordPress edition) | not deployed yet |

`acs` and `arcadiaone` are standard Next.js projects. `arc-horizon` is a static multi-page site whose deployable files are in `arc-horizon/dist/`.

### WordPress editions

`acs-wordpress/` and `arc-horizon-wordpress/` each hold a WordPress block theme (`acs-command` and `archorizon`) that recreates the matching site as ordinary WordPress pages, so the content can be edited visually in the block editor. Activating a theme creates its pages, header, footer, and media automatically. See `INSTALL.md` in each folder for hosting and install steps. They are independent of the original `acs/` and `arc-horizon/` projects, which stay as the reference source.

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
