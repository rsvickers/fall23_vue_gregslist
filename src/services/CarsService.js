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

  async getCarById(carId) {
    const res = await api.get(`api/cars/${carId}`)
    logger.log('GOT CAR', res.data)
    const newCar = new Car(res.data)
    AppState.activeCar = newCar
  }

  async createCar(carData) {
    const res = await api.post('api/cars', carData)
    logger.log('CREATED CAR', res.data)
    const newCar = new Car(res.data)
    AppState.cars.push(newCar)
  }

  async destroyCar(carId) {
    const res = await api.delete(`api/cars/${carId}`)
    logger.log('DESTROYED CAR', res.data)
    this.clearData()
  }

  async editCar(carData) {
    const res = await api.put(`api/cars/${carData.id}`, carData)
    logger.log('EDITED CAR', res.data)
    const newCar = new Car(res.data)
    AppState.activeCar = newCar
  }

  clearData() {
    AppState.activeCar = null
  }
}

export const carsService = new CarsService()