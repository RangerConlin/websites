# Arcadia websites

Source for the three public Arcadia web properties, exported from their current ChatGPT Sites projects.

## Sites

| Directory | Website | Current domain |
| --- | --- | --- |
| `acs/` | Arcadia Command Solutions | `arcadiacommandsolutions.com` |
| `arcadiaone/` | ArcadiaOne | `arcadiaone.us` |
| `arc-horizon/` | Arc-Horizon | `arc-horizon.net` |

`acs` and `arcadiaone` are standard Next.js projects. `arc-horizon` is a static multi-page site whose deployable files are in `arc-horizon/dist/`.

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
