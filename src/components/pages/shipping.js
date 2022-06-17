import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import store from '../../store';
import { connect } from 'react-redux'
import {removeFromWishlist,saveShipping,savePayment} from '../../actions'
import "./shipping.scss"


class ShippingOptions extends Component {

    constructor(props){
        super(props)

        this.state = {
            shippingM : "",
            paymentM : "",
        }
    }
    saveShipping = (e) => {
    document.querySelector(".loader-wrapper").style = "display: block";

        const shipping = {
            "shipping_method": e
        }
        store.dispatch(saveShipping(shipping));
    }

  
    savepayemnt = (e) => {
        const shipping = {
            "payment": {
                "method": "cashondelivery"
              }
        }
        store.dispatch(savePayment(shipping));

    }

    render (){
        const {} = this.props;

      
        const getData = localStorage.getItem("shipping-rates");
        const Data = JSON.parse(getData);
        const shipping = (Data != null)?Data:'';
        

        return (

            <div>
               
                <Helmet>
                    <title>Makki Herbals | Shipping Page</title>
                  
                </Helmet>

<div style={{paddingTop:100}}>

               <h1 style={{fontSize:25,marginLeft:50 }}>Select Shipping Method</h1>

        {shipping.map(shppingdata =>(
  <div class="radio" style={{marginTop:25,marginLeft:50}}>
  <input value={shppingdata.rates[0].method} onClick={(e) => this.saveShipping(e.target.value)} id={shppingdata.rates[0].method} name="radio" type="radio" />
  
  <label  for={shppingdata.rates[0].method} class="radio-label">
     <span style={{fontWeight:600}}>{shppingdata.rates[0].formated_price}</span>  <br />
      <span style={{fontWeight:600, marginLeft:35}}>{shppingdata.rates[0].carrier_title} - </span>{shppingdata.rates[0].carrier_title}
  </label>

  
    </div>
        ))}        



</div>



<div style={{paddingTop:50,margin:50 ,display:'none'}} className="paymentOption" >

               <h1 style={{fontSize:25, }}>Select Payment Method</h1>

                
  <div class="radio" style={{marginTop:25}}>

    <input  onClick={(e) => this.savepayemnt(e.target.value)} value="cashondelivery" id="radioP1" name="radioP" type="radio" />
    <label  for="radioP1" class="radio-label">
       <span style={{fontWeight:600}}>Cash on Delivery</span>  <br />
        <span style={{marginLeft:35}}>Cash on Delivery</span>
    </label>
  
    
  </div>
  <div class="radio">
    
        <input onClick={(e) => this.savepayemnt(e.target.value)} value="moneytransfer" id="radioP2" name="radioP" type="radio" />
    <label  for="radioP2" class="radio-label">
    <span style={{fontWeight:600}}>Money Transfer</span>  <br />
    <span style={{marginLeft:35}}>Money Transfer</span>

    </label>
    
  </div>



</div>

{/* : 
""

    } */}









            </div>
        )
    }
}
const mapStateToProps = (state) => ({
  
})


export default connect(
    mapStateToProps,
    {removeFromWishlist}
)(ShippingOptions)