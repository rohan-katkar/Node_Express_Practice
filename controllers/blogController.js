const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: 'homepage', blogs: result})
        })
        .catch((err) => {
            res.status(404).render('404', {title: '404'});
        });
}

const blog_create = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => res.redirect('/'))
        .catch((err) => console.log(err));
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Title Details' })
        })
        .catch((err) => {
            res.status(404).render('404', {title: '404'});
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' })
        })
        .catch(err => {
            res.status(404).render('404', {title: '404'});
        });
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a Blog' });
}

module.exports = {
    blog_index,
    blog_details,
    blog_create,
    blog_create_get,
    blog_delete
}