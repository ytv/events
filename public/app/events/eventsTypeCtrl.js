eventsModule.controller('eventCtrl', ['$scope', 'eventsService', 'EVENT_TYPE',
function($scope, eventsService, EVENT_TYPE) {

    $scope.bgColor = function() {
        if($scope.event.type === EVENT_TYPE.SOCIAL)
            return 'red';
        else if($scope.event.type === EVENT_TYPE.MEETING)
            return 'blue';
        else if($scope.event.type === EVENT_TYPE.TASK)
            return 'green';
    }

    $scope.rsvp = function(id, response) {
        eventsService.rsvp(id, response).then(function(data) {
            eventsService.rsvp(id, response);
            console.log('Response for event ' + id + ' has been updated');
            $scope.responded = true;
            $scope.event.response = response;
        }, function(data) {
            console.log('Error updating response for event ' + id);
        });
    }

}]);
