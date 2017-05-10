var mongoose = require("mongoose");

var MixSchema = new mongoose.Schema({
    name: String,
    image: String,
    breed1: String,
    breed2: String,
    description: String,
    author: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        username: String
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
    
})

var Mix = mongoose.model("Mix", MixSchema);

module.exports = mongoose.model("Mix", MixSchema);