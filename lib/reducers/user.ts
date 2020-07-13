interface IState {
  selectedUser?: string;
  users: Array<string>;
}

const initialState: IState = {
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, selectedUser: action.payload };
    case "SET_USERS":
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
