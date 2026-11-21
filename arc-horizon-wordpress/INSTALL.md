# ArcHorizon website: WordPress install guide

This theme recreates the ArcHorizon site (all 25 pages, light and dark mode toggle, mobile layout) as normal WordPress pages that you edit by clicking on them.

It is a separate theme from the Arcadia Command Solutions one (`../acs-wordpress`). Each site gets its own WordPress install, so each has its own logins, pages and backups.

## 1. Get WordPress running on your VPS

If you don't have a WordPress container for this site yet, use the template in `../acs-wordpress/INSTALL.md` (section 1). Change the names (`acs` to `archorizon`), use a separate database and volumes, and set the Traefik rule to `Host(\`arc-horizon.net\`) || Host(\`www.arc-horizon.net\`)`. I haven't seen your Traefik config, so treat those labels as a template.

Test it on a temporary address first (for example `new.arc-horizon.net`) and leave DNS for the real domain pointing at ChatGPT Sites until you're happy.

## 2. Install the theme

1. Open `/wp-admin`, finish the WordPress setup screen, and log in.
2. Go to **Appearance, Themes, Add New Theme, Upload Theme**. Choose `archorizon-theme.zip` and click **Install Now**, then **Activate**. (If WordPress says the file is too large, copy the `archorizon` folder into `wp-content/themes/` on the server instead and activate it under **Appearance, Themes**.)
3. Activating builds the site automatically. It imports the logos into your Media Library, creates all 25 pages, builds the header menu and footer, sets the Overview page as your front page, turns on clean web addresses like `/features/`, and sets the site name and tab icon.

## 3. Editing

- **Change text or links:** open **Pages**, pick a page, and click the text. The page titles in the list differ slightly from the original headings, which are in the page content.
- **Add a card, section or button:** click the `+` button, or select a similar section, use the three-dot menu, and choose **Duplicate**, then edit the copy.
- **Replace a screenshot placeholder:** each dashed "screenshot space" box is a group of text. Select the box, delete it, and insert an **Image** block in its place (or drop a photo onto the page).
- **Header menu and footer:** **Appearance, Editor**, then **Template parts**. The header menu lists the pages; add or reorder items there.
- **Search-engine description:** each page's **Excerpt** (in the page settings sidebar) is used as its description.

## 4. Things to know

- **The home page photo is part of the theme.** The photo in the home page's top banner is set in the theme's style sheet (`assets/images/hero.png`), so it can't be swapped from the page editor. Replace that file in the theme folder if you want a different picture.
- **The "Contact Arcadia Command Solutions" footer link** now points to `https://arcadiacommandsolutions.com` (it pointed at the old ChatGPT Sites address). The **Log in** button is still disabled, as on the current site.
- **Dark mode** works the same as the current site: it follows the visitor's device setting and remembers their choice.
- **Fonts** (Montserrat and Inter) load from Google Fonts, as they do now.
- **Setup runs once.** If you delete a page, deactivating and reactivating the theme won't recreate it. Duplicate another page instead, or ask me.
- **Keep WordPress updated** (Dashboard, Updates), and back up the database and WordPress volumes.
- **Tested on WordPress 7.1 with a local SQLite database**, not on your VPS or with MariaDB. Pages were compared against the original site in a browser (light and dark, desktop and phone width) and match closely, and every page opens in the block editor without errors. Please click through every page after install anyway.

## Building the upload zip from this repository

```bash
cd arc-horizon-wordpress
zip -r archorizon-theme.zip archorizon
```
