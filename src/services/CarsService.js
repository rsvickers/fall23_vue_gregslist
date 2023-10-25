import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CarsService {
  async getCars() {
    const res = await api.get('api/cars')
    logger.log('GOT CARS', res.data)
    const newCars = res.data.map(pojo => new Car(pojo))
    AppState.cars = newCars
  }
}

export const carsService = new CarsService()