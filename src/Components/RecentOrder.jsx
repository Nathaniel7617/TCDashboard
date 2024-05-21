import React from 'react';
import { Link } from 'react-router-dom';
import { getOrderStatus } from '../Lib/Utils/index-order-stat';

const recentOrderData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Daniel Meastro',
        order_date: '2024-05-17T03:24:00',
        order_total: '$550.00',
        current_order_status: 'PLACED',
        shipment_address: 'Cottage Grove, 97424'
    },
    {
        id: '2',
        product_id: '7453',
        customer_id: '96453',
        customer_name: 'JOJO',
        order_date: '2024-05-10T09:40:00',
        order_total: '$470.50',
        current_order_status: 'CONFIRMED',
        shipment_address: 'Wimbledon road, 97424'
    },
    {
        id: '3',
        product_id: '5434',
        customer_id: '65345',
        customer_name: 'Victor Multi-choice',
        order_date: '2024-05-27T13:50:00',
        order_total: '$650.00',
        current_order_status: 'SHIPPED',
        shipment_address: 'Manchester Road, 97424'
    },
    {
        id: '4',
        product_id: '9854',
        customer_id: '87832',
        customer_name: 'Ifeanyi Nathaniel',
        order_date: '2024-05-20T14:30:00',
        order_total: '$700.00',
        current_order_status: 'SHIPPED',
        shipment_address: 'Anfield Road, 97424'
    },
    {
        id: '5',
        product_id: '5627',
        customer_id: '97632',
        customer_name: 'Vera Obinna',
        order_date: '2024-04-10T15:00:00',
        order_total: '$600.00',
        current_order_status: 'OUT_FOR_DELIVERY',
        shipment_address: 'Los Angeles, CA 97424'
    },
    {
        id: '6',
        product_id: '4872',
        customer_id: '77541',
        customer_name: 'Christine Obinna',
        order_date: '2024-07-10T17:00:00',
        order_total: '$750.00',
        current_order_status: 'DELIVERED',
        shipment_address: 'Los Angeles, CA 97424'
    },
];

const RecentOrder = () => {
    return (
        <div className='bg-white px-4 pt-3 pb-4 rounded-xl border border-gray-300 flex-1'>
            <strong className='text-gray-700 font-medium'>Recent Order</strong>
            <div className='mt-3'>
                <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                    <thead className='text-sm font-bold'>
                        <tr>
                            <td>ID</td>
                            <td>Product ID</td>
                            <td>Customer Name</td>
                            <td>Order Date</td>
                            <td>Order Total</td>
                            <td>Shipping Address</td>
                            <td>Order Status</td>
                        </tr>
                    </thead>
                    <tbody className='text-xs'>
                        {recentOrderData.map((order) => (
                            <React.Fragment key={order.id}>
                                <tr>
                                    <td className='py-2'><Link to={`/order/${order.id}`}>#{order.id}</Link></td>
                                    <td className='py-2'><Link to={`/product/${order.product_id}`}>{order.product_id}</Link></td>
                                    <td className='py-2'><Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link></td>
                                    <td className='py-2'>{new Date(order.order_date).toLocaleDateString()}</td>
                                    <td className='py-2'>{order.order_total}</td>
                                    <td className='py-2'>{order.shipment_address}</td>
                                    <td className='py-2'>{getOrderStatus(order.current_order_status)}</td>
                                </tr>
                                <tr><td colSpan="7"><hr className='w-full border-gray-200' /></td></tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrder;
