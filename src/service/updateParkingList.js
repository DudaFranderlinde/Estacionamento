export function updateParkingList(parkingList, number, owner, apartmentNumber, apartmentBlock, vehicleColor) {
    for (let spot of parkingList) {
        if (spot.number === number) {
            spot.owner = owner;
            spot.apartment_number = apartmentNumber;
            spot.apartment_block = apartmentBlock;
            spot.vehicle_color = vehicleColor;
        }
    }
    return parkingList;
}