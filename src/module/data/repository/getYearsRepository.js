import { Years } from "@/module/domain/model/years";

const getYearsRepository = (axios) => async (params) => {
  try {
    const response = await axios.get(`/${params.tipoVeiculo}/marcas/${params.codigoMarca}/modelos/${params.codigoModelo}/anos`)

    return response?.data?.map((years) => new Years(years)) ?? []
  } catch (error) {
    throw error
  }
}

export { getYearsRepository }