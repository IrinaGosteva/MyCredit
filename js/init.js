(function($) {
	//init fromstayler
	$('select').styler();

	// init slick

	$('.slider-karusel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false
	});
	$('.slider-karusel-mySum').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: false
	});

	var filtered = false;

	$('.js-filter').on('click', function() {
		if (filtered === false) {
			$('.filtering').slick('slickFilter', ':even');
			$(this).text('Unfilter Slides');
			filtered = true;
		} else {
			$('.filtering').slick('slickUnfilter');
			$(this).text('Filter Slides');
			filtered = false;
		}
	});


})(jQuery);