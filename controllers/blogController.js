const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('blogs', {title: 'All blogs', blog: result})
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', {blog: result, title: 'Blog Details'});
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_create_get = (req, res) => {
    res.render('create', {title: 'create'})
}
const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post
}