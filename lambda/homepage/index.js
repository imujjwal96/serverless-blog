'use strict';
var cf = require('./cf');
var helpers = require('./helpers');

exports.handler = (event, context, callback) => {
    cf.api.getEntries({
        'content_type': cf.const.POST_CT,
        'limit': 100,
        'order': '-sys.createdAt'
    }).then(function (response) {
       var posts = [];
        if (response.total > 0) {
            posts = helpers.formatPosts_(response.items);
        }
       callback(null, posts);
    });
};


