import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("NodeJS And Express Server - Softka")
});

router.get("/users", (req, res) => {
    res.send("NodeJS And Express Users Route")
});

router.get("/users/cool", (req, res) => {
    res.send("You Are Cool - Softka.")
});

export default router;