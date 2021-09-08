import React, { useEffect, useState } from "react";
import EditNote from "./components/EditNote";
import "./App.scss";
import { getNotes, addNote, updateNote } from "./API";
import { Button, Col, Modal, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import NoteItemList from "./components/NoteItemList";

const App: React.FC = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [note, setNote] = useState<any>({});

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = (): void => {
    getNotes()
      .then(({ data: { notes } }: INote[] | any) => setNotes(notes))
      .catch((err: Error) => console.log(err));
  };

  const addNewNote = (): void => {
    setNote({});
  };

  const handleSaveNote = async (formData: INote) => {
    let resp: any;
    if (!formData._id) {
      resp = await addNote(formData);
    } else {
      resp = await updateNote(formData);
    }

    let { status, data } = resp;

    console.log(status, data);
    if (status != 201 && status != 200) {
      Modal.error({
        title: "Error!",
        content: "Note is not saved.",
      });
    }

    setNotes(data.notes);
  };

  return (
    <main className="App">
      <Row>
        <Col xs={24} sm={24} md={24} className="Header">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={addNewNote}
          ></Button>
          <h1>My Awesome Notepad</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} lg={10}>
          <NoteItemList
            notes={notes}
            note={note}
            setNote={setNote}
          ></NoteItemList>
        </Col>
        <Col xs={24} sm={24} lg={14}>
          <EditNote note={note} saveNote={handleSaveNote} />
        </Col>
      </Row>
    </main>
  );
};

export default App;
