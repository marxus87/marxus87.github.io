/*function Event(e) {
	console.log('event', e); // если оставить event без кавычек, пишет глобально все данные
	if (e.keyCode === 32) {
		alert("Don't do this!");	
	}
};

window.addEventListener('keydown', Event);*/




/*var element = document.body.querySelectorAll('a');
function Event(e) {
	console.log('event', e); // если оставить event без кавычек, пишет глобально все данные
	if (e.screenY === 110) {e.movementX=200; e.movementY=200;}
}
element[1].addEventListener('click', Event);*/



/*var element = document.body.querySelectorAll('a');
var x = 0;
function Event(e) {
	console.log('event', e); // если оставить event без кавычек, пишет глобально все данные
	console.log(x);
	x++;
	if (x === 1) {
	clearInterval(y);}
}
var y = setInterval(Event, 1000);
element[1].addEventListener('click', Event);*/



/*function house(floors, rooms) {
	this.Floors = floors;
	this.Rooms = rooms;
	this.Report = function (){
		alert('A new house with ' + this.Floors + ' floor(s) and ' + this.Rooms + ' room(s) is built.');
	};
}
var a = prompt('Укажите, сколько этажей надо построить:')
var b = prompt('Укажите, сколько комнат надо построить:')
var c = new house(a, b);
console.log(c)
c.Report();*/



/*var element = document.body.querySelectorAll('a');
element[1].addEventListener('click', Event);*/




/*var element = document.body.querySelectorAll('a');
function addEvent(el, event, callback) {
	if (window.attachEvent) {
		el.attachEvent('on' + event, callback);
	}
	else {
		el.addEventListener(event, callback);
	}
}
addEvent(element[1], 'click', Event);*/



var string = 'This is my 20 money!'
var str = string.substring(1, 5);
console.log(str);

var num = parseInt(string);
console.log(num);

var arr = string.split(' ');
console.log(arr);

str = arr.join(' ');
arr.sort();
console.log(str);
// Math.floor()
// Math.ceil()
// Math.round()