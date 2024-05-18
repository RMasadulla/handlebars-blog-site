
require("dotenv").config()
const router = require("express").Router();


router.get("/", (req, res) => {
    res.render("index" ,
     {
        title: "welcome to home page",
        meta: `<meta name="author" content="Asadulla Ahmed" />`
     },)
});

router.get("/profile", (req, res) => {
    res.render("profile" ,
     {
        title: "Profile Page",
        meta: `<meta name="author" content="Ripon Ahmed" />`,
        css: `<link rel="stylesheet" type="text/css" href="style.css">`

     },)
});

router.get("/login", (req, res) => {
    res.render("login" ,
     {
        title: "Login Page",
        meta: `<meta name="author" content="Roni Islam" />`,
        css: `<link rel="stylesheet" type="text/css" href="login.css">`

     },)
});

router.get("/about", (req, res) => {
    res.render("about" ,
     {
        title: "This is about page"

     },)
});
router.get("/blog", (req, res) => {
    res.render("blog" ,
     {
        title: "This is blog page"

     },)
});

module.exports = router;
