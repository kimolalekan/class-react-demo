const incrementAction = (value) => (dispatch) => {
  dispatch({ type: "increment" });
  return value;
};

const decrementAction = (value) => (dispatch) => {
  dispatch({ type: "increment" });
  return value;
};

export { incrementAction, decrementAction };
