const express = require("express");
const router = express.Router();




router.get("/about", (req, res) => {
  res.send("about me page :D");
})

module.exports = router;