var express = require('express');
var cassandra = require('cassandra-driver');

var async = require('async');
var app = express();

// connect to the cluster
var client = new cassandra.Client({contactPoints:['127.0.0.1'], keyspace: 'test'});



app.get('/users', function(req,res){
//Fetch data from database

var userList = null;
client.execute('select * from emp', function(err,result){

        if(err) res.send(err);
	        else console.log("result", result.rows[0]);
		userList = result;
		res.json(result.rows);
		})

	

});


app.listen(3001,function(){
	console.log("server is running on port 3001");

});
