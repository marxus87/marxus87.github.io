$(function() {
	$('.box-links li:first').addClass('active');
	$('.box:first').addClass('active');
});

$(function() {
    $('.boxes .box-links a').on('click', function(event) {
        var element = $(this).attr('href');
        var $element = '.box-content ' + element;
        $($element).slideDown(100).siblings().slideUp(100);
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        event.preventDefault();
    });
});

var switcher = 1;

$(function() {
	$('<button>')
		.text('Show help')
		.insertAfter('form div')
		.on('click', function(e){
			if (switcher == 1){switcher = 0;$('label div').show(200).clearQueue();}
			else {switcher = 1;$('label div').hide(200).clearQueue();}
			e.preventDefault();
		}) 
});

var tooltips = $(function() {
	$('label').each(function() {
		var el = $(this);
		var title = el.attr('title');
		if (title && title != '') {
			el.attr('title', '').append('<div>' + title + '</div>');
		}
		$('label div').show();
		$('label div').hide();
		el.hover(
			function() {
				el.find('div')
					.show(200)
					.delay(50)
					switcher = 1;
			},
			function() {
				el.find('div')
					.hide(200);
			}      	
		).mouseleave(function() {
			if (el.children().is(':hidden')) el.find('div').clearQueue();
		});
	})
});
