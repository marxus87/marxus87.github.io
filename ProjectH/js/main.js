function imgBg(block, img) {
	var srcImg = $(img).attr('src');
	$(block).css({'background-image': 'url('+srcImg+')'});
}

var $grid = $('.grid');
function isotopInit() {
	$grid.isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
}
function ajaxRequest(search) {
	$.ajax({
		url: 'https://pixabay.com/api/?key=2759134-506c7acc2acce58e7989ad63e&q='+search+'&image_type=photo&per_page=7',

	  // url: 'http://api.pixplorer.co.uk/image?word='+search+'&amount=5&size=tb',
	  success: function(data) {
	    for (var i = 0; i < data.hits.length; i++) {
	    	var listItem = '<div class="grid-item">'+
                '<img src="'+data.hits[i].userImageURL+'">'+
                    '<div class="grid-name"><span>'+data.hits[i].tags+'</span></div>'+
            '</div>';
	    	//console.log(data.images[i]);
	    	$('.js-grid').append(listItem);
	    }
    	isotopInit();
	  }
	});
};(function($){
	$(function(){
		var Height = document.querySelector('.footer').offsetHeight;
	    setHeight = 'padding-bottom:'+Height+'px';
	    document.querySelector('.wrapper').setAttribute('style',setHeight);
	    setHeight = 'margin-top:-'+Height+'px';
	    document.querySelector('.footer').setAttribute('style',setHeight);
	});
})(jQuery);;(function($){
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