import axios from "axios";
import { UserInputInfo } from "../types";

const baseUrl = "http://65.108.240.77/api/v1"

export const getCalculatedValues = async () => {
  const url = "http://localhost:3001/calculatedInfo"
  const response  = await axios.get(url)
  console.log(response.data)
  return response.data
}

export const createQuerie = async (data: UserInputInfo) => {
  const body  = {
    address:{
      street: data.street,
      zipcode: data.postalCode,
      city: data.city
    },
    occupants: data.occupants,
    houseSqm: data.houseSqm,
    budget: data.budget,
    current_heatings: [{
      heating_type: data.currentHeating,
      percentage: 1,
      state: "installed",
      energy: 2000,
      cost: 2000
    }],
    content: data.description,
    due_date: "2021-12-31T23:59:59.000",
  }
  try{
    const response = await axios.post(baseUrl+'/queries', body)
    //console.log(response.data)
    return response.data
  } catch(error){
    console.log(error)
  }
}