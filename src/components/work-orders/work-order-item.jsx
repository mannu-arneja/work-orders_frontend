import React from 'react';
import './work-order-item.scss'

class WorkOrderItem extends React.Component {

    render() {
        let time = new Date(this.props.order.deadline * 1000)
        time = time.toLocaleString()
        let image = <img src={this.props.worker.image} alt="worker"/>

        return (
            <div className='item-wrapper'>
                <div className='work-order-item-container'>
                    <div className='item-top'>
                        <h2>{this.props.order.name}</h2>
                        <p>{this.props.order.description}</p>
                    </div>
                    <div className='item-bot'>
                        {image}
                        <div className='worker-info'>
                            <div>{this.props.worker.name}</div>
                            <div>{this.props.worker.companyName}</div>
                            <div>{this.props.worker.email}</div>
                        </div>
                    </div>
                    <div className='deadline-time'>{time}</div>
                </div>
            </div>
        )
    }
}

export default WorkOrderItem;