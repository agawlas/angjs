var controllersModule = angular.module("exampleApp.Controllers", []);

controllersModule.controller("dayCtrl", function($scope, days){	// days is a dependency injection (DI)
	$scope.day = days.today;
});

controllersModule.controller("tomorrowCtrl", function($scope, days){	// days is a dependency injection (DI)
	$scope.day = days.tomorrow;
});