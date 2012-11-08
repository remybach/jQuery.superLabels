jQuery(function($) {
	var tweakableConf = {
		duration:500,
		easingIn:'easeInOutCubic',
		easingOut:'easeInOutCubic',
		fadeDuration:250,
		labelLeft:5,
		labelTop:5,
		opacity:0.5
	};

	$('.basic form, .placeholder form').superLabels({
		labelLeft:5,
		labelTop:5
	});

	$('.tweakable form').superLabels(tweakableConf);
	$('.tweakable-container input, .tweakable-container select').focus(function() {
		$(this).css('zIndex', 2);
	}).blur(function() {
		$(this).css('zIndex', 0);
	}).change(function() {
		var identifier = $(this).data('token'),
			num = $(this).data('tokenNum'),
			token = $('.tweakable-container .token.'+identifier).get(num),
			val = this.value;

		if (isNaN(val)) {
			token.innerHTML = val;
			tweakableConf[this.className] = val;
		} else {
			token.innerHTML = Number(val);
			tweakableConf[this.className] = Number(val);
		}

		$('.tweakable form').superLabels(tweakableConf);
	});

	$('.charLimit form').superLabels({
		autoCharLimit:true,
		labelLeft:5,
		labelTop:5
	});
});