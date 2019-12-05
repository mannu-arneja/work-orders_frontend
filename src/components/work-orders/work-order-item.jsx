import React from 'react';
import './work-order-item.scss'

class WorkOrderItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='item-wrapper'>
                <div className='work-order-item-container'>
                    <p>{this.props.order.name}</p>
                    <p>{this.props.order.description}</p>
                    <p>{this.props.order.workerId}</p>
                    <p>{this.props.order.deadline}</p>
                    <span>{this.props.worker.name}</span>
                </div>
            </div>
        )
    }
}

export default WorkOrderItem;