import {Dispatch, SetStateAction} from 'react';

export interface ComponentProp {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
