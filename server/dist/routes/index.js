"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notes_1 = require("../controllers/notes");
const router = (0, express_1.Router)();
router.get("/notes", notes_1.getNotes);
router.post("/notes", notes_1.addNote);
router.put("/notes/:id", notes_1.updateNote);
exports.default = router;
