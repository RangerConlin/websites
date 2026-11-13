<?php
/**
 * One-time site setup, run when the theme is activated.
 * Imports the images into the Media Library, creates the pages, the header and
 * footer, and sets the home page. Safe to run again: it only creates what is missing.
 */
if (!defined('ABSPATH')) { exit; }

function acs_command_import_images() {
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/media.php';
    require_once ABSPATH . 'wp-admin/includes/image.php';

    $map = get_option('acs_command_images', array());
    $dir = get_theme_file_path('assets/images');
    foreach (glob($dir . '/*') as $path) {
        $file = basename($path);
        if (isset($map[$file]['id']) && get_post($map[$file]['id'])) { continue; }
        $tmp = wp_tempnam($file);
        copy($path, $tmp);
        $id = media_handle_sideload(array('name' => $file, 'tmp_name' => $tmp), 0, null);
        if (is_wp_error($id)) { @unlink($tmp); continue; }
        $map[$file] = array('id' => $id, 'url' => wp_get_attachment_url($id));
    }
    update_option('acs_command_images', $map);
    return $map;
}

function acs_command_fill($content, $map) {
    $content = preg_replace_callback('/@@img:([^@]+)@@/', function ($m) use ($map) {
        return isset($map[$m[1]]) ? esc_url_raw($map[$m[1]]['url']) : '';
    }, $content);
    $content = preg_replace_callback('/@@id:([^@]+)@@/', function ($m) use ($map) {
        return isset($map[$m[1]]) ? (int) $map[$m[1]]['id'] : 0;
    }, $content);
    return $content;
}

function acs_command_run_setup() {
    if (get_option('acs_command_setup_done')) { return; }
    // This is the theme's own trusted content (it includes the contact form), so
    // keep WordPress from stripping form fields while the pages are created.
    kses_remove_filters();
    $map = acs_command_import_images();
    $base = get_theme_file_path('setup');
    $stylesheet = get_stylesheet();

    // Pages
    $pages = array(
        'home'                 => array('Arcadia Command Solutions', 'home'),
        'field-communications' => array('Field Communications', 'field-communications'),
        'incident-management'  => array('Incident Management', 'incident-management'),
        'sarapp'               => array('Arc-Horizon', 'sarapp'),
        'portfolio'            => array('Portfolio', 'portfolio'),
        'contact'              => array('Contact Us', 'contact'),
    );
    $ids = array();
    foreach ($pages as $file => $info) {
        $existing = get_page_by_path($info[1], OBJECT, 'page');
        if ($existing) { $ids[$file] = $existing->ID; continue; }
        $content = acs_command_fill(file_get_contents("$base/pages/$file.html"), $map);
        $ids[$file] = wp_insert_post(wp_slash(array(
            'post_type'    => 'page',
            'post_status'  => 'publish',
            'post_title'   => $info[0],
            'post_name'    => $info[1],
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
        $content = acs_command_fill(file_get_contents("$base/parts/$slug.html"), $map);
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
    update_option('blogname', 'Arcadia Command Solutions');
    update_option('blogdescription', 'Plan, Coordinate, Respond — Together');
    if (!get_option('permalink_structure')) {
        update_option('permalink_structure', '/%postname%/');
    }
    if (isset($map['brand-shield-dark.png']['id'])) {
        update_option('site_icon', $map['brand-shield-dark.png']['id']);
    }
    // Remove WordPress's untouched sample content
    $hello = get_page_by_path('hello-world', OBJECT, 'post');
    if ($hello) { wp_delete_post($hello->ID, true); }
    $sample = get_page_by_path('sample-page', OBJECT, 'page');
    if ($sample) { wp_delete_post($sample->ID, true); }

    kses_init_filters();
    flush_rewrite_rules();
    update_option('acs_command_setup_done', 1);
}
