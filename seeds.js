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
        downvote: 35},
        {"Name":"Bo-Dach","breed1":"Dachshund","breed2":"Boston Terrier","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Bo-Dach.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Chiweenie","breed1":"Dachshund","breed2":"Chihuahua","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Chiweenie.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Dameranian","breed1":"Dachshund","breed2":"Pomeranian","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Dameranian.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Daug","breed1":"Dachshund","breed2":"Pug","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Daug.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Dorgi","breed1":"Dachshund","breed2":"Corgi","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Dorgi.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Dorkie","breed1":"Dachshund","breed2":"Yorkshire Terrier","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Dorkie.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Doxador","breed1":"Dachshund","breed2":"Labrador Retriever","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Doxador.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Golden Dox","breed1":"Dachshund","breed2":"Golden Retriever","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Golden-Dox.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Papshund","breed1":"Dachshund","breed2":"Papillon","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Papshund.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Shibadox","breed1":"Dachshund","breed2":"Shiba Inu","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Shibadox.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Doxle","breed1":"Dachshund","breed2":"Beagle","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/02/4e60be815c84133f85bc36cc91d965d4.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Dorgi","breed1":"Dachshund","breed2":"Corgi","image":"http://www.101dogbreeds.com/wp-content/uploads/2015/05/Dorgi.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Corgherd","breed1":"Corgi","breed2":"Australian Shepherd","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web11/sub-buzz-2448-1468406006-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Labragi","breed1":"Corgi","breed2":"Labrador","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web13/sub-buzz-23761-1468406410-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"German Shephergi","breed1":"Corgi","breed2":"German Shepherd","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web13/sub-buzz-24434-1468407414-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Beagi","breed1":"Corgi","breed2":"Beagle","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web11/sub-buzz-3255-1468406994-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Shigi","breed1":"Corgi","breed2":"Shiba Inu","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/7/asset/buzzfeed-prod-web15/sub-buzz-21877-1468408023-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Cohuahua","breed1":"Corgi","breed2":"Chihuahua","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web05/sub-buzz-30503-1468407584-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Corgiever","breed1":"Corgi","breed2":"Golden Retriever","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/6/asset/buzzfeed-prod-web04/sub-buzz-2081-1468406865-2.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Greygi","breed1":"Corgi","breed2":"Greyhound","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/7/asset/buzzfeed-prod-web12/sub-buzz-29139-1468407952-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pitgi","breed1":"Corgi","breed2":"Pit Bull","image":"https://img.buzzfeed.com/buzzfeed-static/static/2016-07/13/7/asset/buzzfeed-prod-web08/sub-buzz-30375-1468408228-1.png?downsize=715:*&output-format=auto&output-quality=auto","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Corgeranian","breed1":"Corgi","breed2":"Pomeranian","image":"http://static.boredpanda.com/blog/wp-content/uploads/2017/05/corgi-mix-cross-breeds-1-591998b9a867f__605.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Chowrgi","breed1":"Corgi","breed2":"Chow Chow","image":"http://static.boredpanda.com/blog/wp-content/uploads/2017/05/corgi-mix-cross-breeds-2-591b02bbf338f__605.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Alaskan Corgi","breed1":"Corgi","breed2":"Alaskan Malamute","image":"http://static.boredpanda.com/blog/wp-content/uploads/2017/05/591c51134240f_UC8srbW__605.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pomtease","breed1":"Maltese","breed2":"Pomeranian","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/pom-maltese-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Perkintease","breed1":"Maltese","breed2":"Perkingese","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/perkingese-maltese.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Malterrier","breed1":"Maltese","breed2":"Yorkshire Terrier","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/yorkie-x-maltese.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Malteagle","breed1":"Maltese","breed2":"Beagle","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/malti-beagle-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Mug","breed1":"Maltese","breed2":"Pug","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/malti-pug.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Papimalt","breed1":"Maltese","breed2":"Papillon","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/papillon-maltese.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Russell Pug","breed1":"Pug","breed2":"Jack Russell Terrier","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/478c680d80eadb81a50fe1aeaa4d9e5a.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Shipug","breed1":"Pug","breed2":"Shiba Inu","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/pug-shiba-Inu-BowWow-Times.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Le Pugdog","breed1":"Pug","breed2":"French Bulldog","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/pug-and-french-bulldog.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Dachpug","breed1":"Pug","breed2":"Dachshund","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/pug-dachshund-mix-cross.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pugle","breed1":"Pug","breed2":"Beagle","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/pug-beagle.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pugterrier","breed1":"Pug","breed2":"Yorkshire Terrier","image":"https://s3-eu-west-1.amazonaws.com/bowwowtimes-new/wp-content/uploads/2015/08/pug-yorkshire-terrier.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Australian Pug","breed1":"Pug","breed2":"Australian Shepherd","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Australian-Shepard-Pug-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pugeranian","breed1":"Pug","breed2":"Pomeranian","image":"http://buzzsharer.com/wp-content/uploads/2015/09/pomeranian-pug-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pughound","breed1":"Pug","breed2":"Basset Hound","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Basset-pug-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Boston Pug","breed1":"Pug","breed2":"Boston Terrier","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Pug-and-Boston-Terrier-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Boxpug","breed1":"Pug","breed2":"Boxer","image":"http://www.pawbuzz.com/wp-content/uploads/sites/551/2016/04/Poxer-Boxer-Pug.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Pugtzu","breed1":"Pug","breed2":"Shih Tzu","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Shih-Tzu-cross-Pug.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Boston Bulldog","breed1":"French Bulldog","breed2":"Boston Terrier","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Frenchton.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"French Pitdog","breed1":"French Bulldog","breed2":"Pitbull","image":"http://buzzsharer.com/wp-content/uploads/2015/09/American-Pitbull-French-Bulldog-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Frenchuahua","breed1":"French Bulldog","breed2":"Chihuahua","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Chihuahua-French-Bulldog-mix1.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Bulldogeagle","breed1":"French Bulldog","breed2":"Beagle","image":"http://buzzsharer.com/wp-content/uploads/2015/09/Beagle-French-Bulldog-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Bulldoganian","breed1":"French Bulldog","breed2":"Pomeranian","image":"http://www.holidogtimes.com/wp-content/uploads/2016/02/pomerfrenchie.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Frenchowow","breed1":"French Bulldog","breed2":"Chow Chow","image":"http://www.holidogtimes.com/fr/wp-content/uploads/sites/2/2016/02/bulldogs-french-breeds-14.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Beager","breed1":"Boxer","breed2":"Beagle","image":"http://www.pawbuzz.com/wp-content/uploads/sites/551/2015/09/boxer-crossbreeds-1-681x1024.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Boxita","breed1":"Boxer","breed2":"Akita","image":"http://www.pawbuzz.com/wp-content/uploads/sites/551/2015/09/boxer-crossbreeds-3.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Golden Box","breed1":"Boxer","breed2":"Golden Retriever","image":"http://www.pawbuzz.com/wp-content/uploads/sites/551/2016/04/golden-boxer-2.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0},
{"Name":"Husker","breed1":"Boxer","breed2":"Siberian Husky","image":"http://www.pawbuzz.com/wp-content/uploads/sites/551/2016/04/husky-boxer-mix.jpg","description":null,"checkAll":"all","upvote":0,"downvote":0}]
        



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