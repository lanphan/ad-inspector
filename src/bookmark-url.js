(function () {
	var id = 'ad-inspector';
	var script = document.getElementById(id);
	if (!script) {
		script = document.createElement('script');
		script.src = 'https://forbes.github.io/ad-inspector/src/loader.js';
		script.id = 'ad-inspector';
		document.body.appendChild(script);
	}
})();
