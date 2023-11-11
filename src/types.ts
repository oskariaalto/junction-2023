export interface UserInputInfo {
  name: string;
  houseSqm: number;
  currentHeating: string;
  street: string;
  postalCode: string;
  city: string;
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
  roi: number;
}

export interface CalculatedResponse {
name: string;
roi: number;
total_co2_reduction: number;
total_savings: number;
price: number;
selected:boolean;
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
  emailConversation: string;
  product: string;
}

export interface HeatingSolutionOffers {
  name: string;
  offers: OfferInfo[];
}

export interface AppState {
  userData: UserInputInfo;
  calculatedData: CalculatedResponse[];
  offers: HeatingSolutionOffers[];
}

export interface Action {
  type: string;
  payload: Payload;
}

export interface Payload {
  type?: string;
  numValue?: number;
  strValue?: string;
  calculatedData?: CalculatedResponse[];
  boolValue?: boolean;
  index?: number;
}
