import React from 'react';
import './work-orders.css';
import WorkOrderItem from './work-order-item';

class WorkOrders extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='work-orders-container'>
                <WorkOrderItem />
            </div>
        )
    }
}

export default WorkOrders;