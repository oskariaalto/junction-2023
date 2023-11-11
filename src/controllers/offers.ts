import axios from "axios";

const baseUrl = "http://65.108.240.77/api/v1"

export const getHeatingOffers = async () => {
  const response  = await axios.get(baseUrl+'/home')
  return response.data.offers
}

export const getOffers  = async (params:string) => {
  const response  = await axios.get(`${baseUrl}/offers/${params}/outstanding`)
  return response.data.data
}

export const getOffer = async (params:string) => {
  const response  = await axios.get(`${baseUrl}/offers/${params}`)
  return response.data
}
