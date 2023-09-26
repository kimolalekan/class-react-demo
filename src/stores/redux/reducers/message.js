export function messageReducer(state = [], action) {
  switch (action.type) {
    case "new-message":
      return action.state;
    default:
      return state;
  }
}

export function modalReducer(state = false, action) {
  switch (action.type) {
    case "toggle":
      return action.state;
    default:
      return state;
  }
}

export function conversationReducer(state = "", action) {
  switch (action.type) {
    case "new-convo":
      return action.state;
    default:
      return state;
  }
}
