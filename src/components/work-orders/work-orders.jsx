import React from 'react';
import './work-orders.css';
import WorkOrderItem from './work-order-item';

class WorkOrders extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let workOrderArr = this.props.orders;
        let items = workOrderArr.map(order => {
            return (
                <WorkOrderItem key={`order-${order.id}`} order={order} />
            )
        })
        return(
            <div className='work-orders-container'>
                {items}
            </div>
        )
    }
}

export default WorkOrders;