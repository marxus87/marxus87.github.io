var text;
var g = 0;
function getText() {
	text = document.getElementById('search');
	$.ajax({
		url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&start='+g+'&q='+text.value+'&callback=GoogleCallback&context=?',
		dataType: 'jsonp',
	});
};
function GoogleCallback(jqueryObj, data) {
	text.value = null;
	var pageBuilder=document.querySelector('.wrapper');
	var element=document.querySelectorAll('.search');
	for (var j=0; j<element.length; j++) pageBuilder.removeChild(element[j]);
	for (var i=0; data.results.length; i++) {
		element = document.createElement('div');
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
$('#button').click(getText());


$('#search').keydown(function(e){
	if (e.which === 13) {
		e.preventDefault();
		console.log(e.keyCode);
		$('#button').click();
	};
});

var sts = {
	Nme: 'NoName',
	Age: 18,
	Sex: 'M',
	Hei: 150,
	Wei: 50,
	Uni: 'NoUniversity',
	Scp: 0,
	Cmp: 'NoCompany',
	Slr: 0
};

Human = function(Name,Age,Sex,Height,Weight){
	// "use strict";
	this.Name = Name||sts.Nme;
	this.Age = Age||sts.Age;
	this.Sex = Sex||sts.Sex;
	this.Height = Height||sts.Hei;
	this.Weight = Weight||sts.Wei;
};
Student = function(University,Scholarship,x3){
	// "use strict";
	this.University = University||sts.Uni;
	this.Scholarship = Scholarship||sts.Scp;
	function WatchTV(){
	
	};
};
Worker = function(Company,Salary,x3){
	// "use strict";
	this.Company = Company||sts.Cmp;
	this.Salary = Salary||sts.Slr;
	function Work(){

	};
};
var Human1 = new Human('Nick', 20, 'M', 179);
Human1.prototype = new Student('Oxford', 800);
var Human2 = new Human('Charles', 23, 'M', undefined, 55);
Human2.prototype = new Worker(undefined, 500);
var Human3 = new Human('Melisa', 19, 'F', 167, undefined);
Human3.prototype = new Student;
var Human4 = new Human('Dick', 30, '3 times a day', 167, undefined);
Human4.prototype = new Worker('GASPROM', 4000);
console.log(Human1);
console.log(Human2);
console.log(Human3);
console.log(Human4);
console.log(Human4.prototype.Salary);