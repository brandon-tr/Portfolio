var mongoose = require('mongoose')
var validate = require('mongoose-validator')
var bcrypt = require('bcrypt')

var NameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3],
        message: 'Name should be more than 2 characters'
    }),
    validate({
        validator: 'isAlpha',
        message: 'Name should contain only letters'
    })
]
var EmailValidator = [
    validate({
        validator: 'isLength',
        arguments: [3],
        message: 'Name should be more than 2 characters'
    }),
    validate({
        validator: 'isEmail',
        message: 'Please enter a valid email'
    })
]
var PasswordValidator= [
    validate({
        validator: 'isLength',
        arguments: [5],
        message: 'Password should be more than 4 characters'
    }),
]

var UserSchema = new mongoose.Schema({
    first_name: {type:String, required:[true,'You need to have a first name'], validate:NameValidator},
    last_name: {type:String, required:[true,'You need to have a last name'], validate:NameValidator},
    email: {type:String, required:[true,'You need to have a email'], unique:true ,validate:EmailValidator},
    password: {type:String, required:[true,'You need to have a password'], validate:PasswordValidator},
},{timestamps:true})
var PostSchema = new mongoose.Schema({
    image: {type:String, required:[true,'You need to have an image']},
    title: {type:String, required:[true,'You need to have a title'], unique:true},
    content: {type:String, required:[true,'You need to have content']},
},{timestamps:true})

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then((hashed_password) => {
        this.password = hashed_password
        next();
    }).catch(err => console.log(err))
}, function(err) {
    console.log(err)
})

mongoose.model('User', UserSchema)
mongoose.model('Post', PostSchema)