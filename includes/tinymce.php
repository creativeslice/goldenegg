<?php
/**
 * Update TinyMCE
 *
 * @return	void
 */
add_action( 'init', 'egg_tinymce' );
function egg_tinymce()
{
	// filters
	add_filter( 'mce_buttons',                array(__CLASS__, 'mce_buttons') );
	add_filter( 'mce_buttons_2',              array(__CLASS__, 'mce_buttons_2') );
	add_filter( 'tiny_mce_before_init',       array(__CLASS__, 'tiny_mce_before_init') );
}

/**
 * Customize TinyMCE buttons in row 1
 *
 * @return	array Modified buttons in row 1
 */
function egg_mce_buttons( $buttons )
{
	$remove = array('strikethrough', 'wp_more');
	return array_diff($buttons, $remove);
}

/**
 * Customize TinyMCE buttons in row 2
 *
 * @return	array Modified buttons in row 2
 */
function egg_mce_buttons_2( $buttons )
{
	// Remove items
	$remove  = array('styleselect', 'underline', 'forecolor', 'alignjustify', 'pastetext', 'removeformat', 'wp_help');
	$buttons = array_diff($buttons,$remove);

	// Add in the style selector
	array_unshift( $buttons, 'styleselect' );

	return $buttons;
}

/**
 * Callback function to filter the MCE settings
 *
 * @return	array Modified settings
 */
function egg_tiny_mce_before_init( $settings )
{
	// Insert the array, JSON ENCODED, into 'style_formats'
	$settings['block_formats'] = "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5";
	return $settings;
}