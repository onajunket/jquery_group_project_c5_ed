function main() {
	$('.banner').unslider();

	$('.dropdown').click(function(e) {

		// toggle visible menu
		var visibleLink = $('.dropdown-menu:visible');
		if (visibleLink.length > 0) {
			visibleLink.slideUp('fast');
			return;
		}

		// show menu
		var linkType = $(this).attr('class');
		switch (linkType) {
			case "cart dropdown":
				$('.cart .dropdown-menu').slideDown('fast');
				break;
			case "account dropdown":
				$('.account .dropdown-menu').slideDown('fast');
				break;
			case "help dropdown":
				$('.help .dropdown-menu').slideDown('fast');
				break;
		}

		// click anywhere to close
		e.stopPropagation();
		$('body').one('click', function(e) {
			$('.dropdown-menu').slideUp('fast');
		});
	});
}

$(main);