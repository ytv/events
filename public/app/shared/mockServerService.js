app.service('mockServerService', ['$timeout',
function($timeout) {
    var events = [
        {
            id: 1,
            type: 'Social',
            name: 'Birthday Party',
            description: 'Don\'t miss the social event of the year....',
            link: '1',
            response: 'Yes',
            guestName: 'Ying',
            extraGuests: '2',
            excuse: ''
        },
        {
            id: 2,
            type: 'Meeting',
            name: 'Catastrophe Mtg',
            description: 'Important meeting regarding the....',
            link: '2',
            response: '',
            guestName: '',
            extraGuests: '',
            excuse: ''
        },
        {
            id: 3,
            type: 'Task',
            name: 'Clean backyard',
            description: 'Needs to be cleaned up before given a fine of ....',
            link: '3',
            response: '',
            guestName: '',
            extraGuests: '',
            excuse: ''
        },
        {
            id: 4,
            type: 'Social',
            name: 'Clean backyard',
            description: 'Needs to be cleaned up before given a fine of ....',
            link: '4',
            response: '',
            guestName: '',
            extraGuests: '',
            excuse: ''
        }
    ];

    this.getEvents = function() {
        return $timeout(function() {
            return events;
        }, 1000);
    };

    this.rsvp = function(n, response) {
        var self = this;
        self.n = n;
        self.response = response;
        return $timeout(function() {
            events[self.n-1].response = self.response;
        }, 300);
    };

    this.getEvent = function(n) {
        var self = this;
        self.n = n;
        return $timeout(function() {
            return events[self.n-1];
        }, 1000);
    };

    this.submitForm = function(id, name, response, guests, excuse) {
        var self = this;
        self.response = response;
        self.guestName = name;
        self.extraGuests = guests;
        self.excuse = excuse;
        return $timeout(function() {
            events[self.n-1].response = self.response;
            events[self.n-1].guestName = self.name;
            events[self.n-1].extraGuests = self.guests;
            events[self.n-1].excuse = self.excuse;
        }, 300);
    };

}]);
