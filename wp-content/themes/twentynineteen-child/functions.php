<?php 

add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );

function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
   wp_enqueue_style( 'bootstrap', get_stylesheet_directory_uri().'/css/bootstrap.min.css' );
}

add_action('wp_enqueue_scripts','enqueue_child_script');

function enqueue_child_script() {
   wp_enqueue_script( 'custom_js', get_stylesheet_directory_uri().'/js/script.js', array(), '1.0.0', true );
   wp_enqueue_script('jquery');
   wp_enqueue_script( 'bootstrap', get_stylesheet_directory_uri().'/js/bootstrap.min.js', array('jquery'), '1.0.0', true );
}