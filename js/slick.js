$('.slider').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 1000,
	autoplay: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: false,
	mobileFirst: true,
	prevArrow: '.arrow-right',
	nextArrow: '.arrow-left',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				// dots: true,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
			},
		},
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	],
})
