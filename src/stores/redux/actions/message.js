const messageAction = (value) => (dispatch) => {
  dispatch({ type: "new-message" });
  return value;
};

const conversationAction = (value) => (dispatch) => {
  dispatch({ type: "new-convo" });
  return value;
};

const modalAction = (value) => (dispatch) => {
  dispatch({ type: "toggle" });
  return value;
};

export { messageAction, conversationAction, modalAction };
