interface IState {
  clicked: number;
}

const initialState: IState = {
  clicked: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CLICKED":
      return { ...state, clicked: state.clicked + 1 };
    default:
      return state;
  }
};
