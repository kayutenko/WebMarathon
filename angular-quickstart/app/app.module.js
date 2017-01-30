(function(app) {
	app.MyModuleApp = ng.core.NgModule({
		imports: [ng.platformBrowser.BrowserModule],
		declarations: [app.MyComponent],
		bootstrap: [app.MyComponent]
	})
	.Class({
		constructor: function() {}
	});
})(window.app || (window.app = {}));