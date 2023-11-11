import React, { createContext, useReducer } from "react";
import { combinedReducer } from "../reducers/combinedReducer";
import { AppState, Action } from "../types";

const initialState: AppState = {
  userData: {
    name: "moi",
    houseSqm: 10,
    currentHeating: "oil",
    street: "pikkukatu 1",
    postalCode: "12345",
    city: "Espoo",
    occupants: 2,
    budget: 2000,
    urgency: 2,
    description: "Mahtava pikku kämppä",
  },
  calculatedData: [],
  offers: [],
  intelligentSummary: "",
  queryId: 0,
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
