var express     = require("express");
var router = express.Router();

var Mix = require("../models/mixes");




router.get("/", function(req, res){
    console.log("ROUTE REACHED")
    Mix.find()
        .exec(function(err, mixes){
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Sucess',
                obj: mixes
            })
        });
})
    
    
router.get("/:id", function(req, res){
    Mix.findById(req.params.id).exec(function(err, foundMix){
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Sucess',
                obj: foundMix
            })
        });
})


// LIKE ROUTE


router.post('/:id/dislike', function (req, res) {
    console.log("POST ROUTE")
    var id = req.params.id;
    //console.log(id)
    //Mix.findOneAndUpdate(post, {miracleCount: miracleCount+1})
    Mix.findOneAndUpdate({_id: id}, { $inc: { downvote: 1}}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log("SUCEESSS")
    console.log("SUCESS")
    res.status(200).json({
                message: 'Sucess'
            })
    });
});


router.post('/:id/like', function (req, res) {
    console.log("POST ROUTE")
    var id = req.params.id;
    //console.log(id)
    //Mix.findOneAndUpdate(post, {miracleCount: miracleCount+1})
    Mix.findOneAndUpdate({_id: id}, { $inc: { upvote: 1}}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    console.log(doc)
    res.status(200).json({
                message: 'Sucess',
                doc: doc
            })
    });

});



// DISLIKE ROUTE




module.exports = router;