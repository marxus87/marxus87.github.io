$(document).ready(function(){
    var pageTMPL = $('#tmpl').html();
    var data = {
        name: 'Mark Koval',
        age: 28,
        profession: 'Teacher',
        occupation: 'Customer Support Specialist'
    };
    var content = tmpl(pageTMPL, data);
    $('.wrapper').append(content);
});

$(function() {
	$('.carousel-list').carousel();
});