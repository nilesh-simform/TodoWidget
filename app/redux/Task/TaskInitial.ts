export interface TodoType {
  id: number;
  title: string;
}

export interface TaskStateType {
  list: TodoType[];
  isLoading: boolean;
}

const INITIAL_STATE: TaskStateType = {
  list: [],
  isLoading: false,
};

export default INITIAL_STATE;
