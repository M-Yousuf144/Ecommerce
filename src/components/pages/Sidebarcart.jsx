import React, { Component } from 'react'
import Demoimg from '../../assets/images/portfolio/22.jpg';

import { connect } from 'react-redux'
import store from '../../store';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './checkout.css';
import { applyCoupan, removeCoupan } from '../../actions';
import AddressEdit from './addressEdit';
import ShippingOptions from './shipping';
import BillingOptions from './billing';
import Guest_Address from './guest-address';

class CartSidebars extends Component {
    constructor () {
        super ()
       this.state = {
           'page':'address',
           'activepage':0,
           'selectaddress':''
       }
    }
    
    applyCoupan = (e) => {
       
        const coupan ={
            "code": this.state.coupan
          }
        store.dispatch(applyCoupan(coupan));
    }
    removeCoupan = () => {
        store.dispatch(removeCoupan());
    }

    
    changePAge = (e) => {
        if(e == 'Select Address' && this.state.activepage >= 1){
            this.setState({page:'address',activepage:0})
        }
        if(e == 'Shipping & Payment' && this.state.activepage >= 2){
            this.setState({page:'shipping',activepage:1})
        }
    }



    render (){

        const steps = [
            'Select Address',
            'Shipping & Payment',
            'Confirm Order',
          ];
        const {cartData} = this.props;


    return (
        <>
        {(cartData.items)?
        <div>
        <Box sx={{ width: '100%',paddingTop:'6%' }} root={{color:"green"}}>
      <Stepper activeStep={this.state.activepage} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel onClick={() => this.changePAge(label)}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
        </div>
        :''}    
        {( this.state.page == 'checkout')?
<BillingOptions />
:
    
       <div class="bg" >

{(cartData.items)?

<div class="row mainRow">




    <div class="col-lg-9">
{(this.state.page == 'address')?
<>
{
(localStorage.getItem("customerData") == null)?<Guest_Address /> :  <AddressEdit />
}


</>


:''
}

{
(this.state.page == 'address' && cartData.shipping_address != null)?
<div className="row">

<div className="col-lg-4"></div>
<div className="col-lg-4"></div>
<div className="col-lg-4">
<a class="btn btn-solid shipping_check" style={{borderRadius:7, fontSize:15,margin:'2%',marginLeft:'60%'}} onClick={e =>this.setState({page:'shipping',activepage:1})}>Next</a>
</div>
</div>
:''
}





{( this.state.page == 'shipping')?
<ShippingOptions />
:''
}
{
(this.state.page == 'shipping' && cartData.payment != null)?
<div className="row">
<div className="col-lg-8"></div>

<div className="col-lg-2">
<a class="btn btn-solid" style={{borderRadius:7, fontSize:15,margin:'2%',marginLeft:'5%'}} onClick={e =>this.setState({page:'checkout',activepage:2})}>Next</a>
</div>
<div className="col-lg-4"></div>
<div className="col-lg-3"></div>
</div>
:''
}




    </div>


  
    <div class="col-lg-3" style={{backgroundColor:'whitesmoke',paddingTop:'2%',paddingBottom:'3%'}} >
        {/* <div class=" p-3 mb-5 " > */}
        <div class="" style={{marginRight:'5%'}} >
    
            <div style={{ height:'360px', overflow: 'scroll', overflowX: 'hidden'}}>
            
        {cartData.items.map((item, index) => {
           return (
        <div className="row" style={{textAlign:"center",paddingTop:'2%'}}>
            <div className="col-lg-3">
            <img src={(item.product != '')?item.product.images[0].url:Demoimg} style={{width:"80px",height:"80px",padding:'7px',paddingTop:'0px'}} />
            </div>
            <div className="col-lg-8">
                <div className="row" >
                    <div className="col-lg-12" style={{textAlign:'left'}} >
                        <p style={{lineHeight:'25px'}}>{item.name}</p>
                    </div>
                    <div className="col-lg-4">
                        <p> {item.formated_price}</p>
                    </div>
                    <div className="col-lg-6">
                        <p> x{item.quantity}</p>
                    </div>
                </div>
            </div>
    </div>

    

    )
})}
</div>

<hr />
<div style={{display:"flex", justifyContent:"space-between", paddingTop:3}}>
    <input class="form-control no-border" placeholder='Enter Your Coupen Code' type="text"  style={{marginRight:'10px'}} onChange={(e)=>this.setState({coupan:e.target.value})}/>
   {(cartData.coupon_code == null)?<input  className='btn btn-solid' style={{fontSize:"0.7em",padding:'8px'}}  onClick={(e) => this.applyCoupan()} type="button" value="Apply Coupan" />:<input className='btn btn-solid' style={{fontSize:"0.7em",padding:'8px'}} onClick={(e) => this.removeCoupan()} type="button" value="Remove Coupan" />} 
</div>
<hr />
<div className="row" style={{marginLeft:'5px',marginRight:'5px'}}>
    <div className="col-lg-6" style={{textAlign:'left'}}>
        <h6 style={{textAlign:'left'}}>Subtotal : </h6>
    </div>
    <div className="col-lg-6">
        <h6 style={{textAlign:'right'}}>{cartData.formated_sub_total}</h6>
    </div>
</div>

<div className="row" style={{marginLeft:'5px',marginRight:'5px'}}>
    <div className="col-lg-6" style={{textAlign:'left'}}>
        <h6 style={{textAlign:'left'}}>Shipping : </h6>
    </div>
    <div className="col-lg-6">
        <h6 style={{textAlign:'right'}}>{(cartData.selected_shipping_rate)?cartData.selected_shipping_rate.formated_price:'0'}</h6>
    </div>
</div>
<div className="row" style={{marginLeft:'5px',marginRight:'5px'}}>
    <div className="col-lg-6" style={{textAlign:'left'}}>
        <h6 style={{textAlign:'left'}}>Discounted Price : </h6>
    </div>
    <div className="col-lg-6">
        <h6 style={{textAlign:'right'}}>{cartData.formated_discount}</h6>
    </div>
</div>
<hr />

<div className="row" style={{marginLeft:'5px',marginRight:'5px'}}>
    <div className="col-lg-6" style={{textAlign:'left'}}>
        <h4 style={{textAlign:'left'}}>Total : </h4>
    </div>
    <div className="col-lg-6">
        <h6 style={{textAlign:'right'}}>{cartData.formated_grand_total}</h6>
    </div>
</div>






        </div>
    </div>


</div>
:   <section class="cart-section section-b-space">
<div class="container">
    <div class="row">
        <div class="col-sm-12">
            <div >
                <div class="col-sm-12 empty-cart-cls text-center">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} class="img-fluid mb-4" alt="" />
                    <h3>
                        <strong>Your Cart is Empty</strong>
                    </h3>
                    <h4>Explore more shortlist some items.</h4>
                </div>
            </div>
        </div>
    </div>
</div>
</section>}
        </div>
    }
        </>
    ) 
}
}

const mapStateToProps = (state) => ({
    cartData:(state.cartList.getcartdata.data)?state.cartList.getcartdata.data:'',


})
export default connect(
    mapStateToProps,
    {}
)(CartSidebars)