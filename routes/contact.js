var express = require("express");
var router = express.Router();

router.get("/contact", function(req, res, next) {

    res.render("/contact", {
        title: "Liên Hệ"
    });
});

module.exports = router;