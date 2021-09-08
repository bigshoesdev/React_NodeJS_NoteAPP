import { Router } from "express";
import { getNotes, addNote, updateNote } from "../controllers/notes";

const router: Router = Router();

router.get("/notes", getNotes);

router.post("/notes", addNote);

router.put("/notes/:id", updateNote);

export default router;
