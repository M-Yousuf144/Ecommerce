import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link } from 'react-router-dom'
import { toast } from 'react-toastify';

import SimpleReactValidator from 'simple-react-validator';
import store from '../../store';

import {removeFromWishlist,placeOrder,GetOrderbyRef,getCoupoun} from '../../actions'
import {getCartTotal,getAppliedVAT,getTotalDiscount} from "../../services";
import Pace from 'react-pace-progress'
import Swal from 'sweetalert2'
class checkOut extends Component {

    constructor (props) {
        super (props)
        
        var name = props.user.UserName? props.user.UserName.split(" ") : [];
        this.state = {
            payment:'COD_web',
            first_name:name[0],
            last_name:name[1],
            phone:props.user.Contact,
            email:props.user.Email,
            country:props.user.Country,
            address1:props.user.Address || '',
            address2:props.user.Address2 || '', 
            city:props.user.City,
            state:'',
            create_account: '',
            FinalPrice:'',	
            isLoading:false,
            Coupoun:'',
            IsApplicable:false            

   

        }
        this.validator = new SimpleReactValidator();
    }
        
    componentDidUpdate(prevprops,prevstate){
        const {history} = this.props;
        if(prevprops.orderRef !== this.props.orderRef){
      
         this.setState({isLoading: true});
         setTimeout(() => {
        if(typeof this.props.orderRef !== 'object' && this.props.orderRef !== null) {   
             //this will run if the order is  placed in the API 
            if(this.state.payment === "COD_web"){
                    history.push({
                        pathname: '/orderStatus',
                        state: { payment: this.props.orderRef, items: this.props.cartItems, orderTotal: this.props.vatincluded.ordertotal, symbol: this.props.symbol,vat:this.props.vatincluded.appliedvat,subtotal:this.props.total }
                        });
            }else{
                var win = window.open('https://portal.coolandcool.ae/MobileApplication/AppOrders/PaymentProcess?OrderId='+this.props.orderRef,'popup','width=600,height=600');
                var timer = setInterval(() => { 
                    if(win.closed) {
                        clearInterval(timer);
                        store.dispatch(GetOrderbyRef(this.props.orderRef));
                    }
                }, 1000);
                }
            }
            else{

                //this will run if the order is not placed in the API 
                history.push({
                    pathname: '/orderFailed',
                    state: { payment: this.props.orderRef, items: this.props.cartItems, orderTotal: this.props.vatincluded.ordertotal, symbol: this.props.symbol,vat:this.props.vatincluded.appliedvat,subtotal:this.props.total }
                    });
            }
        },1000);
        };



        if(prevprops.orderStatusRef !== this.props.orderStatusRef){
             if(this.props.orderStatusRef.order_status !== "Success"){
                toast.error(this.props.orderStatusRef.status_message || "Payment Not Processed, Please Select Other Payment Methods !")
             }else{
            history.push({
                pathname: '/orderStatus',
                state: { payment: this.props.orderRef, items: this.props.cartItems, orderTotal: this.props.vatincluded.ordertotal, symbol: this.props.symbol,vat:this.props.vatincluded.appliedvat,subtotal:this.props.total }
                });
            }
        }

        if(prevprops.coupoun !== this.props.coupoun ){
           if(typeof this.props.coupoun === 'object' && this.props.coupoun !== null){
               if(this.props.vatincluded.ordertotal > this.props.coupoun.Threshold){
                this.setState({IsApplicable: true});
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Coupon Applied! ',
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500
                })
               }else{
                this.setState({IsApplicable: false});
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Total Must be Greater then ' + this.props.coupoun.Threshold,
                    showConfirmButton: false,
                    toast: true,
                    timer: 1500
                })
               }
       
            }
        

        }

        
    }
    componentDidMount(){
    
    
    }
    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }

      setStateFromCheckbox = (event) => {

          var obj = {};
          obj[event.target.name] = event.target.checked;
          this.setState(obj);

          if(!this.validator.fieldValid(event.target.name))
          {
              this.validator.showMessages();
          }
        }

    checkhandle(value) {
        this.setState({
            payment: value
        })
    }

    StripeClick = () => {
        if (this.validator.allValid()) {
         

            var productlist = this.props.cartItems.map(e =>{
                return (e.productCode || e.id) +","+e.qty+","+e.price;
            });
            productlist = {...productlist};
           
            var data = {
                "UserId": this.props.user.Id || "" ,
                "FinalPrice":this.props.vatincluded.ordertotal,
                "Email": this.state.email,
                "DiscountedAmount": this.props.totalDiscount || 0,
                "PaymentMethod": this.state.payment,
                "DeliveryCharges": this.props.settings[this.props.user.Country || this.props.country][0].Value,
                "ContactPerson": this.state.first_name+" "+this.state.last_name,
                "ContactNumber": this.state.phone,
                "ShipmentAddress": this.state.address1 + " " + this.state.address2,
                "City": this.state.city,
                "Coupon": (this.state.IsApplicable) ? this.state.Coupoun : null,
                "Country":  this.props.user.Country || this.props.country,
                "ProductList":productlist,
            };



            
            if(typeof this.props.coupoun === 'object' && this.props.coupoun !== null && this.state.IsApplicable) {
                data.FinalPrice = data.FinalPrice - this.props.coupoun.Discount.toFixed(2);
                data.DiscountedAmount =  data.DiscountedAmount + this.props.coupoun.Discount.toFixed(2);
            }
            if(this.props.total >  this.props.settings[this.props.country][0].Limit){
                data.DeliveryCharges = 0;
            }

            store.dispatch(placeOrder(data));

        } else {
          this.validator.showMessages();
          // rerender to show messages for the first time
          this.forceUpdate();
        }
    }

    coupounApply = () => {

        var data = {
            country:this.props.user.Country || this.props.country,
            coupoun:this.state.Coupoun
        };

    store.dispatch(getCoupoun(data));
    }

    render (){
        const {cartItems, symbol, total} = this.props;

        // Paypal Integration
        // const onSuccess = (payment) => {
           
        //     this.props.history.push({
        //         pathname: '/order-success',
        //             state: { payment: payment, items: cartItems, orderTotal: total, symbol: symbol }
        //     })

        // }

        // const onCancel = (data) => {
           
        // }

        // const onError = (err) => {
       
        // }

        // const client = {
        //     sandbox:    'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        //     production: 'AZ4S98zFa01vym7NVeo_qthZyOnBhtNvQDsjhaZSMH-2_Y9IAJFbSD3HPueErYqN8Sa8WYRbjP7wWtd_',
        // }
        const {country,coupoun} = this.props;
       var grandTotal =  (this.props.vatincluded.ordertotalwitoutVAT-(this.props.vatincluded.ordertotalwitoutVAT*coupoun.Discount/100)+this.props.vatincluded.appliedvat).toFixed(2);
     
        return (


            <div>
               
                {/*SEO Support*/}
                <Helmet>
                    <title>Makki Herbals | Checkout Page</title>
                  
                </Helmet>
                {/*SEO Support End */}

                {this.state.isLoading ? <Pace color="#27ae60"/> : null}

                <section class="section-b-space">
                    <div class="container padding-cls">
                        <div class="checkout-page">
                            <div class="checkout-form">
                                <form>
                                    <div class="checkout row">
                                        <div class="col-lg-6 col-sm-12 col-xs-12">
                                            <div class="checkout-title">
                                                <h3>Address Details</h3>
                                            </div>
                                            <div class="row check-out">
                                                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div class="field-label">First Name</div>
                                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('first_name', this.state.first_name, 'required')}
                                                </div>
                                                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div class="field-label">Last Name</div>
                                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.setStateFromInput} />
                                                    {this.validator.message('last_name', this.state.last_name, 'required')}
                                                </div>
                                                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div class="field-label">Phone</div>
                                                    <input type="text" name="phone"  value={this.state.phone} onChange={this.setStateFromInput} />
                                                    {this.validator.message('phone', this.state.phone, 'required|phone')}
                                                </div>
                                                <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div class="field-label">Email Address</div>
                                                    <input type="text" name="email" value={this.state.email} onChange={this.setStateFromInput} />
                                                    {this.validator.message('email', this.state.email, 'required|email')}
                                                </div>
                                                {/* <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div class="field-label">Country</div>
                                                    <select name="country" value={this.state.country} onChange={this.setStateFromInput}>
                                                        <option>UAE</option>
                                                        <option>PAKISTAN</option>
                                                   
                                                    </select>
                                                    {this.validator.message('country', this.state.country, 'required')}
                                                </div> */}
                                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div class="field-label">Address 1</div>
                                                    <input type="text" name="address1" value={this.state.address1} onChange={this.setStateFromInput} placeholder=" Address 2" />
                                                    {this.validator.message('address1', this.state.address1, 'required')}
                                                </div>
                                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div class="field-label">Address 2</div>
                                                    <input type="text" name="address2" value={this.state.address2} onChange={this.setStateFromInput} placeholder="Address 2" />
                                                    {this.validator.message('address2', this.state.address2, 'required')}
                                                </div>
                                                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div class="field-label">Town/City</div>
                                                    <input type="text" name="city" value={this.state.city} onChange={this.setStateFromInput} />
                                                    {this.validator.message('city', this.state.city, 'required')}
                                                </div>
                                                {/* <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div class="field-label">State / County</div>
                                                    <input type="text" name="state" value={this.state.state} onChange={this.setStateFromInput} />
                                                    {this.validator.message('state', this.state.state, 'required|')}
                                                </div> */}
                                                {/* <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div class="field-label">Postal Code</div>
                                                    <input type="text" name="pincode" value={this.state.spincode} onChange={this.setStateFromInput} />
                                                    {this.validator.message('pincode', this.state.pincode, 'required|integer')}
                                                </div> */}
                                        
                                  
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-sm-12 col-xs-12">
                                            <div class="checkout-details">
                                                <div class="order-box">
                                                    <div class="title-box">
                                                        <div>Product <span> Total</span></div>
                                                    </div>
                                                    <ul class="qty">
                                                        {cartItems.map((item, index) => {
                                                            return (
                                                                (item.discount) ? 
                                                                    <div class="mt-2">
                                                                        <li key={index} class="qtyli m-0 text-left">{item.name} × {item.qty} <span class="qtyli">{symbol} {item.price * item.qty}</span></li> 
                                                                        <li key={index} class="discounted m-0">Applied Discount {item.discount}%: <span class="discounted ml-2">{symbol} {item.applieddiscount}</span></li>
                                                                        <li key={index} class="discounted m-0">Total: <span class="discounted ml-2">{symbol} {item.sum}</span></li>
                                                                    </div>
                                                                    :
                                                                    <div class="mt-2">
                                                                    <li key={index} class="qtyli m-0 text-left">{item.name} × {item.qty} <span class="qtyli">{symbol} {item.price * item.qty}</span></li> 
                         
                                                                    </div>

                                                                      ) 
                                                                    })
                                                        }
                                                    </ul>
                                                    <ul class="sub-total">
                                                       
                                                        <li>Subtotal <span class="count text-right">{symbol}{total}</span></li>
                                                        {(total > this.props.settings[country][0].Limit)? '' :
                                                        <li >{this.props.settings[country][0].Name} <span class="count text-right">{symbol}{this.props.settings[country][0].Value}</span></li>
                                                    }
                                                      { (this.props.vatincluded.vat > 0) ? 
                                                            <li>{this.props.settings[country][1].Name} {this.props.vatincluded.vat}% <span class="count text-right">{symbol}{this.props.vatincluded.appliedvat}</span></li> :""}
                                                        
                                                        
                                                    </ul>

                                                    <ul class="total">
                                                    {
                                                            (typeof coupoun === 'object' && coupoun !== null && this.state.IsApplicable) ? 
                                                              (coupoun.IsAmount)
                                                              ?
                                                              <li>Applied Discount <span class="count text-right">{symbol}{coupoun.Discount.toFixed(2)}</span></li>
                                                                :
                                                              
                                                                <li>Applied Discount <span class="count text-right">{symbol}{(this.props.vatincluded.ordertotalwitoutVAT*coupoun.Discount/100).toFixed(2)}</span></li>
                                                            : 
                                                            ""
                                                        }
                                                        
                                                        <li>
                                                        {
                                                        (typeof coupoun === 'object' && coupoun !== null && this.state.IsApplicable) ? 
                                                        <div>
                                                            Total <span class="count text-right"><del>{symbol}{this.props.vatincluded.ordertotalwitoutVAT.toFixed(2)}</del>{symbol}{grandTotal}</span>
                                                        </div>
                                                         : 
                                                        <div>
                                                            Total <span class="count text-right">{symbol}{this.props.vatincluded.ordertotal.toFixed(2)}</span>
                                                        </div>
                                                        }
                                                            
                                                        </li>
                                                   
                                                      
                                                    </ul>
                                                </div>
                                                {(this.props.settings[country][2].Value > 0?  
                                                    <div class="payment-box row couponbob">
                                                        <div class="title-box">
                                                            <div>Get discounts if you have Coupons </div>
                                                        </div>
                                                        <input class="col-md-12 col-sm-12 col-xs-12" type="text" name="Coupoun" value={this.state.Coupoun} onChange={this.setStateFromInput} /> <button class="btn-solid coupoun mt-2 col-md-3 offset-md-9" onClick={() => this.coupounApply()} >Apply Coupon</button>
                                                        <div class="mt-2">
                                                            <div style={{
                                                     
                                                                fontSize: "10px",
                                                                color: "#13743Fa6",
                                                                fontWeight:" 700"
                                                            }
                                                            }>NOTE* Coupons codes are valid on full priced items only . </div>
                                                        </div>
                                                    
                                                    </div>
                                                :'')}
                                              
                                                <div class="payment-box">
                                                    <div class="upper-box">
                                                        <div class="payment-options">
                                                            <ul>
                                                                <li>
                                                                    <div class="radio-option stripe">
                                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/1.png`} alt=""/>
                                                                        <input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('COD_web')} />
                                                                      
                                                                        <label htmlFor="payment-2">Cash On Delivery</label>
                                                                     
                                                                    </div>
                                                                </li>
                                                                {(country === "Pakistan") ? 
                                                                    <li>
                                                                      <div class="radio-option paypal">
                                                                      <img src={`${process.env.PUBLIC_URL}/assets/images/2.png`} alt=""/>
                                                                          <input type="radio" name="payment-group" id="payment-1" onClick={() => this.checkhandle('CCAvenue_web')} />
                                                                        
                                                                          <label htmlFor="payment-1">Credit/ Debit Card <span class="image"></span></label>
                                                                         
                                                                      </div>
                                                                  </li>
                                                                : ''}
                                                          
                                                            </ul>
                                                        </div>
                                                    </div>
                                               
                                                    {(total !== 0)?
                                                       Object.keys(this.props.user).length === 0 ? 
                                                       <div>
                                                 
                                                       <div class="text-right">
                                                       {(this.state.payment === 'CCAvenue_web')? <button type="button" class="btn-solid btn" onClick={() => this.StripeClick()} >Checkout as a Guest</button>:
                                                       <button type="button" class="btn-solid btn" onClick={() => this.StripeClick()} >Checkout as a Guest</button>}
                                                        OR 
                                                        <Link class="btn-solid btn" to={`/login`} >Sign In</Link>
        

                                                       </div>
                                                       </div>
                                                       :

                                                       <div class="text-right">
                                                           {(this.state.payment === 'CCAvenue_web')? <button type="button" class="btn-solid btn" onClick={() => this.StripeClick()} >Place Order</button>:
                                                           <button type="button" class="btn-solid btn" onClick={() => this.StripeClick()} >Place Order</button>}
                                                       </div>
                                                    : ''}



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart),
    user:state.user.user,
    country:state.filters.country,
    orderRef:state.user.orderRef,
    settings:state.data.settings,
    vatincluded:getAppliedVAT(state.data.settings[state.filters.country][1].Value,getCartTotal(state.cartList.cart),state.data.settings[state.filters.country][0],state.user.coupoun),
    totalDiscount : getTotalDiscount(state.cartList.cart),
    
    orderStatusRef: state.user.orderStatus,
    coupoun:state.user.coupoun
})

export default connect(
    mapStateToProps,
    {removeFromWishlist}
)(checkOut)