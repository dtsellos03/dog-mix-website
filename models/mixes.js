var mongoose = require("mongoose");

var MixSchema = new mongoose.Schema({
    Name: String,
    image: String,
    breed1: String,
    breed2: String,
    upvote: Number,
    downvote: Number,
})

var Mix = mongoose.model("Mix", MixSchema);

module.exports = mongoose.model("Mix", MixSchema);