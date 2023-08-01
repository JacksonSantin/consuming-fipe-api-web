const getAllYearsModelsUseCase = (repository) => async (params, yearRow) => {
  try {
    const arrayValue = []
    const vehiclePrice = {}

    const response = await Promise.all(yearRow.map(async (param) => {
      const qryParams = {
        "codigoMarca": params.codigoMarca,
        "codigoModelo": params.codigoModelo,
        "tipoVeiculo": params.tipoVeiculo,
        "codigoAno": param.codigo
      }

      vehiclePrice = await repository(qryParams)

      arrayValue.push(parseFloat(
        vehiclePrice.Valor.replace('R$ ', '')
          .split('.')
          .join('')
          .replace(',', '.')
      ))
    }))

    return arrayValue
  } catch (error) {
    throw error
  }
}

export { getAllYearsModelsUseCase }