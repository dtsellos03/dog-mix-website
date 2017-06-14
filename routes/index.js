var express = require('express');
var router = express.Router();
var Mix = require("../models/mixes");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/topmixes", function(req, res){
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
                topMixes: Sort(mixes, "upvote", 10, -1),
                botMixes: Sort(mixes, "downvote", 10, -1),
            })
        });
})

function Sort(array, parameter, entries, d) {
            array.sort(function(a, b) {
                if (d == -1) {
                    return b[parameter] - a[parameter]
                } else {
                    return a[parameter] - b[parameter]
                }

            })
            return array.slice(0, entries)
        }


module.exports = router;
