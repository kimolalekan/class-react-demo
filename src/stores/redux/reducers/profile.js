function profileReducer(state = "Hi", action) {
  switch (action.type) {
    case "greeting":
      return `Hi ${state}`;
    case "signout":
      return `Bye ${state}`;
    default:
      return state;
  }
}

export default profileReducer;
