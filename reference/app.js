var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Mix  = require("./models/mixes"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds")
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    MixRoutes = require("./routes/mixes"),
    indexRoutes      = require("./routes/index")
    
mongoose.connect("mongodb://localhost/yelp_camp_v10");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Dog mixtape ",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

app.use("/", indexRoutes);
app.use("/Mixes", MixRoutes);
app.use("/Mixes/:id/comments", commentRoutes);

app.use(function(req, res, next){
    res.render('landing.ejs')
})


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The My Dog's Mixtape Server Has Started!");
});