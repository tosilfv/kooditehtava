export default function romanReducer(state, action) {
  switch (action.type) {
    case "ADD-ROMAN":
      let convertedNumber = "";
      if (action.number.toLowerCase() === "i") {
        convertedNumber = 1
      }
      if (convertedNumber !== "") {
        return [
          ...state,
          { number: `${action.number} is ${convertedNumber}`, id: action.id },
        ];
      }
      return [
        ...state,
        { number: `Your input was "${action.number}"`, id: action.id },
      ];
    case "REMOVE-ROMAN":
      return state.filter((roman) => roman.id !== action.id);
    default:
      return state;
  }
}
