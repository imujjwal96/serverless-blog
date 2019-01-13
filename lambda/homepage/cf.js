var contentful = require('contentful');

// Configure Contentful
exports.const = {
    "POST_CT": process.env.POST_CT,
    "CAT_CT": process.env.CAT_CT,
    "AUTHOR_CT": process.env.AUTHOR_CT
};

exports.api = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});