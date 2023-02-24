import { convertRoman } from "../helpers/helpers";

export default function romanReducer(state, action) {
  switch (action.type) {
    case "ADD-ROMAN":
      let convertedNumber = convertRoman(action.number);
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
