var mongoose = require('mongoose')
var User = mongoose.model('User')
var Post = mongoose.model('Post')
var bcrypt = require('bcrypt')

const validationCode = "Brandon-wth-wttt1"

module.exports = {
    register: function(req, res) {
        var register = User(req.body);
        register.save(function(err){
            res.json(err)
        })
    },
    validate_user: function(req, res) {
        if (req.body.email != '' || req.body.password != ''){
            User.findOne({email: req.body.email}, function(err, user){
                if(user){
                    bcrypt.compare(req.body.password, user.password, function(err, response){
                        if(err){
                            res.json(err)
                        }else{
                            if(response) {
                                req.session.first_name = user.first_name
                                req.session.user_id = user._id
                                res.json({name:user.first_name, id: user._id, status: true})
                            }else{
                                res.json({'message':'Please try again'})
                            }
                        }
                    })
                }else{
                    res.json({'message':'Please try again'})
                }
            })
        }else{
            res.json({"message":"Nice try"})
        }
    },
    current_user: function(req, res) {
        User.findOne({_id: req.session.user_id}, function(err, user) {
            if(user) {
                res.json({name:user.first_name, id: user._id, status: true})
            }else {
                res.json(false)
            }
        })
    },
    logout: function(req, res) {
        req.session.destroy(function (err) {
            if (err) return next(err)
            res.redirect('/')
        })
    },
    post: function(req, res) {
        var post = Post(req.body)
        post.save(function(err) {
            console.log(err)
        })
    },
    getPost: function(req, res) {
        Post.find({}, function(err, posts) {
            res.json(posts)
        })
    },
    DeletePost: function(req, res) {
        Post.findOneAndRemove({_id:req.body.id}, function(err){})
    },
    validate: function(req, res) {
        if (req.body.code !== validationCode) {
            res.json(false)
        }else {
            res.json(true)
        }
    },
    FindPost: function(req, res) {
        console.log(req.body)
        Post.find({title: req.body.title}, function(err, post) {
            if (err) {
                res.json(false)
            }else{
                res.json(post)
            }
        })
    }
}