import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
// import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class HousesService {
    async getHouses() {
        const res = await api.get('api/houses')
        // logger.log('got houses', res.data)
        const newHouses = res.data.map((housePOJO) => new House(housePOJO))
        AppState.houses = newHouses

    }

    async getHouseById(houseId) {
        const res = await api.get(`api/houses/${houseId}`)
        // logger.log('Got house you silly goose', res.data)
        const newHouse = new House(res.data)
        AppState.activeHouse = newHouse
    }


    clearData() {
        AppState.activeCar = null
    }
}

export const housesService = new HousesService()