(function(){
	var name = "app.shell";
	var requires = ["ngRoute"];

	angular.module(name, requires)
		.config(function($routeProvider){
			$routeProvider
				.when("/search", {
					templateUrl: "app/search/search.html",
					controller: "SearchCTRL"
				})
				.otherwise({
					redirectTo: "/search"
				})
		})
})();