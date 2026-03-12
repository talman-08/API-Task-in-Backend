import express from "express";

const router = express.Router();

// Landing page
router.get("/", (req, res) => {
  res.render("index");
});

// Friday page
router.get("/friday", (req, res) => {

  let date = req.query.date ? new Date(req.query.date) : new Date();

  const day = date.toLocaleDateString("en-US", { weekday: "long" });

  const isFriday = day === "Friday";

  res.render("friday", {
    date,
    day,
    isFriday
  });

});

export default router;