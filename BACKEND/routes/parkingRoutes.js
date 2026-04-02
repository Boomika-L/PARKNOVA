const express = require("express");
const router = express.Router();
const controlller = require("../controllers/parkingController");

router.get("/slots",controlller.getSlot);
router.post("/book",controlller.bookSlot);
module.exports = router;