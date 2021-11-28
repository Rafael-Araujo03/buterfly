var express = require("express");
var router = express.Router();

var filmeController = require("../controllers/filmeController");

router.post("/cadastrarfilme", function (req, res) {
    filmeController.cadastrarFilme(req, res);
})

router.get("/metrica", function(req, res) {
    filmeController.metrica(req, res);
})

module.exports = router;
