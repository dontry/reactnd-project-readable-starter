const INITIAL_STATE = { message: "" };

export default function(state = INITIAL_STATE, action) {
  if (action.type.includes("FAILURE")) {
    return { ...state, message: action.type.replace(/_/g, ' ') };
  } else {
      return {...state, message: ''};
  }
}
