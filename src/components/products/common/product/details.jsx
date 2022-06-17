import React, {Component} from 'react';
import {connect} from 'react-redux'



class Details extends Component {

    render (){
        const {item, addToWishlistClicked} = this.props

        return (
            <div class="col-lg-4">
                <div class="product-right product-description-box">
                    <h2> {item.name} </h2>
                    <div class="border-product">
                        <h6 class="product-title">product details</h6>
                        <p>{item.shortDetails}</p>
                    </div>
                    <div class="single-product-tables border-product detail-section">
                        <table>
                            <tbody><tr>
                                <td>Febric:</td>
                                <td>Chiffon</td>
                            </tr>
                            <tr>
                                <td>Color:</td>
                                <td>{item.variants[0].color}</td>
                            </tr>
                            <tr>
                                <td>Avalibility:</td>
                                <td>InStock</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="border-product">
                        <h6 class="product-title">share it</h6>
                        <div class="product-icon">
                            <ul class="product-social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="https://plus.google.com/discover" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            </ul>
                                <button class="wishlist-btn" onClick={() => addToWishlistClicked(item)}>
                                    <i class="fa fa-heart"></i><span class="title-font">Add To WishList</span>
                                </button>
                        </div>
                    </div>
                    <div class="border-product">
                        <h6 class="product-title">100% SECURE PAYMENT</h6>
                        <div class="payment-card-bottom">
                            <ul>
                                <li>
                                    <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/visa.png`} alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/mastercard.png`} alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/paypal.png`} alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/american-express.png`} alt="" /></a>
                                </li>
                                <li>
                                    <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/icon/discover.png`} alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;