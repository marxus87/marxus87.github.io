'use strict';
$(document).ready(function(){
	// var data='{"pageTitle":"Тест по программированию","ulQuestions":["1. Вопрос 1",{"ulAnswers":["Вариант ответа 1","Вариант ответа 2","Вариант ответа 3"]},"2. Вопрос 2",{"ulAnswers":["Вариант ответа 1","Вариант ответа 2","Вариант ответа 3"]},"3. Вопрос 3",{"ulAnswers":["Вариант ответа 1","Вариант ответа 2","Вариант ответа 3"]}],"inputSubmit":"Проверить мои результаты"}';
	// localStorage.setItem('dataBase', data);
	var dataNew=localStorage.getItem('dataBase');
	dataNew = JSON.parse(dataNew);
	var html = '<h1><%=pageTitle%></h1><form><h2 class="question"><%=ulQuestions[0]%></h2><ul title="Виберіть один варіант відповіді"><li class="answer"><label><input class="single" type="checkbox"><span><%=ulQuestions[1].ulAnswers[0]%></span></label></li><li class="answer"><label><input class="single" type="checkbox"><span><%=ulQuestions[1].ulAnswers[1]%></span></label></li><li class="answer"><label><input class="single" type="checkbox"><span><%=ulQuestions[1].ulAnswers[2]%></span></label></li></ul><h2 class="question"><%=ulQuestions[2]%></h2><ul><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[3].ulAnswers[0]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[3].ulAnswers[1]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[3].ulAnswers[2]%></span></label></li></ul><h2 class="question"><%=ulQuestions[4]%></h2><ul><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[5].ulAnswers[0]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[5].ulAnswers[1]%></span></label></li><li class="answer"><label><input type="checkbox"><span><%=ulQuestions[5].ulAnswers[2]%></span></label></li></ul><button title="правильні відповіді: 2,4,5,8,9" type="submit"><%=inputSubmit%></button></form>';
	var content = tmpl(html,dataNew);
	$('.wrapper').append(content);
		 var handler = function (event){
			event = event || window.event;
			var target = event.target || event.srcElement;
			if ( target.nodeType == 1 && target.className.toLowerCase() == "single" && target.type == "checkbox" && target.checked ) {
				var inputs = document.getElementsByClassName("single");
				for ( var i = 0; inputs[i]; i++ ) {
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
	var button = document.querySelector('button');
	button.addEventListener('click', function(){
		var answers = document.getElementsByTagName('input');
		if (answers[1].checked && answers[3].checked && answers[4].checked && answers[7].checked && answers[8].checked == true) {			
			alert('Чудово!')
		} else {
			alert('Погано!');
		}
	});
});