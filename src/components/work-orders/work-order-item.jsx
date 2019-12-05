import React from 'react';
import './work-order-item.css'

class WorkOrderItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='work-order-item-container'>
                <p>{this.props.order.id}</p>
            </div>
        )
    }
}

export default WorkOrderItem;