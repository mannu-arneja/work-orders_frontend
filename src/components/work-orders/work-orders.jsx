import React from 'react';
import './work-orders.css';
import WorkOrderItem from './work-order-item';

class WorkOrders extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        this.fetched = true
    }

    render() {
        let items

        if (this.fetched) {
            const workOrderArr = this.props.orders;
            const workersObj = this.props.workers;
            const filterText = this.props.filterText;
            const sortDeadlineLatest = this.props.sortDeadlineLatest;
            items = [];

            workOrderArr.sort((a,b) => {
                return sortDeadlineLatest ? b.deadline - a.deadline : a.deadline - b.deadline 
            })

            workOrderArr.forEach(order => {
                if (workersObj[order.workerId].name.indexOf(filterText) === -1) {
                    return;
                }
                items.push(
                    <WorkOrderItem 
                        key={`order-${order.id}`} 
                        order={order}
                        worker={workersObj[order.workerId]}
                    />
                )
                
            })

        }
        return(
            <div className='work-orders-container'>
                {items}
            </div>
        )
    }
}

export default WorkOrders;