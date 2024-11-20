jQuery(document).ready(function () {
	$(window).scroll(function () {
		const isTrue = $(this).scrollTop() > 50;

		$(".topnav").toggleClass("bg-white navbar-light shadow-sm scrollednav py-0", isTrue);

		if ($(".topnav img")[0]) {
			$(".topnav img")[0].src = `/img/demo/${isTrue ? "logo" : "logo-w"}.png`;
		}
	});


	
	$('[data-toggle="popover"]').popover();

	$(".popover-dismiss").popover({
		trigger: "focus",
	});

	$('[data-toggle="tooltip"]').tooltip();

	$(".li-dropdown").hover(
		function () {
			$(this).find(".dropdown-menu").stop(true, true).delay(100).fadeIn(200);
		},
		function () {
			$(this).find(".dropdown-menu").stop(true, true).delay(100).fadeOut(200);
		}
	);

	$(".carousel").on("slide.bs.carousel", function (event) {
		var height = $(event.relatedTarget).height();
		var $innerCarousel = $(event.target).find(".carousel-inner");
		$innerCarousel.animate({
			height: height,
		});
	});
});
