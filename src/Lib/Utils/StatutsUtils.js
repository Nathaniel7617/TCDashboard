export const getStatusClass = (status) => {
    switch (status) {
        case 'PLACED':
            return 'status-placed';
        case 'CONFIRMED':
            return 'status-confirmed';
        case 'SHIPPED':
            return 'status-shipped';
        case 'OUT_FOR_DELIVERY':
            return 'status-out-for-delivery';
        case 'DELIVERED':
            return 'status-delivered';
        default:
            return '';
    }
};