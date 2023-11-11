import axios from "axios";

export const getUser  = async () => {
  const url = "http://localhost:3001/profile"
  const response  = await axios.get(url)
  console.log(response.data)
  return response.data
}


export const getOffers = async () => {
  const url = "http://localhost:3001/offers"
  const response  = await axios.get(url)
  return response.data
}