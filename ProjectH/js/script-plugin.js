(function($){
	$(function(){

		$('.prev').on('click', function(event) {
		    event.preventDefault();
		    var element = $(this).parent('.forum_step').attr('class');
		    element = element.split(' ');
		    element = '.'+element[1];
		    var style = $(element).attr('style');
		    if (style == undefined) {
		    	if (element==".step1") element = $(element).css('background-image', "url('img/forum-picture-3.png')");
		    	if (element==".step2") element = $(element).css('background-image', "url('img/forum-picture-1.png')");
		    	if (element==".step3") element = $(element).css('background-image', "url('img/forum-picture-2.png')");
		    }
		    if (style === 'background-image: url("img/forum-picture-1.png");') element = $(element).css('background-image', "url('img/forum-picture-3.png')")
		    if (style === 'background-image: url("img/forum-picture-2.png");') element = $(element).css('background-image', "url('img/forum-picture-1.png')")
		    if (style === 'background-image: url("img/forum-picture-3.png");') element = $(element).css('background-image', "url('img/forum-picture-2.png')");
		});
		$('.next').on('click', function(event) {
		    event.preventDefault();
		    var element = $(this).parent('.forum_step').attr('class');
		    element = element.split(' ');
		    element = '.'+element[1];
		    var style = $(element).attr('style');
		    if (style == undefined) {
		    	if (element==".step1") {
		    		element = $(element).css('background-image', "url('img/forum-picture-2.png')")
		    	}
		    	if (element==".step2") {
		    		element = $(element).css('background-image', "url('img/forum-picture-3.png')")
		    	}
		    	if (element==".step3") {
		    		element = $(element).css('background-image', "url('img/forum-picture-1.png')")
		    	}
		    }
		    if (style === 'background-image: url("img/forum-picture-1.png");') element = $(element).css('background-image', "url('img/forum-picture-2.png')")
		    if (style === 'background-image: url("img/forum-picture-2.png");') element = $(element).css('background-image', "url('img/forum-picture-3.png')")
		    if (style === 'background-image: url("img/forum-picture-3.png");') element = $(element).css('background-image', "url('img/forum-picture-1.png')");
		});
	});

	$(function(){

		imgBg('.js-headerBg', '.js-headerImg');
		
		ajaxRequest('yellow+snow');

		$('body').on('click', '.js-btn', function(e){
			e.preventDefault();
			$grid.isotope('destroy');
			var valueSearch = $('.js-input').val().replace(" ","+");
			$('.grid').find('.grid-item').remove();
			ajaxRequest(valueSearch);
		});
	});
})(jQuery);