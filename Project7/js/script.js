var data = {
	pageTitle: 'Тест по программированию',
	ulQuestions: [
		'1. Вопрос 1', {ulAnswers: [
						'Вариант ответа 1', 
						'Вариант ответа 2',
						'Вариант ответа 3']},
		'2. Вопрос 2', {ulAnswers: [
						'Вариант ответа 1', 
						'Вариант ответа 2',
						'Вариант ответа 3']},
		'3. Вопрос 3', {ulAnswers: [
						'Вариант ответа 1', 
						'Вариант ответа 2',
						'Вариант ответа 3']}
	],
	inputSubmit: 'Проверить мои результаты'
}

var method = {
	wrapper: function() {
		var pageBuilder = document.querySelectorAll('body');
		var element = document.createElement('div');
		element.classList.add('wrapper');
		pageBuilder[0].insertBefore(element, pageBuilder[0].children[0]);
		element = document.createElement('footer');
		pageBuilder[0].insertBefore(element, pageBuilder[0].children[1]);
		pageBuilder = document.querySelectorAll('.wrapper');
		element = document.createElement('h1')
		element.innerHTML = data.pageTitle;
		pageBuilder[0].appendChild(element);
	},
	list: function() {
		var pageBuilder = document.querySelectorAll('.wrapper');
		var element = document.createElement('form');
		pageBuilder[0].appendChild(element);
		for (var i=0; i<data.ulQuestions.length / 2; i++) {
			var pageBuilder = document.querySelectorAll('form');
			var element = document.createElement('h2');
			element.classList.add('question');
			var j = i * 2;
			element.innerHTML = data.ulQuestions[j]; 
			pageBuilder[0].appendChild(element);
			element = document.createElement('ul');
			pageBuilder[0].appendChild(element);
			for (var y=0; y<data.ulQuestions[1].ulAnswers.length; y++) {
				var pageBuilder = document.querySelectorAll('ul');
				var element = document.createElement('li');
				element.classList.add('answer');
				pageBuilder[i].appendChild(element);

				pageBuilder = document.querySelectorAll('li');
				element = document.createElement('label');
				pageBuilder[i + j + y].appendChild(element);

				pageBuilder = document.querySelectorAll('label');
				element = document.createElement('input');
				element.setAttribute('type', 'checkbox');
				element.setAttribute('name', 'choice'+ ++i);
				i = --i;
				pageBuilder[i + j + y].appendChild(element);
				element = document.createElement('span');
				element.innerHTML = data.ulQuestions[j + 1].ulAnswers[y];
				pageBuilder[i + j + y].appendChild(element);				
			}
		}
	},
	submitButton: function() {
		var pageBuilder = document.querySelector('form');
		var element = document.createElement('input');
		element.setAttribute('value', data.inputSubmit);
		element.setAttribute('type', 'submit');
		pageBuilder.appendChild(element);
	},
	pageInit: function() {method.wrapper(),
method.list(),
method.submitButton()}
};

method.pageInit();