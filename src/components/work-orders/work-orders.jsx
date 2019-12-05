import React from 'react';
import './work-orders.css';
import WorkOrderItem from './work-order-item';

class WorkOrders extends React.Component {

    componentDidUpdate() {
        this.fetched = true
    }

    render() {
        let items

        if (this.fetched) {
            const workOrderArr = this.props.orders;
            const workersObj = this.props.workers;
            const filterText = this.props.filterText.toLowerCase().trim();
            const sortDeadlineLatest = this.props.sortDeadlineLatest;
            items = [];

            workOrderArr.sort((a,b) => {
                return sortDeadlineLatest ? b.deadline - a.deadline : a.deadline - b.deadline 
            })

            workOrderArr.forEach(order => {
                let curWorker = workersObj[order.workerId]
                if (curWorker.name.toLowerCase().indexOf(filterText) === -1) {
                    return;
                }
                items.push(
                    <WorkOrderItem 
                        key={`order-${order.id}`} 
                        order={order}
                        worker={curWorker}
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