<?php

/****************************************
Theme Setup
*****************************************/

require_once( get_template_directory() . '/lib/init.php' );
require_once( get_template_directory() . '/lib/theme-helpers.php' );
require_once( get_template_directory() . '/lib/theme-functions.php' );
require_once( get_template_directory() . '/lib/theme-comments.php' );


/****************************************
Require Plugins
*****************************************/

require_once( get_template_directory() . '/lib/class-tgm-plugin-activation.php' );
require_once( get_template_directory() . '/lib/theme-require-plugins.php' );

add_action( 'tgmpa_register', 'mb_register_required_plugins' );


/****************************************
Misc Theme Functions
*****************************************/
// truncate function
function truncate($string, $limit, $break=" ", $pad="...")
{
	// Remove any formatting first
	$string = strip_tags($string);
	if(strlen($string) <= $limit) return $string;
	if(false !== ($breakpoint = strpos($string, $break, $limit)))
	{
		if($breakpoint < strlen($string) - 1)
		{
			$string = substr($string, 0, $breakpoint) . $pad;
		}
	}
	return $string;
}

// Remove width and height from images
add_filter( 'post_thumbnail_html', 'remove_width_attribute', 10 );
add_filter( 'image_send_to_editor', 'remove_width_attribute', 10 );

function remove_width_attribute( $html ) {
   $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
   return $html;
}

// add featured image support
function custom_image_sizes() {
    add_theme_support('post-thumbnails');
    add_image_size('blurbthumb', 320, 220, TRUE); /* blurb thumb */
	
	 add_image_size('smallthumb', 320, 432, TRUE); /* Small work wall */
	 add_image_size('largethumb', 760, 513, TRUE); /* Large work wall */
}
add_action('after_setup_theme', 'custom_image_sizes');


/**
 * Define custom post type capabilities for use with Members
 */
add_action('init', 'feature_init');
function feature_init() 
{
	//Default arguments
	$args = array
	(
		'public' 						=> true,
		'publicly_queryable'		=> true,
		'show_ui' 			   		=> true, 
		'query_var' 			 	=> true,
		'rewrite' 			   		=> true,
		'capability_type' 	   		=> 'post',
		'has_archive' 		   		=> true, 
		'hierarchical' 		  		=> false,
		'menu_position' 		 	=> NULL,
	);
	
	/* ----------------------------------------------------
	Our Work
	---------------------------------------------------- */
	
	$labels = array
	(
		'name'						=> 'Work',
		'singular_name' 			=> 'Work',
		'add_new' 			  		=> _x('Add New', 'Work'),
		'add_new_item' 		 	=> 'Add New Work',
		'edit_item' 					=> 'Edit Work',
		'new_item' 			 	=> 'New Work',
		'view_item' 				=> 'View Work',
		'search_items' 		 	=> 'Search Work',
		'not_found' 				=> 'No Work found',
		'not_found_in_trash'  => 'No Work found in Trash',
		'parent_item_colon' 	=> '',
		'menu_name' 				=> 'Works'
	);
	
	$args['labels'] 				= $labels;
	$args['supports'] 		  	= array('title','thumbnail');
	$args['rewrite']		   		= array('slug' => 'work');
	$args['menu_icon']		 	= get_bloginfo('template_directory').'/assets/images/work.png';
	$args['show_in_menu']	= true;
	$args['has_archive']	    = true;
	
	register_post_type('work', $args);
	
	flush_rewrite_rules();
}

/**
 * Filter Yoast SEO Metabox Priority
 */
add_filter( 'wpseo_metabox_prio', 'mb_filter_yoast_seo_metabox' );
function mb_filter_yoast_seo_metabox() {
	return 'low';
}
