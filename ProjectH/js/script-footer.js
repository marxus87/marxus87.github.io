(function($){
	$(function(){
		var Height = document.querySelector('.footer').offsetHeight;
	    setHeight = 'padding-bottom:'+Height+'px';
	    document.querySelector('.wrapper').setAttribute('style',setHeight);
	    setHeight = 'margin-top:-'+Height+'px';
	    document.querySelector('.footer').setAttribute('style',setHeight);
	});
})(jQuery);