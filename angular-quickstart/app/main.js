(function(app) {
	document.addEventListener('DOMContentLoaded', function () {
		ng.platformBrowserDynamic.platformBrowserDynamic().bootstrapModule(app.MyModuleApp);
	});
})(window.app || (window.app = {}));