//Task 1

export function cleanTips(trips) {
    return trips.filter(trip => trip.valid === true && trip.fare > 0);
}

//Task 2

export function totalRevenue(trips) {
    data = cleanTips(trips)
    return data.reduce(
        (acc, trip) => acc + trip.fare, 0
    );
}

//Task 3

export function uniquePassengers(trips) {
    ids = trips.map(trip => trips.cardId);

    return new Set(ids);
}

export function isBlocked(cardId, blacklist) {
    black = new Set(blacklist);

    return black.has(cardId);
}

//Task 4

export function RevenueByStation(trips) {
    return trips.reduce(
        (acc, trip) => {
            if (acc.has(trip.station)) {
                acc.set(trip.station, acc.get(trip.station) + trip.fare);
            }
            else {
                acc.set(trip.station, trip.fare);
            }

            return acc
        }, new Map()
    );
}

//Task 5

export function createDeviceCache() {
    const cache = new WeakMap()

    return {
        remember(device, status) {
            cache.set(device, status);
        },

        recall(device) {
            return cache.get(device);
        },

        knows(device) {
            return cache.has(device);
        }
    };
}

//Task 6

export function createProcessRegistry() {
    const processed = new WeakSet();

    return {
        markProcessed(trip) {
            processed.add(trip);
        },

        isProcessed(trip) {
            return processed.has(trip);
        }
    };
}

//Task 7

export function decodeCounter(packet) {
    return {
        total: packet.reduce((acc, value) => acc + value, 0),
        busiestMinute: packet.indexOf(Math.max(...packet)),
        activeMinutes: packet.filter(value => value > 0).length
    };
}

export function packCounter(arr) {
    return new Uint8Array(arr);
}