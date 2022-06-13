import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from '../../store';
import {reOrder,CancelOrder,viewOrderDetail} from '../../actions'
import { Link } from 'react-router-dom';
import "./myOrders.scss"
class MyOrders extends Component {

    render (){

      
        const {getorders} = this.props;
        
        function handleClick(e) {
            store.dispatch(reOrder(e));
        }
          
        function cancelOrders(e) {
            store.dispatch(CancelOrder(e));
        }

        function viewOrders(e) {
          store.dispatch(viewOrderDetail(e));
      }
   
      // let final = (getorders.length !== 0)?getorders[0].created_at.substring(0, 10):'';

    

  return (
    <>
    <div  style={{ paddingTop:"10%"}}>

<table className='table' 
style={{width:"100%", marginLeft:"0%"}}
>
    <thead className='thead text-center'>
      <tr className='tr'>
        <th className='th'>Order No </th>
     
        <th className='th'>Due Date</th>
        <th className='th'>Status</th>
        <th className='th'>Amount</th>
        <th className='th'>Actions</th>
      </tr>
    </thead>
    <tbody className='tbody text-center' >
{(getorders)?
<>
{getorders.map(data=>(
      <tr className='tr'>
       
        <td className='td py-4'>#{data.id}</td>
       
        <td className='td py-4'>{data.created_at.substring(0, 10)}</td>
        <td className='td'>
          <p class={data.status === "canceled py-2" || data.status === "closed py-2"  ?
           "status status-unpaid py-2" : data.status === "pending py-2"  ?
            "status status-pending py-2" :  data.status === "processing py-2"
              ? "status status-paid py-2" : "status status-paid py-2"}>{data.status}</p>
        </td>
        <td class="amount py-4">PKR {data.grand_total.substring(0,data.grand_total.length-2)}</td>
        <td className='td'>
        <Link to={`${process.env.PUBLIC_URL}/viewDetails`}>    <button type="button" class="btn-solid btn" onClick={() => viewOrders(data.id)}>View</button></Link>  
      &nbsp;&nbsp;
      <button type="button" class="btn-solid btn" onClick={() => handleClick(data.id)} >Re-order</button>
      &nbsp;&nbsp;
      {(data.status === 'pending' || data.status === 'processing')?<button type="button" class="btn-solid btn" onClick={() => cancelOrders(data.id)} >Cancel Order</button>:
      <button type="button" class="btn-solid btn" disabled  >Cancel Order</button>}
      
   
      </td>
      </tr>
    ))}
</>
:''
}
   
    </tbody>
  </table>
    </div>
</>
  )
}
}

const mapStateToProps = (state) => ({
    getorders:(state.orders.get_orders)?state.orders.get_orders.data:[],

})
export default connect(
    mapStateToProps,
    {}
)(MyOrders)