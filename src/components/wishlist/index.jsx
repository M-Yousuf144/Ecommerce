import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
// import DeleteIcon from '@mui/icons-material/Delete';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { FiShoppingCart } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

import store from '../../store';
import Demoimg from '../../assets/images/portfolio/22.jpg';
// import { MdDelete } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import {addToCartAndRemoveWishlist, removeFromWishlist,getWishlist,removeWishlist,movetocart} from '../../actions'

class wishList extends Component {
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }
    render (){
        function handleClick(e) {
            store.dispatch(removeWishlist(e));
        }
        function movetocartitem(e) {
    
            store.dispatch(movetocart(e));
        }
        const {Items, symbol,getWishlist} = this.props;
       
        return (
            <div style={{marginTop:"5%"}}>
         
                {getWishlist.length>0 ?
                <section class="wishlist-section section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                            <table class="table cart-table table-bordered table-responsive-xs">
                                <thead class="base_color" style={{height:50,backgroundColor:"#13743F"}}>
                                    <tr class="table-head">
                                        <th scope="col"  className='text-light'>image</th>
                                        <th scope="col"  className='text-light'>product name</th>
                                        <th scope="col"  className='text-light'>price</th>
                                        <th scope="col"  className='text-light'>availability</th>
                                        <th scope="col"  className='text-light'>action</th>
                                    </tr>
                                    </thead>
                                    {getWishlist.map((item, index) => { 
                                        return (
                                            <tbody key={index}>
                                            <tr>
                                                <td>
                                                    <Link to={`${process.env.PUBLIC_URL}/product/product/${item.product.name}`}>
                                                        <img style={{height:80, width:80}}  src={(item.product.images[0].url != '')?item.product.images[0].url:Demoimg} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`${process.env.PUBLIC_URL}/product/product/${item.product.name}`}>{item.product.name}</Link>
                                                    <div class="mobile-cart-content row">
                                                        <div class="col-xs-3">
                                                        <p style={item.product.in_stock ? {color:"#000"} : {color:"red"}}>{(item.product.in_stock === true)? 'In Stock ' : 'Out Of Stock'}</p>
                                                        </div>
                                                        <div class="col-xs-3">
                                                        <h2 class="td-color">{item.product.formated_price}
                 {(item.product.formated_special_price != '')?<del style={{fontSize:'15px'}}><span class="money">{item.product.formated_regular_price}</span></del> :''}</h2>
                                                        </div>
                                                        <div class="col-xs-3">
                                                            <h2 class="td-color">
                                                                {/* <DeleteIcon className='mx-3 text-dark' onClick={() => handleClick(item.product.id)}/> */}
                                                                <FiShoppingCart className='mx-4 text-dark'  onClick={() => movetocartitem(item.id)} />
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                <h2>{item.product.formated_price}
     {(item.product.formated_special_price != '')?<del style={{fontSize:'15px'}}><span class="money">{item.product.formated_regular_price}</span></del> :''}
     </h2>
                                                     </td>
                                                <td >
                                                <p>{(item.product.in_stock == true)? 'In Stock ' : 'Out Of Stock'}</p>
                                                </td>
                                                <td>
                                                <MdDeleteOutline className='mx-4' style={{fontSize:28,marginRight:"50px"}} onClick={() => handleClick(item.product.id)}/>

                                                    <FiShoppingCart className='mx-4' style={{fontSize:25}} onClick={() => movetocartitem(item.id)} />
                                                </td>
                                            </tr>
                                            </tbody> )
                                    })}
                                </table>
                            </div>
                        </div>
                        <div class="row wishlist-buttons">
                            <div class="col-12">
                            <a onClick={()=>{this.props.history.goBack()}} class="btn btn-solid" style={{borderRadius:6}}>continue shopping</a>

                  
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-wishlist.png`} class="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>WishList is Empty</strong>
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
    Items: state,
    symbol: state.data.symbol,
    getWishlist:(state.wishlist.getwishlist)? state.wishlist.getwishlist.data:[],
})
export default connect(
    mapStateToProps,
    {addToCartAndRemoveWishlist, removeFromWishlist}
)(wishList)