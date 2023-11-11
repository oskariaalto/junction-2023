import { AppState, Action } from "../types";
//import { cretaQuerie } from "../controllers/quota";

export const combinedReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "UPDATE_USER_INFO_STR":
      return { ...state, userData:{
        ...state.userData,
        [action.payload.type||""]: action.payload.strValue
      } };
    case "UPDATE_USER_INFO_NUM":
        return { ...state, userData:{
          ...state.userData,
          [action.payload.type||""]: action.payload.numValue} };
    case "SET_CALCULATED_DATA":
      console.log(action.payload)
      return { ...state, calculatedData: action.payload.calculatedData || [] };
    case "UPDATE_CALCULATED_DATA":
      if ((action.payload.index||0) >= 0 && (action.payload.index||0)< state.calculatedData.length) {
        const updatedCalculatedData = [...state.calculatedData];
        const updatedItem = {
          ...updatedCalculatedData[action.payload.index||0],
          [action.payload.type||""]: action.payload.numValue || action.payload.strValue || action.payload.boolValue
        };
        updatedCalculatedData[action.payload.index||0] = updatedItem;
        return { ...state, calculatedData: updatedCalculatedData };
      } else{
        return state;
      }
    case "ADD_INTELLIGENT_SUMMARY":
      return { ...state, intelligentSummary: action.payload.strValue || "" };
    case "SET_Query_ID":
      return { ...state, queryId: action.payload.numValue || 0 };
    default:
      return state;
  }
} 
