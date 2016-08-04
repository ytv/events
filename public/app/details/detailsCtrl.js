detailsModule.controller('detailsCtrl', ['$scope', '$routeParams', 'eventsService',
function($scope, $routeParams, eventsService) {

    $scope.id = $routeParams.id;

    eventsService.getEvent($scope.id).then(function(data) {
        console.log('Event ' + $scope.id + ' data successfully retrieved');
        $scope.eventDetails = data;
    }, function(reason) {
        console.log('Error retrieving data for event ' + $scope.id);
    });

    $scope.submitForm = function(id, name, response, guests, excuse) {
        eventsService.submitForm(id, name, response, guests, excuse).then(function(data){
            console.log('Form successfully submitted');
        }, function(err){
            console.log(error);
            $scope.error = error;
        });
    };
}]);
