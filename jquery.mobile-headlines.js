git@github.com:makakken/jquery-scrollable-mobile-headlines.git /* Front-Page headlines scrolling, responsive only */
	if($(window).width() <= 992) {
		/* Set Initial Containerheight */
        $('#logobar-wrap').height( $('#logobar').outerHeight() );
		$('#logobar').addClass("absolute");

		$(window).scroll(function() {
			/* Check scroll Direction */
			var ScrollDifference = $(window).scrollTop() - scrollTop;
			scrollTop = $(window).scrollTop();

			if(ScrollDifference < 0 ) {
				$('#logobar')
					.css('top',0)
					.addClass("fixed")
					.removeClass("absolute")
					.data( 'toppos' , scrollTop );
			} else {
                var top = $('#logobar').data('toppos');
				$('#logobar')
                    .css('top',top)
					.removeClass("fixed")
					.addClass("absolute");
			}

			titleLinks = $('.front-page').find('#target-groups div.active .target-list li a.active');

			if(titleLinks.length > 0) {
				titleLinks.each(function() {
					if( ($(this).offset().top + $(this).outerHeight() ) < $(window).scrollTop()) {
						showTitle = true;
						titleText = $(this).text();
						titleToggle = $(this).attr('data-target');
					}

					if($(this).offset().top >= $(window).scrollTop()) {
						showTitle = false;
					}

					var bottom = $(this).parent().offset().top + $(this).parent().outerHeight() - $('.scrolling-header').outerHeight();

					if(bottom < $(window).scrollTop()) {
						showTitle = false;
					}

				});
			}

			if(showTitle) {
				$('.scrolling-header').addClass('active');
				$('.scrolling-header').find('a').html(titleText);
				$('.scrolling-header').find('a').attr('data-target',titleToggle);
			} else {
				$('.scrolling-header').removeClass('active');
			}
		});
	}
