export default function validateAddress(address) {
    if (typeof address !== 'string' || !address) {
        throw new Error("Address cannot be empty");
    }
    else if (address.length < 10) {
        throw new Error("Address is too short");
    }
    else {
        return `Delivery address: ${address}`;
    }
}