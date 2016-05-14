function showWarning(opts) {
	var widths = this.widths || 200;
	var heights = this.heights || 100;
	var contents = this.contents || "Предупреждение";
};
var opts = {
	widths: 400,
	heights: 200,
	contents: "Текст"
};


opts.contents = "Другой текст";
var s = new showWarning(opts);

console.log(showWarning.widths);

Зайти в папку проекта. В папке - JSON, GRUNT
(В папке инициализируем) npm install
(Инициализируем Grunt) npm install -g grunt-cli
() grunt watch
