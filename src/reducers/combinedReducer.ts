import { AppState, Action } from "../types";
//import { cretaQuerie } from "../controllers/quota";

export const combinedReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "UPDATE_USER_INFO_STR":
      console.log(state.userData)
      return { ...state, userData:{
        ...state.userData,
        [action.payload.type||""]: action.payload.strValue
      } };
    case "UPDATE_USER_INFO_NUM":
        return { ...state, userData:{
          ...state.userData,
          [action.payload.type||""]: action.payload.numValue} };
    case "SET_CALCULATED_DATA":
      return { ...state, calculatedData: action.payload.calculatedData || [] };
    default:
      return state;
  }
} 
