var Mix = require("../models/mixes");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCommentOwn = function (req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the Mix?
            if(foundComment.author.id && foundComment.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("back");
            }
           }
        });
    } else {
        res.redirect("back");
    }
};


middlewareObj.checkMixOwn = function(req, res, next) {
    if(req.isAuthenticated()){
        Mix.findById(req.params.id, function(err, foundMix){
           if(err){
               res.redirect("back");
           }  else {
               // does user own the Mix?
            if(foundMix.author.id && foundMix.author.id.equals(req.user._id)) {
                next();
            } else {
                res.redirect("back");
            }
           }
        });
    } else {
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = middlewareObj;