export function getOrderStatus(status) {
    switch (status) {
        case 'PLACE':
            return (
                <span className="capitalize py-1 px-2-2 rounded-md text-xs 
                text-sky-600 bg-blue-100">
                {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            )
            case 'CONFIRMED':
                return (
                    <span className="capitalize py-1 px-2-2 rounded-md text-xs 
                    text-yellow-600 bg-yellow-100">
                    {status.replaceAll('_', ' ').toLowerCase()}
                    </span>
                )
                case 'SHIPPED':
                    return (
                        <span className="capitalize py-1 px-2-2 rounded-md text-xs 
                        text-green-600 bg-green-100">
                        {status.replaceAll('_', ' ').toLowerCase()}
                        </span>
                    )
                    case 'OUT_FOR_DELIVERY':
                        return (
                            <span className="capitalize py-1 px-2-2 rounded-md text-xs 
                            text-red-600 bg-red-100">
                            {status.replaceAll('_', ' ').toLowerCase()}
                            </span>
                        )
                        case 'DELIVERED':
                            return (
                                <span className="capitalize py-1 px-2-2 rounded-md text-xs 
                                text-indigo-900 bg-indigo-100">
                                {status.replaceAll('_', ' ').toLowerCase()}
                                </span>
                            )
                       default:
                       return (
                           <span className="capitalize py-1 px-2-2 rounded-md text-xs 
                           text-sky-600 bg-sky=100">
                           {status.replaceAll('_', ' ').toLowerCase()}
                           </span>
            )
    }
}