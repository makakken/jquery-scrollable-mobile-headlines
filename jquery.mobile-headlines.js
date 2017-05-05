(function ( $ ) {
	$.fn.mobileHeadlines = function(options) {

		var defaults = {
			fixedClass: "fixed",
			absoluteClass: "absolute"
		};

		var settings = $.extend( {}, defaults, options );

		$(window).scroll(function() {
			this.each(function() {
				if( ($(this).offset().top + $(this).outerHeight() ) < $(window).scrollTop()) {
					$(this).addClass(settings.fixedClass);
				}

				if($(this).offset().top >= $(window).scrollTop()) {
					$(this).removeClass(settings.fixedClass);
				}

				var bottom = $(this).parent().offset().top + $(this).parent().outerHeight() - $(this).outerHeight();

				if(bottom < $(window).scrollTop()) {
					$(this).addClass(settings.absoluteClass);
					$(this).offsetTop($(window).scrollTop());
				}
			});
		});
	};
}( jQuery ));