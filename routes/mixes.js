var express     = require("express");
var router = express.Router();

var Mix = require("../models/mixes");


router.post('/', function (req, res, next) {

        var mix = new Mix ({
            Name: req.body.Name,
            image: req.body.image,
            breed1: req.body.breed1,
            breed2: req.body.breed2,
            checkAll: "all",
            upvote: 0,
            downvote: 0,
            imageURL: req.body.imageURL
        });
        mix.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
         res.status(201).json({
             message: 'Saved message',
             obj: result
         })
        });
});


router.get("/", function(req, res){
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


router.post('/:id/:action/:direction', function(req, res) {
    var id = req.params.id;
    var action = req.params.action;
    var direction = Number(req.params.direction)
    console.log(direction)

    if (action == 'dislike') {
        Mix.findOneAndUpdate({_id: id}, {$inc: { downvote: direction}}, 
        function(err, doc) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            res.status(200).json({
                message: 'Sucess'
            })
        });
    }
    if (action == 'like') {
        Mix.findOneAndUpdate({_id: id}, {$inc: { upvote: direction}}, 
        function(err, doc) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            res.status(200).json({
                message: 'Sucess'
            })
        });
    }
});








module.exports = router;