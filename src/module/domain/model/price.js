class Price {
  constructor({
    TipoVeiculo = 0,
    Valor = "",
    Marca = "",
    Modelo = "",
    AnoModelo = 0,
    Combustivel = "",
    CodigoFipe = "",
    MesReferencia = "",
    SiglaCombustivel = "",
  }) {
    this.TipoVeiculo = TipoVeiculo
    this.Valor = Valor
    this.Marca = Marca
    this.Modelo = Modelo
    this.AnoModelo = AnoModelo
    this.Combustivel = Combustivel
    this.CodigoFipe = CodigoFipe
    this.MesReferencia = MesReferencia
    this.SiglaCombustivel = SiglaCombustivel
  }
}

export { Price }
