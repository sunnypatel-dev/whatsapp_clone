import express from "express";
import User from "../models/user.model.js";

const router = express.Router();

router.get("/search-mate", async (req, res) => {
  const searchTerm = req.query.searchTerm;

  // find user with this (searchTerm) - keyword in db

  // Use a regular expression to perform a case-insensitive search
  const regex = new RegExp(`^${searchTerm}`, "i");

  try {
    const results = await User.find({ username: regex });

    const finalResults = results.map((user) => {
      const { password, ...rest } = user.toObject();
      return rest;
    });

    res.status(200).json(finalResults);
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
