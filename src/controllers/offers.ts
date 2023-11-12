import axios from "axios";

const baseUrl = "https://ai-bert-backend-qrwoug6p3q-lz.a.run.app/api/v1"

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
