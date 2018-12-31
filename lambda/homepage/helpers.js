var dateFormat = require('dateformat');

exports.formatPosts_ = function (posts) {
    var result = [];
    require('util').inspect(posts, { depth: null });
    for (var i = 0; i < posts.length; i++) {
        var post = posts[i];
        result.push({
            title: post.fields.title,
            slug: post.fields.slug,
            featuredImage: post.fields.featuredImage ? post.fields.featuredImage.fields : null,
            plot: post.fields.body.substr(0, 250) + '...',
            date: dateFormat(post.fields.date, 'fullDate'),
            categories: post.fields.category,
            author: {
                name: post.fields.author[0].fields.name,
                website: post.fields.author[0].fields.website
            },
            read: Math.ceil(post.fields.body.split(" ").length / 250)
        });
    }
    return result;
};
