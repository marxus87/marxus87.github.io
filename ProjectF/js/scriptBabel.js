'use strict';
$(document).ready(function(){
	let data='{"pageTitle":"Тест по программированию","ulQuestions":["1. С какой цифры начинается отсчёт в программировании?",{"ulAnswers":["1","0","255"]},"2. На основе каких файлов в основном строится страничка?",{"ulAnswers":["index.html","style.css","plushki.dot"]},"3. Какой размер Байта?",{"ulAnswers":["1024 МБ","1 Байт","8 бит"]}],"inputSubmit":"Проверить мои результаты"}';
	localStorage.setItem('dataBase', data);
	let dataNew=localStorage.getItem('dataBase');
	dataNew = JSON.parse(dataNew);
	let html = '<h1><%=pageTitle%></h1><form><h2 class="question"><%=ulQuestions[0]%></h2><ul title="Виберіть один варіант відповіді"><li class="answer"><label><input class="single" type="checkbox"><span><%=ulQuestions[1].ulAnswers[0]%></span></label></li><li class="answer"><label><input class="single" type="checkbox"><span><%=ulQuestions[1].ulAnswers[1]%></span></label></li><li class="answer"><label><input class="single" type="checkbox"><span><%=ulQuestions[1].ulAnswers[2]%></span></label></li></ul><h2 class="question"><%=ulQuestions[2]%></h2><ul><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[3].ulAnswers[0]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[3].ulAnswers[1]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[3].ulAnswers[2]%></span></label></li></ul><h2 class="question"><%=ulQuestions[4]%></h2><ul><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[5].ulAnswers[0]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[5].ulAnswers[1]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[5].ulAnswers[2]%></span></label></li></ul><button title="правильні відповіді: 2,4,5,8,9" type="submit"><%=inputSubmit%></button></form>';
	let content = tmpl(html,dataNew);
	$('.wrapper').append(content);
		 let handler = function (event){
			event = event || window.event;
			let target = event.target || event.srcElement;
			if ( target.nodeType == 1 && target.className.toLowerCase() == "single" && target.type == "checkbox" && target.checked ) {
				let inputs = document.getElementsByClassName("single");
				for ( let i = 0; inputs[i]; i++ ) {
					if ( inputs[i].type == "checkbox" && inputs[i] != target ) {
						inputs[i].checked = false;
					}
				}
			}
		}
	if (document.addEventListener){
		document.addEventListener('click', handler, false);
	} else if (document.attachEvent){
		document.attachEvent('onclick', handler);
	}
	let button = document.querySelector('button');
	button.addEventListener('click', function(){
		let answers = document.getElementsByTagName('input');
		if (answers[5].checked == true) {
			alert('Погано!');
			return
		}
		if (answers[6].checked == true) {
			alert('Погано!');
			return
		}
		if (answers[1].checked && answers[3].checked && answers[4].checked && answers[7].checked && answers[8].checked == true) {			
			alert('Чудово!')
		} else {
			alert('Погано!');
		}
	});
});