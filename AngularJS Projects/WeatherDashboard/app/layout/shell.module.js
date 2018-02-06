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
				.when("/weather/:id", {
					templateUrl: "app/weather/weather.html",
					controller: "WeatherCTRL"
				})
				.when("/forecast/:id", {
					templateUrl: "app/forecast/forecast.html",
					controller: "ForecastCTRL"
				})
				.otherwise({
					redirectTo: "/search"
				})
		})
})();