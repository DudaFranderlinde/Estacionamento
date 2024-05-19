import { parkingList } from "./parkList-mock";

export function deleteBooking(indexDelete) {
    parkingList.splice(indexDelete, 1)
}