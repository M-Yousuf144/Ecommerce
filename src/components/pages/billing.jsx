import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import store from '../../store';

import { connect } from 'react-redux'
import {removeFromWishlist,saveOrder,applyCoupan,removeCoupan} from '../../actions'
import Demoimg from '../../assets/images/portfolio/22.jpg';


class BillingOptions extends Component {

    constructor(props){
        super(props)

        this.state = {
            shippingM : "",
            paymentM : "",
            coupan:'',
        }
    }

    removeCoupan = () => {
        store.dispatch(removeCoupan());
    }
    saveOrder = () => {
        store.dispatch(saveOrder());
    }
    applyCoupan = (e) => {
       
        const coupan ={
            "code": this.state.coupan
          }
        store.dispatch(applyCoupan(coupan));
    }

    render (){
        const {GetData} = this.props;


        return (

            <div>
               
                {/*SEO Support*/}
                <Helmet>
                    <title>Makki Herbals | Billing Page</title>
                  
                </Helmet>
                {/*SEO Support End */}

<div  />

      <div className='head50' />
<div className='row' style={{margin:0}}>    

<div className="col-md-7">

<table class="table table-bordered ">

<thead class="base_color" style={{backgroundColor:"#13743F"}}>
<tr style={{color:"white"}}>
      <th scope="col">#</th>
      <th scope="col">Products</th>
      <th scope="col">Price</th>
    </tr>
  </thead>        

                        <tbody>
                            {GetData.items.map(data=>(
                                <tr>
                            <td>
                              
                                <img src={(data.product.images[0].url !== null)?data.product.images[0].url:Demoimg}
                                 style={{width:'60px', height:'60px'}} />
                            </td>
                            <td style={{border:"none",paddingTop:"7%", display:"flex", justifyContent:"space-between"}}><span> {data.name} </span> <span> x{data.quantity} </span>  </td>
                            <td style={{paddingTop:'3%'}}>
                               {data.formated_price}
                              
                                </td>
                            </tr>
                            ))}
                            

                            
                        </tbody>
                        </table>


</div>








<div className="col-md-5" style={{boxShadow:"0px 10px 20px rgba(0,0,0,0.08)", border:"1px solid rgba(0,0,0,0.05)", padding:20}}>


<div className="py-4">
    <h3 style={{color:"#13743F",fontSize:"28px",fongtWeight:"bold"}}>Shipping & Billing</h3>
    </div>

<div className='py-2' style={{display:"flex", justifyContent:"space-between"}}>

<h5 style={{whiteSpace:"pre-wrap", fontSize:"1em", fontWeight:500, textTransform:"capitalize", wordBreak:"break-all"}}>{GetData.billing_address.first_name} {GetData.billing_address.last_name}</h5>

</div>
<h5 style={{whiteSpace:"pre-wrap", fontSize:"1em", wordBreak:"break-all"}}>{GetData.billing_address.email}</h5>
<h5>{GetData.billing_address.phone}</h5>



<span>{GetData.billing_address.address1[0]}</span>
<br />
<span>{GetData.billing_address.city} {GetData.billing_address.state} {GetData.billing_address.country}</span>













<div style={{marginTop:30}}>
    <h3 style={{color:"#000", fontWeight:"bolder"}}>Order Summary</h3>
    </div>

    <div style={{display:"flex", justifyContent:"space-between", marginTop:5}}>

<h5>Subtotal ({GetData.items_count} Items)</h5>
<p>{GetData.formated_sub_total}</p>
</div>
    <div style={{display:"flex", justifyContent:"space-between", marginTop:5}}>

<h5>Shipping Fee</h5>
<p>{(GetData.selected_shipping_rate )?GetData.selected_shipping_rate.formated_price:''}</p>
</div>


<div style={{display:"flex", justifyContent:"space-between", paddingTop:10}}>
    <input class="form-control no-border" type="text" onChange={(e)=>this.setState({coupan:e.target.value})}/>
   {(GetData.coupon_code == null)?<input className='btn btn-solid' style={{fontSize:"0.7em"}} onClick={(e) => this.applyCoupan()} type="button" value="Apply Coupan" />:<input className='btn btn-solid' style={{fontSize:"0.7em"}} onClick={(e) => this.removeCoupan()} type="button" value="Remove Coupan" />} 
</div>

<div style={{display:"flex", justifyContent:"space-between", marginTop:35}}>

<h5>Discounted Price:</h5>
<p>{GetData.formated_discount}</p>
</div>
<div style={{display:"flex", justifyContent:"space-between"}}>

<h5>Total:</h5>
<p>{GetData.formated_grand_total}</p>
</div>




<button class="btn btn-success w-100 py-3 my-3" style={{background:"#13743F"}}  onClick={(e) => this.saveOrder()}  type="submit">Confirm Order</button>

</div>


</div>


            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    GetData: state.cartList.getcartdata.data
})


export default connect(
    mapStateToProps,
    {removeFromWishlist}
)(BillingOptions)