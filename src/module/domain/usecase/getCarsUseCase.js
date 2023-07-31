const getCarsUseCase = (repository) => async (params) => {
  try {
    return await repository(params)
  } catch (error) {
    throw error
  }
}

export { getCarsUseCase }