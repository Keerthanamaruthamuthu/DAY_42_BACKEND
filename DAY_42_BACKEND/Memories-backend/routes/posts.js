const express = require("express");
const { getPosts, createPost, updatePost, deletePost, likePost } = require("./../controllers/posts.js");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

module.exports = router;