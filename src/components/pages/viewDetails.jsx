import "./../pages/viewDetails.css";

import { connect } from 'react-redux'
import React, {Component} from 'react';
import Demoimg from '../../assets/images/portfolio/22.jpg';
import Heading from "./heading";
import ViewReturn from "./viewReturn";
import $ from 'jquery';
import { postReturn } from "../../actions";
import store from "../../store";

class ViewDetails extends Component {
    constructor () {
        super ()

        this.state = {
          "myState":'initialState',
          'current':'detail',
          'active':true,
          'reason':''
        }
       
    }

returnsubmit = (e) =>{
    document.querySelector(".loader-wrapper").style = "display: block";

        var order_id = e
        var product = [];
        var qty = [];


        $.each($("input[name='returnitem']:checked"), function(){            
            product.push($(this).val());
        });

        product.map(id =>(
        qty.push(document.querySelector(`#qty${id}`).value)
        ));

        let obj ={
            order_no : order_id,
            product_id : JSON.stringify(product),
            qty : JSON.stringify(qty),
            reason: this.state.reason
        }
        store.dispatch(postReturn(obj));
    
  
}
    
    render (){
        const {getorders} = this.props;
        console.log(getorders)
        if(this.state.current == 'detail' && this.state.active == true){
            document.querySelector(".loader-wrapper").style = "display: block";
        }




  return (
<>

<div class="container-fluid  mb-12" >
    <div class="row  cart align-items-center justify-content-center" >
    <div className='' />
         <Heading name="Order Details" />
        <div class="col-md-8">
            <div class="card" style={{maxWidth:"2040px"}}>
               
                <div class="row g-0">
                    <div class="col-md-6 border-right   " style={{overflowY:"auto", height:"auto"}}>
                    
                    <table class="table  table-hover">
                       {(this.state.current == 'detail')?
                       <tbody>
                        {(getorders)?
                        <>
                        {(getorders.items)?getorders.items.map(item_data =>(
                            <tr>
                            <td>
                         
                                <img src={(item_data.product!= null)?item_data.product.images[0].url:Demoimg} alt="PI" style={{width:'80px', height:'80px'}} />
                            </td>
                            <td style={{paddingTop:'6%'}}>{item_data.name} <br />x{item_data.qty_ordered} 
                            {(item_data.qty_refunded != 0)?
                         <>
                         <br /><span className="base_color">
                            <b >{item_data.qty_refunded} Quantity Refunded</b></span>
                         </>   :
                         ''
                         }
                            </td>
                            <td style={{paddingTop:'6%'}}>{item_data.formated_price}</td>
                            
                            </tr>
                            ))
                            
                            
                            :<h4>No Data Found</h4>}
                            </>
                        :<h4>No Data Found</h4>
                        }
                       
                      
                      
                   </tbody>
                   :''
                    }

                       {(this.state.current == 'return')?
                       <tbody>
                       {(getorders.items)?getorders.items.map(item_data =>(
                       <tr>
                           <td><input type="checkbox" name="returnitem" id="returnitem" value={item_data.product.id} /></td>
                       <td>
      
                           <img src={(item_data.product!= null)?item_data.product.images[0].url:Demoimg} alt="PI" style={{width:'80px', height:'80px'}} />
                       </td>
                       <td style={{paddingTop:'6%'}}>{item_data.name} <br />
                      x <select name={`qty${item_data.product.id}`} id={`qty${item_data.product.id}`}>
                       {[...Array.from(Array(item_data.qty_ordered).keys())].map((num, i) => <option value={num+1} key={i}>{num+1}</option>)}
                       </select>
                       </td>
                       <td style={{paddingTop:'6%'}}>{item_data.formated_price}</td>
                       </tr>
                       )):<h4>No Data Found</h4>}
                      
                      
                   </tbody>
                   :''
                    }



                        
                    </table>
                    


                    </div>
                    <div class="col-md-6 background-muted">
                        <div class="p-3 border-bottom">
                            <div class="d-flex justify-content-between align-items-center"> <span> Order No #{(getorders)?getorders.id:''}</span> <span>Order Status : {(getorders)?getorders.status:''}</span>  </div>
                            <div class="mt-3">
                                <h6 class="mb-0">{(getorders)?getorders.customer_first_name:'' + ' ' + (getorders)?getorders.customer_last_name:''}</h6> <span class="d-block mb-0">{getorders.customer_email}</span> <small>{((getorders)?getorders.customer:'')?getorders.customer.phone:''}</small>
                              
                                <div class="d-flex flex-column mt-3"> 
                                 <h6 class="mb-0">{getorders.shipping_address? getorders.shipping_address.address1[0] : ""}</h6> 
                                 <span class="d-block mb-0">Postal Code : {(getorders.shipping_address)?getorders.shipping_address.postcode:''}</span> 
                                 <span>{(getorders.shipping_address)?getorders.shipping_address.city :''+ ',' + (getorders.shipping_address)? getorders.shipping_address.state :'' + ',' +((getorders)?getorders.shipping_address.country:'')? getorders.shipping_address.country:''}</span></div>
                               
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>Payment Method</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>
                                    {(getorders)?getorders.payment_title:''}</span> </div>
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>Subtotal</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>
                                    {/* {getorders.sub_total} */}
                                    {(getorders)?getorders.formated_sub_total:""}
                                    </span> </div>
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>Shipping fees</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span>
                                    {(getorders)?getorders.formated_sub_total:''}
                                    </span> </div>
                            </div>
                        </div>
                        <div class="row g-0 border-bottom">
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">Total</span> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">
                                    {(getorders)?getorders.formated_grand_total:''}
                                    </span> </div>
                            </div>
                        </div>

                        {(getorders.formated_grand_total_refunded != 'PKR0')?
                         <div class="row g-0 border-bottom" >
                         <div class="col-md-6">
                             <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">Refund</span> </div>
                         </div>
                         <div class="col-md-6">
                             <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">
                                 {getorders.formated_grand_total_refunded}
                                 </span> </div>
                         </div>
                     </div>
                     :
                     ''
                        }
                       
                        

                      {(getorders.status == 'completed')?
                      <>
                        {(this.state.current == 'detail')?
                        <div class="row g-0">
                            <div class="col-md-6">
                            </div>
                            <div class="col-md-6">
                                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">
                                    <button  className="btn btn-solid"  onClick={()=>this.setState({current:'return'})} >Return </button>
                                
                                    </span> </div>
                            </div>
                        </div>
: <>
  <div class="row g-0">
                        
                        <div class="col-md-12">
                            <div class=" d-flex justify-content-center align-items-center">
                                <textarea name="reason" id="reason" cols="80" rows="4" required onChange={(e)=>this.setState({reason:e.target.value})} placeholder="Enter Your Reason">

                                </textarea>
                                 </div>
                        </div>
                    </div>
                    <div class="row g-0">

            <div class="col-md-12">
                <div class="p-3 d-flex justify-content-center align-items-center"> <span class="font-weight-bold">
                <div className="row">
                                    <div className="col-lg-8">
                                    <button  className="btn btn-solid" onClick={()=>this.returnsubmit(getorders.id) } >Return Submit </button>
                                    </div>
                                    <div className="col-lg-4">
                                    <button  className="btn btn-solid"  onClick={()=>this.setState({current:'detail',active:false})} >Cancel </button>
                                    </div>

                                </div>
    
        </span> </div>
</div>
</div>
</>
            

                            }
                      </>
                    :''
                    }

                      


                    </div>
                </div>
                <div> </div>
            </div>
        </div>
    </div>
</div>



</>

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