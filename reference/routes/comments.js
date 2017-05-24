var express     = require("express");
var router = express.Router({mergeParams: true});
var Mix = require("../models/mixes");
var Comment = require("../models/comment");
var middleware = require("../middleware/");


router.get("/new", middleware.isLoggedIn, function(req, res){
    Mix.findById(req.params.id, function(err, foundMix){
       if(err){
           console.log(err);
       } else {
           res.render("comments/new", {Mix: foundMix});
       }
    });
});
    
router.post("/", middleware.isLoggedIn, function(req, res){
    Mix.findById(req.params.id, function(err, Mix){
       if(err){
           console.log(err);
           res.redirect("/Mixes");
       } else {
           Comment.create(req.body.comment, function(err, comment){
              if(err){
                  console.log(err)
              } else {
                  comment.author.id = req.user._id;
                  comment.author.username = req.user.username;
                  comment.save()
                  Mix.comments.push(comment);
                  Mix.save()
                  res.redirect('/Mixes/'+Mix._id)
              }
           })
           
       }


});
})

router.get("/:comment_id/edit", middleware.checkCommentOwn, function(req, res){
    Comment.findById(req.params.comment_id, function(err, foundComment){
        if(err){
            res.redirect("back");
        } else {
            res.render("comments/edit", {Mix_id: req.params.id, comment: foundComment});
        }
    });
});

router.put("/:comment_id", middleware.checkCommentOwn, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/Mixes/"+req.params.id)
        }
    })
});

router.delete("/:comment_id", middleware.checkCommentOwn, function(req, res){
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
        if(err){
            res.redirect("back");
        } else {
            res.redirect("/Mixes/"+req.params.id)
        }
    });
});

module.exports = router;