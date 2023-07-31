import { Price } from "@/module/domain/model/price";

const getPriceRepository = (axios) => async (params) => {
  try {
    const response = await axios.get(`/${params.tipoVeiculo}/marcas/${params.codigoMarca}/modelos/${params.codigoModelo}/anos/${params.codigoAno}`)

    return response?.data?.map((price) => new Price(price)) ?? []
  } catch (error) {
    throw error
  }
}

export { getPriceRepository }