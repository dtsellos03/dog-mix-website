var express     = require("express");
var router = express.Router();
var Comment = require("../models/comment");
var Mix = require("../models/mixes");
var middleware = require("../middleware/");



router.get("/", function(req, res){
    Mix.find({}, function(err, Mixes){
        if(err){
            console.log(err);
        } else {
            res.render("Mixes/index",{Mixes:Mixes});
        }
    });

    });
    
router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newMix = {name: name, image: image, description: description, author:author};
    
    Mix.create(newMix, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/Mixes");
        }
    });
});


router.get("/new", function(req, res){
    res.render("Mixes/new");
});
    
router.get("/:id", function(req, res){
    Mix.findById(req.params.id).populate("comments").exec(function(err, foundMix){
       if(err){
           console.log(err);
       } else {
           console.log(foundMix.miracleCount);
           res.render("Mixes/show", {Mix: foundMix});
       }
    });
});

// EDIT MIX

router.get("/:id/edit", middleware.checkMixOwn, function(req, res){
    Mix.findById(req.params.id, function(err, foundMix){
            res.render("Mixes/edit", {Mix: foundMix})
    });
});

// UPDATE MIX

router.put("/:id", middleware.checkMixOwn, function(req, res){
    Mix.findByIdAndUpdate(req.params.id, req.body.Mix, function(err, updatedMix){
        if(err){
            res.redirect("/Mixes");
        } else {
            res.redirect("/Mixes/"+req.params.id);
        }
    });
});

// DESTROY ROUTE

router.delete("/:id", middleware.checkMixOwn, function(req, res){
    Mix.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/Mixes");
        } else {
            res.redirect("/Mixes");
        }
    })
    
});

// LIKE ROUTE


router.post('/:id/dislike', function (req, res) {
    console.log("POST ROUTE")
    var id = req.params.id;
    //console.log(id)
    //Mix.findOneAndUpdate(post, {miracleCount: miracleCount+1})
    Mix.findOneAndUpdate({_id: id}, { $inc: { abominationCount: 1}}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    res.redirect("/Mixes/"+id)
    //console.log()
    //console.log(doc);
    });
});


router.post('/:id/like', function (req, res) {
    console.log("POST ROUTE")
    var id = req.params.id;
    //console.log(id)
    //Mix.findOneAndUpdate(post, {miracleCount: miracleCount+1})
    Mix.findOneAndUpdate({_id: id}, { $inc: { miracleCount: 1}}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    res.redirect("/Mixes/"+id)
    //console.log()
    //console.log(doc);
    });

});

// DISLIKE ROUTE




module.exports = router;