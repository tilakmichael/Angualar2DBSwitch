var express = require("express");
var router  = express.Router() ; 
var url = require('url') ;

router.get("/", function(req, resp , next) {
    resp.render("index.html")
})

module.exports = router ;





