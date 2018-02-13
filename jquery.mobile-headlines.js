(function ( $ ) {
	$.fn.mobileHeadlines = function(options) {

		var defaults = {
			scrollClass: "scroll"
		};

		var settings = $.extend( {}, defaults, options );
		var elements = this;

		$(window).scroll(function() {
			$(elements).each(function() {
				if(
					$(window).scrollTop() > $(this).parent().offset().top &&
					$(window).scrollTop() < ($(this).parent().offset().top + $(this).parent().outerHeight() - $(this).outerHeight())
				) {
					$(this).addClass(settings.scrollClass);
					$(this).css('top',$(window).scrollTop() - $(this).parent().offset().top);
				}
			  if( $(window).scrollTop() <= $(this).parent().offset().top ) {
					$(this).removeClass(settings.scrollClass);
				}
			});
		});
	};
}( jQuery ));
