app.service('eventsService', ['$q', '$http', 'mockServerService',
function($q, $http, mockServerService) {
    this.getEvents = function() {
        return $q(function(resolve, reject) {
            var url = 'http://localhost:5000/getEvents';
            $http.get(url).then(function(data) {
                resolve(data.data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

    this.rsvp = function(n, response) {
        return $q(function(resolve, reject) {
            var url = 'http://localhost:5000/rsvp?id=' + n + '&response=' + response;
            $http.get(url).then(function(data) {
                console.log(data.data);
                resolve(data.data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

    this.getEvent = function(n) {
        return $q(function(resolve, reject) {
            var url = 'http://localhost:5000/event?id=' + n;
            console.log(url);
            $http.get(url).then(function(data) {
                // console.log(data);
                resolve(data.data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

    this.submitForm = function(id, name, response, guests, excuse) {
        return $q(function(resolve, reject) {
            mockServerService.submitForm(id, name, response, guests, excuse).then(function(data) {
                resolve(data);
            }, function(reason) {
                reject(reason);
            });
        });
    };

}]);
