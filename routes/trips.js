import express from "express";

import tripCtrl from "../controllers/trips.js";

const router = express.Router();

router.get("/", tripCtrl.get);
router.post("/trips", function (req, res) {
  tripCtrl.create;
});

export default router;
