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
			var j = i * 2; // Массив ulQuestions имеет 6 элементов, "Вопрос"" и в массиве "Варианты ответа", и так три раза. Благодаря этой переменной я перепрыгиваю через массивы.
			element.innerHTML = data.ulQuestions[j];
			pageBuilder[0].appendChild(element);
			element = document.createElement('ul');
			pageBuilder[0].appendChild(element);
			for (var y=0; y<data.ulQuestions[j+1].ulAnswers.length; y++) { // Благодаря этой переменной я могу задавать разное количество вариантов ответов в базе данных.
				var pageBuilder = document.querySelectorAll('ul');
				var element = document.createElement('li');
				element.classList.add('answer');
				pageBuilder[i].appendChild(element);

				pageBuilder = document.querySelectorAll('li');
				element = document.createElement('label');
				pageBuilder[i + j + y].appendChild(element); // Без j и с другими работать не будет

				pageBuilder = document.querySelectorAll('label');
				element = document.createElement('input');
				element.setAttribute('type', 'checkbox');
				element.setAttribute('name', 'choice'+ ++i); // При создании имени старался создать разные name-названия, начиная от 1.
				i = --i; // Чтобы не создавать ещё одну переменную e=i+1 я допустил такой код. Могу поменять, но так проще.
				pageBuilder[i + j + y].appendChild(element); // И здесь тоже.
				element = document.createElement('span');
				element.innerHTML = data.ulQuestions[j + 1].ulAnswers[y];
				pageBuilder[i + j + y].appendChild(element); // И здесь.		
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
	pageInit: function() {
		method.wrapper(),
		method.list(),
		method.submitButton()}
};

method.pageInit();