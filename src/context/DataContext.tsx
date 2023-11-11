import React, { createContext, useReducer } from "react";
import { combinedReducer } from "../reducers/combinedReducer";
import { AppState, Action } from "../types";

const initialState: AppState = {
  userData: {
    name: "",
    houseSqm: 0,
    currentHeating: "",
    street: "",
    postalCode: "",
    city: "",
    occupants: 0,
    budget: 0,
    urgency: 0,
    description: "",
  },
  calculatedData: [],
  offers: [],
};

export const DataContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
