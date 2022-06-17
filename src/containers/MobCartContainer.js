import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import CartPage from '../components/common/headers/common/cart-header'
import {removeFromCart} from '../actions'
import {getCartTotal} from '../services'

const MobCartContainer = ({cartList, total, symbol, removeFromCart}) => (
     <li  class="onhover-div mobile-cart"><div class="cart-qty-cls">{cartList.length}</div>
        <Link to={`${process.env.PUBLIC_URL}/cart`}><img src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`} class="img-fluid" alt=""/>
            <i class="fa fa-shopping-cart"></i></Link>
        <ul class="show-div shopping-cart">
            { cartList.map((item,index) => (
                <CartPage key={index} item={item} total={total} symbol={symbol} removeFromCart={() => removeFromCart(item)}  />
            ))}
            {(cartList.length > 0) ?
                <div>
            <li>
                <div class="total">
                    <h5>subtotal : <span>{symbol}{total}</span></h5>
                </div>
            </li>
            <li>
                <div class="buttons">
                    <Link to={`${process.env.PUBLIC_URL}/cart`} class="view-cart">view cart</Link>
                    <Link to={`${process.env.PUBLIC_URL}/checkout`} class="checkout">checkout</Link>
                </div>
            </li></div>
                    :
            <li><h5>Your cart is currently empty.</h5></li>}
        </ul>

    </li>
)


function mapStateToProps(state) {
    return {
        cartList: state.cartList.cart,
        total: getCartTotal(state.cartList.cart),
        symbol: state.data.symbol,
    }
}

export default connect(mapStateToProps, {removeFromCart})(MobCartContainer);
