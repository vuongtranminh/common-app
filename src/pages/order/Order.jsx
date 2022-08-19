import React from 'react';
import Tabs from '~/components/common/Tabs';
import OrderAction from '~/components/order/OrderAction';
import OrderInfo from '~/components/order/OrderInfo';

const Order = () => {
    return (
        <div className="order">
            <div className="order__action-group">
                <OrderAction />
            </div>
            <div className="order__info">
                <OrderInfo />
            </div>
        </div>
    );
};

export default Order;
