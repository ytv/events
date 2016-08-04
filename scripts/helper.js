var mongo = require('mongodb').MongoClient;

var dbUrl = 'mongodb://localhost/test';
// var dbUrl = 'mongodb://admin:password@ds017248.mlab.com:17248/mockdb';
// var dbUrl = 'mongodb://ytv:shorturl@ds059284.mlab.com:59284/shortened-url';

module.exports = {
    getData: function() {
        return new Promise(
            function(resolve, reject){
                mongo.connect(dbUrl, function(err, db) {
                    if(err) {
                        console.log('Unable to connect to DB', err);
                        reject(err);
                    } else {
                        console.log('Connection established to DB at', dbUrl);
                        var collection = db.collection('events');
                        collection.find({}).toArray(function(err, docs) {
                            if(err) {
                                throw err;
                                reject(err);
                            }
                            resolve(docs);
                            db.close();

                    });
                }
            });
        });
    },

    getDataById: function(query) {
        return new Promise(
            function(resolve, reject){
                mongo.connect(dbUrl, function(err, db) {
                    if(err) {
                        console.log('Unable to connect to DB', err);
                        reject(err);
                    } else {
                        console.log('Connection established to DB at', dbUrl);
                        var collection = db.collection('events');
                        collection.find(query).toArray(function(err, docs) {
                            if(err) {
                                throw err;
                                reject(err);
                            }
                            resolve(docs);
                            db.close();

                    });
                }
            });
        });
    },

    rsvp: function(query, update) {
        return new Promise(
            function(resolve, reject){
                mongo.connect(dbUrl, function(err, db) {
                    if(err) {
                        console.log('Unable to connect to DB', err);
                        reject(err);
                    } else {
                        console.log('Connection established to DB at', dbUrl);
                        var collection = db.collection('events');
                        collection.update(query, {$set: update}, function(err, docs) {
                            if(err) {
                                throw err;
                                reject(err);
                            }
                            resolve('Document successfully updated');
                            db.close();

                        });
                    }
            });
        });
    }
}
