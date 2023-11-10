export interface UserInputInfo {
  name: string;
  houseSqm: number;
  currentHeating: string;
  address: string;
  occupants: number;
  budget: number;
  urgency: number;
}



export interface CalculatedInfo {
  heatingSolution: string;
  averagePrice: number;
  annualSavings: number;
  CO2Savings: number;
}