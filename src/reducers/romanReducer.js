export default function romanReducer(state, action) {
  switch (action.type) {
    case "ADD-ROMAN":
      return [
        ...state,
        { number: action.number, id: action.id },
      ];
    case "REMOVE-ROMAN":
      return state.filter((roman) => roman.id !== action.id);
    default:
      return state;
  }
}
