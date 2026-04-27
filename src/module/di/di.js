import { axiosInstance } from "@/core/axios";
import { fipeCarController } from "../controller/fipeCarController"
import { getCarsRepository } from "../data/repository/getCarsRepository";
import { getCarsUseCase } from "../domain/usecase/getCarsUseCase";
import { getModelsRepository } from "../data/repository/getModelsRepository";
import { getModelsUseCase } from "../domain/usecase/getModelsUseCase";
import { getPriceRepository } from "../data/repository/getPriceRepository";
import { getPriceUseCase } from "../domain/usecase/getPriceUseCase";
import { getYearsRepository } from "../data/repository/getYearsRepository";
import { getYearsUseCase } from "../domain/usecase/getYearsUseCase";
import { getAllYearsModelsUseCase } from "../domain/usecase/getAllYearsModelsUseCase";

const getCarsRepositoryImpl = getCarsRepository(axiosInstance)
const getCarsUseCaseImpl = getCarsUseCase(getCarsRepositoryImpl)
const getModelsRepositoryImpl = getModelsRepository(axiosInstance)
const getModelsUseCaseImpl = getModelsUseCase(getModelsRepositoryImpl)
const getPriceRepositoryImpl = getPriceRepository(axiosInstance)
const getPriceUseCaseImpl = getPriceUseCase(getPriceRepositoryImpl)
const getYearsRepositoryImpl = getYearsRepository(axiosInstance)
const getYearsUseCaseImpl = getYearsUseCase(getYearsRepositoryImpl)
const getAllYearsModelsRepositoryImpl = getPriceRepository(axiosInstance)
const getAllYearsModelsUseCaseImpl = getAllYearsModelsUseCase(getAllYearsModelsRepositoryImpl)
const fipeCarControllerImpl = fipeCarController(getCarsUseCaseImpl, getModelsUseCaseImpl, getPriceUseCaseImpl, getYearsUseCaseImpl, getAllYearsModelsUseCaseImpl)

export { fipeCarControllerImpl }