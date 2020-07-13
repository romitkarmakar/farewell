interface IState {
  selectedUser?: string;
  users: Array<string>;
  questions: Array<any>;
  currentQuestion: number;
}

const initialState: IState = {
  users: [],
  questions: [],
  currentQuestion: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, selectedUser: action.payload };
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_CURRENT_QUESTION":
      return { ...state, currentQuestion: action.payload}
    default:
      return state;
  }
};
