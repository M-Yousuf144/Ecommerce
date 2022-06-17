import "./../pages/viewDetails.css";
import { connect } from 'react-redux'
import React, {Component} from 'react';
import Demoimg from '../../assets/images/portfolio/22.jpg';
import Heading from "./heading";


class ViewDetails extends Component {
    constructor () {
        super ()

        this.state = {
          "myState":'initialState'
        }
       
    }
    render (){
        const {getorders} = this.props;
        document.querySelector(".loader-wrapper").style = "display: block";


        let email_length = getorders.sub_total ?  getorders.sub_total.length : 0;
        let shipLen = getorders.base_shipping_amount ? getorders.base_shipping_amount.length : 0;
        let totLen = getorders.grand_total ? getorders.grand_total.length : 0;

        let last = getorders.sub_total ? getorders.sub_total.substring(0,email_length-2) : "";

        let ship = getorders.base_shipping_amount ? getorders.base_shipping_amount.substring(0,shipLen-2) : "";
        let tot = getorders.grand_total ? getorders.grand_total.substring(0,totLen-2) : "";

  return (

<div class="container-fluid mt-12 mb-12"  style={{paddingTop:"50px"}}>
    <div class="row  cart align-items-center justify-content-center" >
    <div className='head50' />
         <Heading name="Order Details" />
        <div class="col-md-8">
            <div class="card" style={{maxWidth:"2040px"}}>
               
                <div class="row g-0">
                    <div class="col-md-6 border-right p-5" style={{overflowY:"auto", height:600}}>
                    
                    <table class="table  table-hover">
                       
                        <tbody>
                            {(getorders.items)?getorders.items.map(item_data =>(
                            <tr>
                            <td>
                         
                                <img src={(item_data.product!= null)?item_data.product.images[0].url:Demoimg} alt="PI" style={{width:'80px', height:'80px'}} />
                            </td>
                            <td style={{paddingTop:'6%'}}>{item_data.name} <br />x{item_data.qty_ordered} </td>
                            <td style={{paddingTop:'6%'}}>{item_data.formated_price}</td>
                            </tr>
                            )):<h4>No Data Found</h4>}
                           
                           
                        </tbody>
                    </table>
                    


                    </div>
                    <div class="col-md-6 background-muted">
                        <div class="p-3 border-bottom">
                            <div class="d-flex justify-content-between align-items-center"> <span> Order No #{getorders.id}</span> <span>Order Status : {getorders.status}</span>  </div>
                            <div class="mt-3">
                                <h6 class="mb-0">{getorders.customer_first_name + ' ' + getorders.customer_last_name}</h6> <span class="d-block mb-0">{getorders.customer_email}</span> <small>{(getorders.customer)?getorders.customer.phone:''}</small>
                              
                                <div class="d-flex flex-column mt-3"> 
                                 <h6 class="mb-0">{getorders.shipping_address? getorders.shipping_address.address1[0] : ""}</h6> 
                                 <span class="d-block mb-0">Postal Code : {(getorders.shipping_address)?getorders.shipping_address.postcode:''}</span> 
                                 <span>{(getorders.shipping_address)?getorders.shipping_address.city :''+ ',' + (getorders.shipping_address)? getorders.shipping_address.state :'' + ',' +(getorders.shipping_address.country)? getorders.shipping_address.country:''}</span></div>
                               
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>Payment Method</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>
                                    {getorders.payment_title}</span> </div>
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>Subtotal</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>
                                    {/* {getorders.sub_total} */}
                                    {last}
                                    </span> </div>
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>Shipping fees</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>
                                    {ship}
                                    </span> </div>
                            </div>
                        </div>
                        <div class="row g-0">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">Total</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">
                                    {tot}
                                    </span> </div>
                            </div>
                        </div>

                        <div class="row g-0">
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">
                                <input type="button" className="btn btn-solid" value="Return" />
                                    </span> </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div> </div>
            </div>
        </div>
    </div>
</div>
  )
}
}
const mapStateToProps = (state) => ({
    getorders:(state.orders.order_detail)? state.orders.order_detail.data:'',

})
export default connect(
    mapStateToProps,
    {}
)(ViewDetails)