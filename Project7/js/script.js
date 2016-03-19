var data = {
	pageTitle: 'Тест по программированию',
	ulQuestions: [
		'Вопрос 1', {ulAnswers: [
						'Вариант ответа 1', 
						'Вариант ответа 2',
						'Вариант ответа 3']},
		'Вопрос 2', {ulAnswers: [
						'Вариант ответа 1', 
						'Вариант ответа 2',
						'Вариант ответа 3']},
		'Вопрос 3', {ulAnswers: [
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
		for (var i=0; i<3; i++) {
			var pageBuilder = document.querySelectorAll('form');
			var element = document.createElement('h2');
			element.classList.add('question');
			var j = i * 2;
			element.innerHTML = data.ulQuestions[j]; 
			pageBuilder[0].appendChild(element);
			element = document.createElement('ul');
			pageBuilder[0].appendChild(element);
			for (var y=0; y<3; y++) {
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
				pageBuilder[i + j + y].appendChild(element);
				console.log(element);
				element = document.createElement('span');
				element.innerHTML = data.ulQuestions[j + 1].ulAnswers[y];
				pageBuilder[i + j + y].appendChild(element);				
			}
		}
	},
	submitButton: function() {
		var pageBuilder = document.querySelector('form');
		var element = document.createElement('input');
		element.innerHTML= data.inputSubmit;
		element.setAttribute('type', 'submit');
		pageBuilder.appendChild(element);
	}
};

method.wrapper();
method.list();
method.submitButton();