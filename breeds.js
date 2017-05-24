var mongoose = require("mongoose");

var BreedSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
    
})

var Breed = mongoose.model("Breed", BreedSchema);

module.exports = mongoose.model("Breed", BreedSchema);