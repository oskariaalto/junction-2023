import axios from "axios";

export const getCalculatedValues = async () => {
  const url = "http://localhost:3001/calculatedInfo"
  const response  = await axios.get(url)
  console.log(response.data)
  return response.data
}