"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNote = exports.addNote = exports.getNotes = void 0;
const note_1 = __importDefault(require("../../models/note"));
const getNotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield note_1.default.find();
        res.status(200).json({ notes });
    }
    catch (error) {
        throw error;
    }
});
exports.getNotes = getNotes;
const addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const note = new note_1.default({
            name: body.name,
            text: body.text,
        });
        const newTodo = yield note.save();
        const allNotes = yield note_1.default.find();
        res
            .status(201)
            .json({ message: "Note added", note: newTodo, notes: allNotes });
    }
    catch (error) {
        throw error;
    }
});
exports.addNote = addNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateNote = yield note_1.default.findByIdAndUpdate({ _id: id }, body);
        const allNodes = yield note_1.default.find();
        res.status(200).json({
            message: "Note updated",
            note: updateNote,
            notes: allNodes,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateNote = updateNote;
