<?php
/**
 * ACS Command theme bootstrap.
 */
if (!defined('ABSPATH')) { exit; }

add_action('after_setup_theme', function () {
    add_theme_support('editor-styles');
    add_theme_support('wp-block-styles');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_editor_style(array('style.css','editor.css'));
});


// The site design handles its own spacing, so drop WordPress's automatic "flow" margins on groups.
add_filter('render_block_core/group', function ($html) {
    return str_replace(array(' is-layout-flow', ' wp-block-group-is-layout-flow'), '', $html);
}, 20);

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('acs-command', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
});

require_once get_theme_file_path('inc/setup.php');
add_action('after_switch_theme', 'acs_command_run_setup');
