var mongoose = require("mongoose");
var Mix = require("./models/mixes");
var Breed = require("./models/breeds")
var Comment = require("./models/comment");

var data = [
    {
        name: "Puguaua",
        image: "https://s-media-cache-ak0.pinimg.com/736x/8b/1a/36/8b1a36a3ed0265dd86b24a3701895dd9.jpg",
        breed1: "Pug",
        breed2: "Chihuahua",
        description: "Pughuahua, Chipugua"
    },
        {
        name: "Corpug",
        breed1: "Corgi",
        breed2: "Pug",
        image: "http://www.thatcutesite.com/uploads/2011/06/corgi_pug_mix_hybrid_breed.jpg",
        description: "Purgi"
    },
        {
        name: "Husgi",
        breed1: "Husky",
        breed2: "Corgi",
        image: "http://img.photobucket.com/albums/v704/xVelvet_FuzzButtx/3%20Dog%20Night/ShortLegsHalo.jpg",
        description: "Corsky"
    },
    {
    name: "Pitsky",
    breed1: "Pitbull",
    breed2: "Husky",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-27.jpg",
    description: "A mix"
  },
  {
    name: "Corgmation",
    breed1: "Corgi",
    breed2: "Dalmation",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-21.jpg",
    description: "A mix"
  },
  {
    name: "Chusky",
    breed1: "Chow Chow",
    breed2: "Husky",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-7.jpg",
    description: "Huschow"
  },
  {
    name: "Dalmachshund",
    breed1: "Dachshund",
    breed2: "Dalmation",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-17.jpg",
    description: "Daschundation"
  },
  {
    name: "Labsky",
    breed1: "Labrador",
    breed2: "Husky",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-9.jpg",
    description: "Huskador"
  },
  {
    name: "German Corgi",
    breed1: "Corgi",
    breed2: "German Shepard",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-6.jpg",
    description: "Corgerman"
  },
  {
    name: "Pomsky",
    breed1: "Husky",
    breed2: "Pomeranian",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-4.jpg",
    description: "Huskeranian"
  },
  {
    name: "Bullpug",
    breed1: "Pug",
    breed2: "English Bulldog",
    image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-25.jpg",
    description: "English Pug"
  }
]

var breedlist = [
    
    {name: "Pug",
    image: "https://vetstreet-brightspot.s3.amazonaws.com/1d/e0aab0a8a811e0a0d50050568d634f/file/pug-1-645mk070411.jpg",
    description: "A cute pug"
    },
    {name: "Husky",
    image: "https://www.dogbreedinfo.com/images2/SiberianHuskyNorm2.jpg",
    description: "A cute husky"
    }
    
    ]

function seedDB(){
    // Removes all Mixes
    Mix.remove({}, function(err){
        if(err){
        console.log(err);
        } else {
        console.log("Removed Mixes");
        }
        data.forEach(function(seed){
            Mix.create(seed, function(err, Mix){
                if(err){
                    console.log(err)
                } else {
                    console.log("Mix added");
                    //
                    Comment.create(
                        {
                            text: "I love these little cuties",
                            author: "Dog Love 3001"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                Mix.comments.push(comment);
                                Mix.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });         
       });
       breedlist.forEach(function(seed){
            Breed.create(seed, function(err, Breed){
                if(err){
                    console.log(err)
                } else {
                    console.log("Breed added");
                    //
                }
            });         
       });
    //add a few Mixes
    });
}


module.exports = seedDB;