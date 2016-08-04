var path = require('path'),
    express = require('express'),
    helper = require('./scripts/helper.js'),
    app = express();

var port = 5000;

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/getEvents', function(req, res) {
    helper.getData().then(function(result) {
        res.send(result);
    }, function(err){
        console.log(err);
    });
});

app.get('/event', function(req, res) {
    var id = Number(req.query.id);
    query = {'id': id};
    helper.getDataById(query).then(function(result) {
        res.send(result[0]);
    }, function(err){
        console.log(err);
    });
});

app.get('/rsvp', function(req, res) {
    var id = Number(req.query.id),
        response = req.query.response;
    query = {'id': id};
    update = {'response': response}
    helper.rsvp(query, update).then(function(result) {
        res.send(result);
    }, function(err){
        console.log(err);
    });
});

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
