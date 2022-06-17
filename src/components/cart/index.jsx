import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../../store';
import {getCartTotal} from "../../services";
import {removeFromCart, incrementQty, decrementQty,dispatchgetCart,updatecart,removecartitem} from '../../actions'
// import DeleteIcon from '@mui/icons-material/Delete';
import Demoimg from '../../assets/images/portfolio/22.jpg';
import {MdClose} from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

import "./cartResp.css"
class cartComponent extends Component {

    constructor (props) {
        super (props)
    }

    render (){
      
        function handleClick(e) {
           var upatecartitem = `&&qty[${e[0]}]=${e[1]}`;
         store.dispatch(updatecart(upatecartitem));
        }

        function removeitem(e) {
    
          store.dispatch(removecartitem(e));
         }


        const {cartItems, symbol, total,cartData} = this.props;
 
        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Cart Page - Makki Herbals</title>
                 
                </Helmet>
                {/*SEO Support End */}

       

                {(cartData !== null && cartData.length !== 0) ?

                
                <section class="cart-section section-b-space">
                    <div className='head50' />

                    <br/>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <table class="table cart-table table-bordered table-responsive-xs">
                                <thead class="base_color" style={{height:50,backgroundColor:"#13743F"}}>
                                    <tr class="table-head">
                                        <th scope="col" className='text-light'>image</th>
                                        <th scope="col" className='text-light'>product name</th>
                                        <th scope="col" className='text-light'>price</th>
                                        <th scope="col" className='text-light'>quantity</th>
                                        <th scope="col" className='text-light'>total</th>
                                        <th scope="col" className='text-light'>action</th>
                                    </tr>
                                    </thead>
                                    {cartData.items.map((item, index) => {
                                        return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>
                                                <MdClose className='vanishMe vanishD' style={{position:"absolute",right:20,}} onClick={() => removeitem(item.id)}/>
                                               <img src={(item.product != '')?item.product.images[0].url:Demoimg} style={{width:"80px",height:"80px"}} />
                                             <p className='my-2 vanishMe'>{item.formated_price}</p>  
                                                </td>
                                                <td>



                                                    {item.name}

                                                    <div class="qty-box my-2 vanishMe">
                                                        <div class="input-group">
                                                            <span class="input-group-prepend" >
                                                                <button type="button" class="btn quantity-left-minus" onClick={() => handleClick([item.id,item.quantity-1])} data-type="minus" data-field="">
                                                                 <p>-</p>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.quantity} readOnly={true} class="form-control input-number" />

                                                            <span class="input-group-prepend">
                                                            <button class="btn quantity-right-plus" onClick={() => handleClick([item.id,item.quantity+1])}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <p>+</p>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>


                                                    <h4 class="td-color my-1 vanishMe" style={{color:"#13743F",}}>
                                                   {item.formated_total}
                                                </h4>

                                                </td>
                                                <td><h2>{item.formated_price}</h2></td>
                                                <td>
                                                    <div class="qty-box">
                                                        <div class="input-group" style={{flexWrap:"nowrap"}}>
                                                            <span class="input-group-prepend">
                                                                <button type="button" class="btn quantity-left-minus" onClick={() => handleClick([item.id,item.quantity-1])} data-type="minus" data-field="">
                                                                 <p>-</p>
                                                                </button>
                                                            </span>
                                                            <input type="text" name="quantity" value={item.quantity} readOnly={true} class="form-control input-number" />

                                                            <span class="input-group-prepend">
                                                            <button class="btn quantity-right-plus" onClick={() => handleClick([item.id,item.quantity+1])}  data-type="plus" disabled={(item.qty >= item.stock)? true : false}>
                                                            <p>+</p>
                                                            </button>
                                                           </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><h2 class="td-color" style={{color:"#13743F",}}>

                                                   {item.formated_total}
                                                </h2></td>
                                                <td>
                                                    
                                                    <MdDeleteOutline style={{fontSize:28}} onClick={() => removeitem(item.id)}/>
                                                </td>
                                            </tr>
                                        </tbody> )
                                    })}
                                </table>
                                <table class="table cart-table table-responsive-md">
                                    <tfoot>
                                    <tr>

                                        <td>total price :</td>
                                        <td><h2>{cartData.formated_grand_total} </h2></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        <div class="row cart-buttons">
                            <div class="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/shopPage`} >
                                <a class="btn btn-solid" style={{borderRadius:6, fontSize:12}}>continue shopping</a>
                                </Link>
                            </div>
                            <div class="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/cart-sidebar`} class="btn btn-solid" style={{borderRadius:6, fontSize:12}}>check out</Link>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section class="cart-section section-b-space">
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
                </section>
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    cartData:state.cartList.getcartdata.data,

  
})

export default connect(
    mapStateToProps,
    {removeFromCart, incrementQty, decrementQty}
)(cartComponent)