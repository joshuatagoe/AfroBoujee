const mongoose = require('mongoose') ;

const userSchema = new mongoose.Schema({
    title : String,
    stores: [storeSchema],
    rating: Number, //rating of the user and his products
    reviews : [reviewschema],
    password: String,
    username: String

})

const User = mongoose.model('User', userSchema);