export interface UserInputInfo {
  name: string;
  houseSqm: number;
  currentHeating: string;
  address: string;
  occupants: number;
  budget: number;
  urgency: number;
  description: string;
}



export interface CalculatedInfo {
  heatingSolution: string;
  averagePrice: number;
  annualSavings: number;
  CO2Savings: number;
}

export interface OfferInfo {
  company: string;
  price: number;
  CO2Savings: number;
  annualSavings: number;
  description: string;
  heatingSolution: string;
  sent: boolean;
  id: number;
  received: boolean;
  paybackTime: number;
}

export interface HeatingSolutionOffers {
  name: string;
  offers: OfferInfo[];
}

