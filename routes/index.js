var express     = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var Mix = require("../models/mixes");
var Breed = require("../models/breeds");

router.get("/", function(req, res){
    res.render("landing");
});

    
// AUTH ROUTES

router.get("/register", function(req, res){
    res.render("register");
})

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/Mixes");
        });
    });
});

router.get("/login", function(req, res){
    res.render("login");
})

router.post("/login", passport.authenticate("local",
    {
        successRedirect: "/Mixes",
        failureRedirect: "/login"
    }), function(req, res){

});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/Mixes");
})

router.get("/breeds", function(req, res){
    var requestedBreed = req.params.breed;
    var uncleanlist = [];
    Breed.find({}, function (err, Breeds) {
        Breeds.forEach(function(element){
            uncleanlist.push(element)
        })
    uncleanlist = uncleanlist.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });
    console.log(uncleanlist);
    res.render("breeds/breeds", {uncleanlist: uncleanlist});
      //  res.render("Mixes/index",{Mixes:Mixes});
        //res.redirect("/Mixes", {docs: docs});// docs is an array
    });
});

router.get("/breeds/:breed", function(req, res){
    var requestedBreed = req.params.breed;
    console.log(requestedBreed)
    Mix.find({ $or:[{ 'breed1': requestedBreed }, {'breed2': requestedBreed}] }, function (err, Mixes) {
        //console.log(Mixes);
        res.render("breeds/mixbybreed",{Mixes:Mixes,  requestedBreed: requestedBreed});
   // Mix.find({}, 'breed1', function (err, Mixes) {
      //  res.render("Mixes/index",{Mixes:Mixes});
        //res.redirect("/Mixes", {docs: docs});// docs is an array
    });
});
    

module.exports = router;