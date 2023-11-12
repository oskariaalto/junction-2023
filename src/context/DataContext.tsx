import React, { createContext, useReducer } from "react";
import { combinedReducer } from "../reducers/combinedReducer";
import { AppState, Action } from "../types";

const initialState: AppState = {
  userData: {
    name: "John Doe",
    houseSqm: 100,
    currentHeating: "oil",
    street: "Mannerheimintie 2",
    postalCode: "12345",
    city: "Helsinki",
    occupants: 4,
    budget: 20000,
    urgency: 2,
    description:
      "I want to save money and the environment by switching to geothermal heating. I have a 100m2 house with 4 occupants and the house is 50 year old.",
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
