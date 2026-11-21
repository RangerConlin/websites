<?php
/**
 * ArcHorizon theme bootstrap.
 */
if (!defined('ABSPATH')) { exit; }

function archorizon_fonts_url() {
    return 'https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap';
}

add_action('after_setup_theme', function () {
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_editor_style(array('style.css', 'editor.css', archorizon_fonts_url()));
});

// The site design handles its own spacing, so drop WordPress's automatic "flow" margins on groups.
add_filter('render_block_core/group', function ($html) {
    return str_replace(array(' is-layout-flow', ' wp-block-group-is-layout-flow'), '', $html);
}, 20);

add_action('wp_enqueue_scripts', function () {
    $v = wp_get_theme()->get('Version');
    wp_enqueue_style('archorizon-fonts', archorizon_fonts_url(), array(), null);
    wp_enqueue_style('archorizon', get_stylesheet_uri(), array(), $v);
    // Light / dark mode toggle in the header
    wp_enqueue_script('archorizon-theme', get_theme_file_uri('assets/theme.js'), array(), $v, array('in_footer' => true, 'strategy' => 'defer'));
});

// Page titles read "Features | ArcHorizon", like the original site.
add_filter('document_title_separator', function () { return '|'; });
add_filter('document_title_parts', function ($parts) {
    if (is_front_page()) {
        $parts = array('title' => single_post_title('', false), 'site' => get_bloginfo('name'));
    }
    return $parts;
});

// Use each page's Excerpt as its search-engine description.
add_action('wp_head', function () {
    if (!is_singular('page')) { return; }
    $desc = get_the_excerpt();
    if ($desc) { echo '<meta name="description" content="' . esc_attr(wp_strip_all_tags($desc)) . '">' . "\n"; }
    echo '<meta name="theme-color" content="#17324d">' . "\n";
});

// Pages have no excerpt box by default; turn it on so descriptions can be edited.
add_action('init', function () { add_post_type_support('page', 'excerpt'); });

require_once get_theme_file_path('inc/setup.php');
add_action('after_switch_theme', 'archorizon_run_setup');
