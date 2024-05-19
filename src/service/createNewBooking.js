import { parkingList } from "./parkList-mock";


export function createBooking(apartment, block, color, number, owner, plate, status, type) {
    parkingList.push({apartment, block, color, number, owner, plate, status, type })
}