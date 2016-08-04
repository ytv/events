app.config(['$routeProvider',
function($routeProvider) {
    // $urlRouterProvider.otherwise('/events');
    $routeProvider
        .when('/events', {
            templateUrl: 'app/events/events.html'
        })
        .when('/events/:id', {
            templateUrl: 'app/details/details.html'
        })
        .otherwise({
            redirectTo: '/events'
        })

}]);
