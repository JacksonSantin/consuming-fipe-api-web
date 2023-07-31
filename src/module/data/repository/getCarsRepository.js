import { Cars } from "@/module/domain/model/cars";

const getCarsRepository = (axios) => async (params) => {
  try {
    const response = await axios.get(`/${params}/marcas`)

    return response?.data?.map((cars) => new Cars(cars)) ?? []
  } catch (error) {
    throw error
  }
}

export { getCarsRepository }