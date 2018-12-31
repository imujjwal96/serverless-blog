'use strict';
var blog = require('./blog');
var cf = require('./cf');
var helpers = require('./helpers');
var dateFormat = require('dateformat');
var md = require('marked');
var Q = require('q');
exports.handler = (event, context, callback) => {
    console.log("Oyer");

    cf.api.getEntries({
        'content_type': cf.const.POST_CT,
        'limit': 100,
        'order': '-sys.createdAt'
    }).then(function (response) {
       //console.log(response);
       var posts = [];
        if (response.total > 0) {
            posts = helpers.formatPosts_(response.items);
        }
        //console.log(posts);
       callback(null, posts);
    });




/*    blog.getPosts(100).then(function(posts) {
        req.posts = posts;
        console.log(posts);
        console.log("Hello");
        callback(null, "Heta");
    });*/
};


