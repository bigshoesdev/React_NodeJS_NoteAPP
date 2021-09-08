import { INote } from "../types/note";
import { model, Schema } from "mongoose";

const todoSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<INote>("Note", todoSchema);
