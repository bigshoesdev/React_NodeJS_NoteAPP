import { Response, Request } from "express";
import { INote } from "../../types/note";
import Note from "../../models/note";

const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes: INote[] = await Note.find();
    res.status(200).json({ notes });
  } catch (error) {
    throw error;
  }
};

const addNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<INote, "name" | "text">;

    const note: INote = new Note({
      name: body.name,
      text: body.text,
    });

    const newTodo: INote = await note.save();
    const allNotes: INote[] = await Note.find();

    res
      .status(201)
      .json({ message: "Note added", note: newTodo, notes: allNotes });
  } catch (error) {
    throw error;
  }
};

const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateNote: INote | null = await Note.findByIdAndUpdate(
      { _id: id },
      body
    );
    const allNodes: INote[] = await Note.find();
    res.status(200).json({
      message: "Note updated",
      note: updateNote,
      notes: allNodes,
    });
  } catch (error) {
    throw error;
  }
};

export { getNotes, addNote, updateNote };
