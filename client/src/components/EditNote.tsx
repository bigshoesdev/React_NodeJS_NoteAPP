import { Button, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";

const { TextArea } = Input;

type Props = {
  saveNote: (formData: INote) => void;
  note: INote;
};

const AddNote: React.FC<Props> = ({ saveNote, note }) => {
  const [formData, setFormData] = useState<INote>({});

  useEffect(() => {
    setFormData(note);
  }, [note]);

  const handleFormChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const target = e.currentTarget;
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitForm = () => {
    if (!formData?.text || !formData?.name) {
      Modal.error({
        title: "Error!",
        content: "Please fill up the inputs.",
      });
    }

    saveNote({ ...formData });
  };

  return (
    <form className="Form">
      <Input
        name="name"
        placeholder="Name"
        onChange={handleFormChange}
        allowClear
        value={formData?.name}
        style={{ marginBottom: "1rem" }}
      ></Input>
      <TextArea
        name="text"
        placeholder="Text"
        onChange={handleFormChange}
        allowClear
        maxLength={250}
        value={formData?.text}
        style={{ marginBottom: "1rem" }}
        rows={5}
      ></TextArea>
      <Button
        type="primary"
        disabled={!formData?.name || !formData?.text}
        onClick={submitForm}
      >
        Save Note
      </Button>
    </form>
  );
};

export default AddNote;
