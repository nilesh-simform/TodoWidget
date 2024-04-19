import {Dispatch, SetStateAction} from 'react';

export interface ComponentProp {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  editTitle?: string;
  editId?: number;
  setEditTitle?: (val: string) => void;
  setEditId?: (val: number) => void;
}
