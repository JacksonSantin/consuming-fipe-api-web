const getPriceRepository = (axios) => async (params) => {
  try {
    const response = await axios.get(`/${params.tipoVeiculo}/marcas/${params.codigoMarca}/modelos/${params.codigoModelo}/anos/${params.codigoAno}`)

    return response?.data ?? []
  } catch (error) {
    throw error
  }
}

export { getPriceRepository }