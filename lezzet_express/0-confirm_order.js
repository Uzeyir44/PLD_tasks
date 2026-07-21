export default function confirmOrder(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof orderId === 'number' && orderId >= 0) {
                resolve({
                    id: orderId,
                    status: "confirmed"
                });

                return;
            }

            reject(new Error('Invalid order number'));
        }, 1500);
    });
}