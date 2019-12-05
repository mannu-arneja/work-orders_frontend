import React from 'react';
import './work-order-item.css'

class WorkOrderItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='work-order-item-container'>
                <p>{this.props.order.name}</p>
                <p>{this.props.order.description}</p>
                <p>{this.props.order.workerId}</p>
                <p>{this.props.order.deadline}</p>
                <span>{this.props.worker.name}</span>
            </div>
        )
    }
}

export default WorkOrderItem;