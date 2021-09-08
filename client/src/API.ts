import axios, { AxiosResponse } from "axios";

const baseUrl: string = "";

export const getNotes = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const notes: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/notes"
    );
    return notes;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addNote = async (
  formData: INote
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const note: Omit<INote, "_id"> = {
      name: formData.name,
      text: formData.text,
    };
    const addNoteResp: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/notes",
      note
    );
    return addNoteResp;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateNote = async (
  note: INote
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const noteUpdate: Pick<INote, "text" | "name"> = {
      text: note.text,
      name: note.name,
    };

    const updateNoteResp: AxiosResponse<ApiDataType> = await axios.put(
      `${baseUrl}/notes/${note._id}`,
      noteUpdate
    );

    return updateNoteResp;
  } catch (error: any) {
    throw new Error(error);
  }
};
