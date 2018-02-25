var $ = require('jquery');

module.exports = {
	scroll: function (event) {
		if (event.preventDefault) {
			event.preventDefault();
		}
		var element = event.target.getAttribute('href');
		if (!element) {
			element = event.target.parentElement.getAttribute('href');
		}
		if (!!element) {
			$('html, body').animate({
				scrollTop: $(element).offset().top - 70
			}, 300);
		}
	}
};