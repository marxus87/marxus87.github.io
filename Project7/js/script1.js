console.log(document.documentElement);

var element = createElement('');

var element = document.getElementById('');

var element = document.getElementsByTagName('');

var element = document.getElementsByClassName('');

var element = document.getAttribute('');

var element = document.querySelector(''); /*для первого элемента*/

var element = document.querySelectorAll(''); /*для всех элементов*/

var element = document.querySelectorAll();
element[].innerHTML = '<>text</>';

var element = document.querySelectorAll('');
element = document.setAttribute('href', 'http://');
element.setAttribute('href', 'http://');

var element = document.querySelectorAll('');
element = document.setAttribute('href', '');
element = document.removeAttribute('href');

var element = document.querySelectorAll('');
element = document.removeAttribute('href');

var element = document.querySelectorAll('');
element.className = element.className + ' another-class-name';
element.classList.add('and-another-class-name');
element.classList.remove('and-another-class-name');
element.style.backgroundColor = 'green'; /*в самом html*/

/*чтобы добавить элемент, создаём переменную, которой потом дополняем сущестрвующий документ*/
var element = document.createElement('div');
element.classList.add('box');
var html = document.querySelector('.wrapper');
html.appendChild(element);
/*или поменять последние две строки на следующие*/
var html = document.querySelectorAll('.wrapper');
html[3].appendChild(element);

html.insertBefore(element, html.children[2]);

html.removeChild(element);

html.replace(element, element0); /*вместо element0 появится element*/

console.log(element);