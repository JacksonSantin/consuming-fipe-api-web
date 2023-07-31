import { onMounted, ref } from "vue";


const fipeCarController = (
  getCarsUseCase,
  getModelsUseCase,
  getPriceUseCase,
  getYearsUseCase
) => () => {
  const cars = ref([])
  const models = ref([])
  const price = ref([])
  const years = ref([])
  const tipoVeiculo = ref('carros')

  const getCars = async () => {
    try {
      cars.value = await getCarsUseCase(tipoVeiculo.value)
      console.log("🚀 ~ file: fipeCarController.js:19 ~ getCars ~ cars.value:", cars.value)
    } catch (error) {
      alert(error.toString())
    }
  }

  const getModels = async () => {
    try {
      const params = {
        "codigoMarca": 59,
        "tipoVeiculo": tipoVeiculo.value
      }

      models.value = await getModelsUseCase(params)
      console.log("🚀 ~ file: fipeCarController.js:33 ~ getModels ~ models.value:", models.value)
    } catch (error) {
      alert(error.toString())
    }
  }

  onMounted(async () => {
    await getCars()
    await getModels()
  })

  return {
    cars,
    models,
    price,
    years,
  }
}

export { fipeCarController }