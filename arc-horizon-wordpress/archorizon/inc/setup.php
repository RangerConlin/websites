<?php
/**
 * One-time site setup, run when the theme is activated.
 * Imports the images into the Media Library, creates the pages, the header and
 * footer, and sets the home page. Safe to run again: it only creates what is missing.
 */
if (!defined('ABSPATH')) { exit; }

function archorizon_import_images() {
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/media.php';
    require_once ABSPATH . 'wp-admin/includes/image.php';

    $map = get_option('archorizon_images', array());
    $dir = get_theme_file_path('assets/images');
    foreach (glob($dir . '/*') as $path) {
        $file = basename($path);
        if (preg_match('/\\.svg$/i', $file)) { $map[$file] = array('id' => 0, 'url' => get_theme_file_uri('assets/images/' . $file)); continue; }
        if ($file === 'hero.png') { continue; }
        if (isset($map[$file]['id']) && get_post($map[$file]['id'])) { continue; }
        $tmp = wp_tempnam($file);
        copy($path, $tmp);
        $id = media_handle_sideload(array('name' => $file, 'tmp_name' => $tmp), 0, null);
        if (is_wp_error($id)) { @unlink($tmp); continue; }
        $map[$file] = array('id' => $id, 'url' => wp_get_attachment_url($id));
    }
    update_option('archorizon_images', $map);
    return $map;
}

function archorizon_fill($content, $map, $pages = array()) {
    $content = preg_replace_callback('/@@pid:([^@]+)@@/', function ($m) use ($pages) {
        return isset($pages[$m[1]]) ? (int) $pages[$m[1]] : 0;
    }, $content);
    $content = preg_replace_callback('/@@img:([^@]+)@@/', function ($m) use ($map) {
        return isset($map[$m[1]]) ? esc_url_raw($map[$m[1]]['url']) : '';
    }, $content);
    $content = preg_replace_callback('/@@id:([^@]+)@@/', function ($m) use ($map) {
        return isset($map[$m[1]]) ? (int) $map[$m[1]]['id'] : 0;
    }, $content);
    return $content;
}

function archorizon_run_setup() {
    if (get_option('archorizon_setup_done')) { return; }
    // This is the theme's own trusted content (it includes the contact form), so
    // keep WordPress from stripping form fields while the pages are created.
    kses_remove_filters();
    $map = archorizon_import_images();
    $base = get_theme_file_path('setup');
    $stylesheet = get_stylesheet();

    // Pages
    $list = json_decode(file_get_contents("$base/pages.json"), true);
    $ids = array();
    foreach ($list as $info) {
        $file = $info['file'];
        $slug = $info['slug'];
        $existing = get_page_by_path($slug, OBJECT, 'page');
        if ($existing) { $ids[$slug] = $existing->ID; continue; }
        $content = archorizon_fill(file_get_contents("$base/pages/$file.html"), $map);
        $ids[$slug] = wp_insert_post(wp_slash(array(
            'post_type'    => 'page',
            'post_status'  => 'publish',
            'post_title'   => $info['title'],
            'post_name'    => $slug,
            'post_excerpt' => $info['desc'],
            'post_content' => $content,
        )));
    }
    if (!empty($ids['home'])) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $ids['home']);
    }

    // Header and footer (editable in Appearance > Editor > Patterns / Template Parts)
    foreach (array('header' => 'Header', 'footer' => 'Footer') as $slug => $title) {
        $found = get_posts(array('post_type' => 'wp_template_part', 'name' => $slug, 'post_status' => 'any',
            'numberposts' => 1, 'tax_query' => array(array('taxonomy' => 'wp_theme', 'field' => 'name', 'terms' => $stylesheet))));
        $content = archorizon_fill(file_get_contents("$base/parts/$slug.html"), $map, $ids);
        if ($found) {
            wp_update_post(wp_slash(array('ID' => $found[0]->ID, 'post_content' => $content, 'post_status' => 'publish')));
            continue;
        }
        $new_id = wp_insert_post(wp_slash(array(
            'post_type'    => 'wp_template_part',
            'post_status'  => 'publish',
            'post_title'   => $title,
            'post_name'    => $slug,
            'post_content' => $content,
        )));
        if ($new_id && !is_wp_error($new_id)) {
            wp_set_object_terms($new_id, $stylesheet, 'wp_theme');
            wp_set_object_terms($new_id, $slug, 'wp_template_part_area');
        }
    }

    // Site basics
    update_option('blogname', 'ArcHorizon');
    update_option('blogdescription', 'Incident Command Assistant');
    if (!get_option('permalink_structure')) {
        update_option('permalink_structure', '/%postname%/');
    }
    if (isset($map['arc-icon.png']['id'])) {
        update_option('site_icon', $map['brand-shield-dark.png']['id']);
    }
    // Remove WordPress's untouched sample content
    $hello = get_page_by_path('hello-world', OBJECT, 'post');
    if ($hello) { wp_delete_post($hello->ID, true); }
    $sample = get_page_by_path('sample-page', OBJECT, 'page');
    if ($sample) { wp_delete_post($sample->ID, true); }

    kses_init_filters();
    flush_rewrite_rules();
    update_option('archorizon_setup_done', 1);
}
