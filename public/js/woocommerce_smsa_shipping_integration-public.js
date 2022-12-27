(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	// <script type="text/javascript">
	$( document ).ready(
		function() {
			$( ".ced-accordian-open > a" ).on(
				"click",
				function() {
						$( this ).focus();
					if ($( this ).hasClass( "active" )) {
						$( this ).removeClass( "active" );
						$( this )
						.siblings( ".ced-accordian-tracking-content" )
						.slideUp( 200 );
						$( ".ced-accordian-open > a i" )
						.removeClass( "fa-minus" )
						.addClass( "fa-plus" );
					} else {
						$( ".ced-accordian-open > a i" )
						.removeClass( "fa-minus" )
						.addClass( "fa-plus" );
						$( this )
						.find( "i" )
						.removeClass( "fa-plus" )
						.addClass( "fa-minus" );
						$( ".ced-accordian-open > a" ).removeClass( "active" );
						$( this ).addClass( "active" );
						$( ".ced-accordian-tracking-content" ).slideUp( 200 );
						$( this )
						.siblings( ".ced-accordian-tracking-content" )
						.slideDown( 200 );
					}
				}
			);
		}
	);

	// </script>
})( jQuery );
