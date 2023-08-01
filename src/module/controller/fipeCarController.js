import { ref } from "vue";


const fipeCarController = (
  getCarsUseCase,
  getModelsUseCase,
  getPriceUseCase,
  getYearsUseCase,
) => () => {
  const cars = ref([])
  const models = ref([])
  const price = ref([])
  const years = ref([])
  const arrayYear = ref([])
  const arrayValue = ref([])
  const links = ref(["Home", "Test Drive", "Contact"])
  const vehiclePrice = ref({})
  const selectedModel = ref(null)
  const selectedYear = ref(null)
  const selectedBrand = ref(null)
  const drawer = ref(null)
  const tipoVeiculo = ref('')
  const loading = ref(false)

  const searchBrands = async (tipo) => {
    try {
      loading.value = true
      tipoVeiculo.value = tipo
      cars.value = await getCarsUseCase(tipoVeiculo.value)
      console.log("🚀 ~ file: fipeCarController.js:31 ~ searchBrands ~ cars.value:", cars.value)
    } catch (error) {
      alert(error.toString())
    } finally {
      loading.value = false
    }
  }

  const selectedBrands = async () => {
    const params = {
      "codigoMarca": selectedBrand.value.codigo,
      "tipoVeiculo": tipoVeiculo.value
    }

    selectedModel.value = null
    selectedYear.value = null
    vehiclePrice.value = {}

    models.value = await getModelsUseCase(params)
  }

  const selectedModels = async () => {
    try {
      const params = {
        "codigoMarca": selectedBrand.value.codigo,
        "codigoModelo": selectedModel.value.codigo,
        "tipoVeiculo": tipoVeiculo.value
      }

      selectedYear.value = null
      vehiclePrice.value = {}

      years.value = await getYearsUseCase(params)
    } catch (error) {
      alert(error.toString())
    }
  }

  const selectedYears = async () => {
    try {
      const params = {
        "codigoMarca": selectedBrand.value.codigo,
        "codigoModelo": selectedModel.value.codigo,
        "codigoAno": selectedYear.value.codigo,
        "tipoVeiculo": tipoVeiculo.value
      }

      price.value = await getPriceUseCase(params)
    } catch (error) {
      alert(error.toString())
    }
  }

  return {
    cars,
    models,
    price,
    years,
    arrayYear,
    arrayValue,
    links,
    vehiclePrice,
    selectedModel,
    selectedYear,
    selectedBrand,
    drawer,
    tipoVeiculo,
    loading,
    searchBrands,
    selectedBrands,
    selectedModels,
    selectedYears
  }
}

export { fipeCarController }