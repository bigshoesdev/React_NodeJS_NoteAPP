import React from "react";
import { Menu } from "antd";

type Props = {
  note: INote;
  notes: INote[];
  setNote: (note: INote) => void;
};

const NoteItemList: React.FC<Props> = ({ note, notes, setNote }) => {
  const handleNoteItemClick = (e: any) => {
    const note = notes.find((note) => note._id == e.key) as INote;
    setNote(note);
  };

  return (
    <Menu
      mode="inline"
      theme="dark"
      onClick={handleNoteItemClick}
      selectedKeys={[note?._id as string]}
    >
      {notes?.map((note: INote) => (
        <Menu.Item key={note._id}>{note.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default NoteItemList;
