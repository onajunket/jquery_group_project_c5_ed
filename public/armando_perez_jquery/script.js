var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');
    $(this).addClass('active');

    $('.thumbnail').removeClass('selected');

	switch (category) {
		case "nav-consumer":
			$('.consumer').addClass('selected');
			break;
		case "nav-mobile":
			$('.mobile').addClass('selected');
			break;
		case "nav-commerce":
			$('.commerce').addClass('selected');
			break;
		case "nav-enterprise":
			$('.enterprise').addClass('selected');
			break;
	}
  });
};


$(main);
