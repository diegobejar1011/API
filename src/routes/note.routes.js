const NotesControllers = require("../controllers/note.controller");
const express = require("express");
const router = express.Router();

router.get("/notes", NotesControllers.getAll);

router.post("/notes", NotesControllers.create);

module.exports = router;  