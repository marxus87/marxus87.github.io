$(document).ready(function() {
	var leftUIEl = $('.left');
    var rightUIEl = $('.right');
    var elementsList = $('.carousel-list');
 
    var pixelsOffset = 150;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * pixelsOffset);
    var maximumOffset = 0;
 
    leftUIEl.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 150;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightUIEl.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 150;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
});

$(function(){
    var pageTMPL = $('#tmpl').html();
    var data = {
        name: 'Mark Koval',
        age: 28,
        profession: 'Teacher',
        occupation: 'Customer Support Specialist'
    }
    var content = tmpl(pageTMPL, data);
    $('.wrapper').append(content);
});