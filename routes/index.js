const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Open Forum Platform!");
});

module.exports = router;