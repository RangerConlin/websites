# ACS website: WordPress install guide

This theme recreates the Arcadia Command Solutions site (all six pages, light and dark mode, mobile layout) as normal WordPress pages that you edit by clicking on them.

## 1. Get WordPress running on your VPS

If you don't have a WordPress container yet, this is a starting point. Everything marked `CHANGE_ME` or in <angle brackets> must match your existing Traefik setup. I haven't seen your Traefik config, so treat the labels as a template.

```yaml
services:
  acs-db:
    image: mariadb:11
    restart: unless-stopped
    environment:
      MARIADB_DATABASE: acs
      MARIADB_USER: acs
      MARIADB_PASSWORD: CHANGE_ME
      MARIADB_RANDOM_ROOT_PASSWORD: "1"
    volumes:
      - acs-db:/var/lib/mysql
    networks: [internal]

  acs-wp:
    image: wordpress:php8.3-apache
    restart: unless-stopped
    depends_on: [acs-db]
    environment:
      WORDPRESS_DB_HOST: acs-db
      WORDPRESS_DB_NAME: acs
      WORDPRESS_DB_USER: acs
      WORDPRESS_DB_PASSWORD: CHANGE_ME
    volumes:
      - acs-wp:/var/www/html
    labels:
      - traefik.enable=true
      - traefik.http.routers.acs.rule=Host(`arcadiacommandsolutions.com`) || Host(`www.arcadiacommandsolutions.com`)
      - traefik.http.routers.acs.entrypoints=<your https entrypoint>
      - traefik.http.routers.acs.tls.certresolver=<your cert resolver>
      - traefik.http.services.acs.loadbalancer.server.port=80
    networks: [internal, <your traefik network>]

volumes: { acs-db: {}, acs-wp: {} }
networks:
  internal: {}
  <your traefik network>: { external: true }
```

Test it on a temporary address first (for example `new.arcadiacommandsolutions.com`) and leave DNS for the real domain pointing at ChatGPT Sites until you're happy.

## 2. Install the theme

1. Open `/wp-admin`, finish the WordPress setup screen, and log in.
2. Go to **Appearance, Themes, Add New Theme, Upload Theme**. Choose `acs-command-theme.zip` and click **Install Now**, then **Activate**.
3. Activating builds the site automatically. It imports the photos and logos into your Media Library, creates the six pages (Home, Field Communications, Incident Management, Arc-Horizon, Portfolio, Contact Us), builds the header and footer, sets the Home page as your front page, and turns on clean web addresses like `/portfolio`.

## 3. Editing

- **Change text, photos or links:** open **Pages**, pick a page, and click what you want to change. Click a photo and choose **Replace** to swap it.
- **Add a service card, section or button:** click the `+` button. Easiest approach: select a similar section on the page, use the three-dot menu, and choose **Duplicate**, then edit the copy.
- **Header menu, footer, logo:** **Appearance, Editor**, then **Patterns** and **Template parts**.
- **Colors:** the theme's palette (navy, blue, orange and so on) shows up in the color picker.

## 4. Things to know

- **The contact form still opens the visitor's email app** (same as the current site). It is a Custom HTML block on the Contact page. To receive form submissions directly, install a free form plugin and an SMTP/transactional email plugin, then replace that block. I can do that with you as a next step.
- **Setup runs once.** If you delete a page, deactivating and reactivating the theme won't recreate it. Duplicate another page instead, or ask me.
- **Keep WordPress updated** (Dashboard, Updates), and back up the two Docker volumes. An unpatched WordPress site is the most common way these get hacked.
- **Tested on WordPress 7.1 with a local SQLite database**, not on your VPS or with MariaDB. The theme itself doesn't touch the database type, but please do a quick check of every page after install.
- If your WordPress already has pages at the same addresses (for example `/portfolio`), setup skips creating those pages.

## 5. Not included yet

`arcadiaone.us` and `arc-horizon.net` still need their own conversion. Arc-Horizon has about 30 pages, so I'd do it after you've confirmed this one feels right.

## Building the upload zip from this repository

```bash
cd acs-wordpress
zip -r acs-command-theme.zip acs-command
```

Upload the resulting `acs-command-theme.zip` in WordPress under Appearance, Themes, Add New Theme, Upload Theme.
