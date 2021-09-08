interface INote {
  _id?: string;
  name?: string;
  text?: string;
  createdAt?: string;
  updatedAt?: string;
}

type ApiDataType = {
  message: string;
  notes: INote[];
  note?: INote;
};
