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
        // const filterText = this.props.filterText;
        // const sortDeadline = this.props.sortDeadline;
        // let workOrderArr = [];
        // this.props.orders.forEach(order => {
        //     if ()
        // })
        if (this.fetched) {
            const workOrderArr = this.props.orders;
            const workersObj = this.props.workers;
            const filterText = this.props.filterText;
            const sortDeadline = this.props.sortDeadline;
            items = [];

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
            // this.items = workOrderArr.map(order => {
            //     return (
            //         <WorkOrderItem 
            //             key={`order-${order.id}`} 
            //             order={order}
            //             worker={workersObj[`${order.workerId}`]}
            //         />
            //     )
            // })


        }
        return(
            <div className='work-orders-container'>
                {items}
            </div>
        )
    }
}

export default WorkOrders;