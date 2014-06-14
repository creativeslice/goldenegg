/*
 * Get Viewport Dimensions
 * returns object with viewport dimensions to match css in width and height properties
 * ( source: http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript )
*/
function updateViewportDimensions() {
	var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
	return { width:x,height:y }
}
// setting the viewport width
var viewport = updateViewportDimensions();


/*
 * Throttle Resize-triggered Events
 * Wrap your actions in this function to throttle the frequency of firing them off, for better performance, esp. on mobile.
 * ( source: http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed )
*/
var waitForFinalEvent = (function () {
	var timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
		if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

// how long to wait before deciding the resize has stopped, in ms. Around 50-100 should work ok.
var timeToWaitForLast = 100;


/*
 * Here's an example so you can see how we're using the above function
 *
 * This is commented out so it won't work, but you can copy it and
 * remove the comments.
 *
 *
 *
 * If we want to only do it on a certain page, we can setup checks so we do it
 * as efficient as possible.
 *
 * if( typeof is_home === "undefined" ) var is_home = $('body').hasClass('home');
 *
 * This once checks to see if you're on the home page based on the body class
 * We can then use that check to perform actions on the home page only
 *
 * When the window is resized, we perform this function
 * $(window).resize(function () {
 *
 *    // if we're on the home page, we wait the set amount (in function above) then fire the function
 *    if( is_home ) { waitForFinalEvent( function() {
 *
 *      // if we're above or equal to 768 fire this off
 *      if( viewport.width >= 768 ) {
 *        console.log('On home page and window sized to 768 width or more.');
 *      } else {
 *        // otherwise, let's do this instead
 *        console.log('Not on home page, or window sized to less than 768.');
 *      }
 *
 *    }, timeToWaitForLast, "your-function-identifier-string"); }
 * });
 *
 * Pretty cool huh? You can create functions like this to conditionally load
 * content and other stuff dependent on the viewport.
 * Remember that mobile devices and javascript aren't the best of friends.
 * Keep it light and always make sure the larger viewports are doing the heavy lifting.
 *
*/


/*
 * Put all your regular jQuery in here.
*/

jQuery(document).ready(function($) {

	getHeadroom();
	getMixitUp();
	getFlexslider();
	getColorbox();

	/**
	 * Initiates Headroom.js
	 * Header must have an id, the id is referenced below
	 * CSS can be defined in _headroom.scss 
	 */
	function getHeadroom(){
		$("#headroom").headroom({					//define header id here
			// scroll tolerance in px before state changes
			"tolerance": 0,

			// vertical offset in px before element is first unpinned
			"offset": 147, /* set this to height of your header */

			"classes": {
				// when element is initialised
				"initial": "animated",

				// when scrolling up
				"pinned": "slideDown",

				// when scrolling down
				"unpinned": "slideUp",

				// when above offset
				"top": "headroom--top",

				// when below offset
				"notTop": "headroom--not-top"
			}
		});
	};	

	/**
	 * Initiates MixitUp
	 */
	function getMixitUp(){
		$('#Container').mixItUp();	
	}

	/**
	 * Initiates Headroom
	 */


	/**
	 * Initiates Flexslider; Flexslider requires a single containing element, <div>, then, a <ul class=”slides”><li><img src='this.jpg'></li></ul> (view options at: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties)
	 */ 
	function getFlexslider(){
		var flexslider_params = {
			//slideshowSpeed:4500,
			//animation:'slide',
			//direction:'vertical'
		} 
		$('.flexslider').flexslider(flexslider_params);
	}

	/**
	 * Sets classes and elements which will be modified by Colorbox; takes settings (view options at: http://www.jacklmoore.com/colorbox/)
	 */ 
	function getColorbox(){ 
		var colorbox_params = {
			rel: 'gal',
	        maxWidth: '96%',
	        maxHeight: '90%',
	        fixed: true,
	        inline:true
	    };
		$('a.group1').colorbox(colorbox_params);
		$('.gallery a').colorbox(colorbox_params);
	    $('a[href$=\".jpg\"], a[href$=\".png\"], a[href$=\".bmp\"]').colorbox(colorbox_params);
	}

	/**
	 * Mobile menu show/hide
	 */
	$('#mobilemenu').click(function(e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active');
		$('span', this).toggleClass('icon-menu').toggleClass('icon-close');
		$('.top-nav').slideToggle(200);
	});

	/**
	 * Adds the screen reader text to the icon's title so it will show on hover
	 */
	$('span[aria-hidden=true]').each(function() {
		var $this = $(this);
		var $screentext = $this.siblings('.screen-reader-text');
		if ( $screentext.length )
			$this.attr('title', $screentext.text());
	});

	/**
	 * Expand blocks
	 */
	$('.expandblock').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.expandcontent').slideToggle(200);
	});

}); /* end of as page load scripts */