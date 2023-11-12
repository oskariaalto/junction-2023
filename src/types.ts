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
average_price: number;
price: number;
selected:boolean;
id: number;
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
  id: number;
  company_name: string;
  answers: Answers;
}

interface Answers{
  answered: number;
  total: number;
}

export interface SolutionOffers{
  id: number;
  name: string;
  offers: SolutionOffer[];
}

export interface SolutionOffer{
  name: string;
  id: number;
  company: Company;
}

interface Company{
  contact_person: ContactPerson;
  name: string;
  price: number;
  annual_savings: number;
  annual_emission_savings: number;
  estimated_payback_time: number;
  url:string;
  address: Address;
}

interface ContactPerson {
  name: string;
  email: string;
  phone: string;
}

interface Address {
  street: string;
  city: string;
  postal_code: string;
}

interface Offer {
  name: string;
  product: string;
  price: number;
  due_date: string;
  annual_savings: number;
  annual_emission_savings: number;
  estimated_payback_time: number;
}

interface Message {
  id: number;
  user: string;
  message: string;
}

export interface OfferResponse {
  id: number;
  name:string;
  company: Company;
  offer: Offer;
  messages: Message[];
}

export interface AppState {
  userData: UserInputInfo;
  calculatedData: CalculatedResponse[];
  offers: HeatingSolutionOffers[];
  intelligentSummary: string;
  queryId: number;
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
