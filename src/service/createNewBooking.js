import { storageService } from "./storageService";


export function createBooking(newBooking) {
    let storageData = storageService.get();
    let list = storageData === null ? [] : storageData;

    list.push(newBooking);
    storageService.save(list);
}