var mongoose = require("mongoose");
var Mix = require("./models/mixes");

var data = [
    {
        Name: "Puguaua",
        image: "https://s-media-cache-ak0.pinimg.com/736x/8b/1a/36/8b1a36a3ed0265dd86b24a3701895dd9.jpg",
        breed1: "Pug",
        breed2: "Chihuahua",
        description: "Pughuahua, Chipugua",
        checkAll: "all",
        upvote: 7,
        downvote: 14
    },
        {
        Name: "Corpug",
        breed1: "Corgi",
        breed2: "Pug",
        image: "http://www.thatcutesite.com/uploads/2011/06/corgi_pug_mix_hybrid_breed.jpg",
        description: "Purgi",
        checkAll: "all",
        upvote: 50,
        downvote: 19
    },
        {
        Name: "Husgi",
        breed1: "Husky",
        breed2: "Corgi",
        image: "http://img.photobucket.com/albums/v704/xVelvet_FuzzButtx/3%20Dog%20Night/ShortLegsHalo.jpg",
        description: "Corsky",
        checkAll: "all",
        upvote: 100,
        downvote: 22
    },
        {
        Name: "Pitsky",
        breed1: "Pitbull",
        breed2: "Husky",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-27.jpg",
        description: "A mix",
        checkAll: "all",
        upvote: 150,
        downvote: 2
        },
        {
        Name: "Corgmation",
        breed1: "Corgi",
        breed2: "Dalmation",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-21.jpg",
        description: "A mix",
        checkAll: "all",
        upvote: 200,
        downvote: 4
        },
        {
        Name: "Chusky",
        breed1: "Chow Chow",
        breed2: "Husky",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-7.jpg",
        description: "Huschow",
        checkAll: "all",
        upvote: 250,
        downvote: 13
        },
        {
        Name: "Dalmachshund",
        breed1: "Dachshund",
        breed2: "Dalmation",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-17.jpg",
        description: "Daschundation",
        checkAll: "all",
        upvote: 175,
        downvote: 45
        },
        {
        Name: "Labsky",
        breed1: "Labrador",
        breed2: "Husky",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-9.jpg",
        description: "Huskador",
        checkAll: "all",
        upvote: 77,
        downvote: 8
        },
        {
        Name: "German Corgi",
        breed1: "Corgi",
        breed2: "German Shepard",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-6.jpg",
        description: "Corgerman",
        checkAll: "all",
        upvote: 99,
        downvote: 5
        },
        {
        Name: "Pomsky",
        breed1: "Husky",
        breed2: "Pomeranian",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-4.jpg",
        description: "Huskeranian",
        checkAll: "all",
        upvote: 98,
        downvote: 4
        },
        {
        Name: "Bullpug",
        breed1: "Pug",
        breed2: "English Bulldog",
        image: "http://static.boredpanda.com/blog/wp-content/uploads/2014/03/mixed-breed-dogs-25.jpg",
        description: "English Pug",
        checkAll: "all",
        upvote: 7,
        downvote: 35
        
      }
]



function seedDB() {
    // Removes all Mixes

    Mix.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Removed Mixes");
        }
        data.forEach(function(seed) {
            Mix.create(seed, function(err, Mix) {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log("Mix added");
                    //

                }
            });
        });
        //add a few Mixes
    });
}


module.exports = seedDB;