interface IUser {
  name: string;
  image: string;
  dp: string;
}
interface IState {
  selectedUser?: IUser;
  users: Array<IUser>;
  questions: Array<any>;
  currentQuestion: number;
  message?: {
    type: string;
    body: string;
  };
  isFinnish: boolean;
}

const initialState: IState = {
  users: [],
  questions: [],
  currentQuestion: 0,
  isFinnish: false
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
      return { ...state, currentQuestion: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_FINNISH":
      return { ...state, isFinnish: action.payload };
    default:
      return state;
  }
};
