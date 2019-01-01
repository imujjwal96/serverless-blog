'use strict';
var cf = require('./cf');
var helpers = require('./helpers');
var dateFormat = require('dateformat');
var Q = require('q');
var md = require('marked');

exports.handler = (event, context, callback) => {
    console.log("oye");
    console.log(event);

    cf.api.getEntries({
        'content_type': cf.const.POST_CT,
        'fields.slug': event.queryStringParameters.slug
    }).then(function (entries) {
        var post = helpers.formatPost_(entries.items[0]);

        var response = {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            },
            "body": JSON.stringify(post),
            "isBase64Encoded": false
        };
        callback(null, response);
    });
};


