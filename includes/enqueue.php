<?php
/**
 * Enqueue Scripts & Styles
 */

/**
 * Add enqueue scripts/styles
 *
 * @return	void
 */
add_action( 'after_setup_theme', 'egg_enqueue' );
function egg_enqueue()
{
	add_action( 'wp_enqueue_scripts', 'egg_styles', 999 );
	add_action( 'wp_enqueue_scripts', 'egg_scripts', 999 );
}

	/**
	 * Load in the base styles
	 *
	 * @return	void
	 */
	function egg_styles()
	{
		global $wp_styles; // call global $wp_styles variable to add conditional wrapper around ie stylesheet

		// register main stylesheet
		wp_register_style( 'egg-stylesheet', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), '', 'all' );

		// ie-only style sheet
		wp_register_style( 'egg-ie-only', get_stylesheet_directory_uri() . '/assets/css/ie.css', array(), '' );

		wp_enqueue_style( array(
			'egg-stylesheet',
			'egg-ie-only'
		) );
		
		$wp_styles->add_data( 'egg-ie-only', 'conditional', 'lt IE 9' ); // add conditional wrapper around ie stylesheet
	}

	/**
	 * Load in the base scripts
	 *
	 * @return	void
	 */
	function egg_scripts()
	{
		/* call jQuery from Google and move to footer * /
		wp_deregister_script('jquery');
		wp_register_script('jquery', ("//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"), false, '1.11.0', true);

		/* modernizr (without media query polyfill) */
		wp_register_script( 'egg-modernizr', get_stylesheet_directory_uri() . '/assets/js/modernizr.custom.min.js', array(), '2.5.3', false );

		/* comment reply script for threaded comments */
		if ( is_singular() && comments_open() && 1 == get_option('thread_comments') )
		{
			wp_enqueue_script( 'comment-reply' );
		}
		
		/* Adding scripts file in the footer */
		wp_register_script( 'egg-js', get_stylesheet_directory_uri() . '/assets/js/scripts.js', array( 'jquery' ), '', true );
		
		// enqueue styles and scripts
		wp_enqueue_script( array(
			'egg-modernizr',
			'egg-js'
		) );
	}