(function(app){
	app.MyComponent = 
		ng.core.Component({
			selector: 'hello-world',
			template: '<h2>Fuck this world</h2>'
		}).
		Class({constructor: function () {}
	});
})(window.app || (window.app = {}));