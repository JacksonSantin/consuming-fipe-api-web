import { Models } from "@/module/domain/model/models";

const getModelsRepository = (axios) => async (params) => {
  try {
    const response = await axios.get(`/${params.tipoVeiculo}/marcas/${params.codigoMarca}/modelos`)

    return response?.data?.map((models) => new Models(models)) ?? []
  } catch (error) {
    throw error
  }
}

export { getModelsRepository }