var text;
function getText() {
	text = document.getElementById('search');
	$.ajax({
			url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+text.value+'&callback=GoogleCallback&context=?',
			dataType: 'jsonp',
	});
};
function GoogleCallback(jqueryObj, data) {
	console.log(data);
	text.value = null;
	for (var i=0; data.results.length; i++) {
		var pageBuilder = document.querySelector('.wrapper');
		var element = document.createElement('div');
		element.classList.add('search');
		var elementN = document.createElement('span');
		elementN.innerHTML = data.results[i].content+'\n'+data.results[i].title+'\n';
		element.appendChild(elementN);
		elementN = document.createElement('a');
		elementN.setAttribute('href', data.results[i].url);
		elementN.innerHTML = data.results[i].url;
		element.appendChild(elementN);
		pageBuilder.appendChild(element);
	}
};
$('#button').click(getText);


$('#button').keyup(function(e){
	if (e.which == 13) {
		$('#button').click();
		console.log(e.keyCode);
	};
});