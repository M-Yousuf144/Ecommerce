import React, {Component} from 'react';
import Slider from 'react-slick';
import '../common/index.scss';
import {connect} from "react-redux";


// import custom Components
import RelatedProduct from "../common/related-product"
import Price from "./common/product/price";
import DetailsTopTabs from "./common/details-top-tabs";
import {addToCart, addToCartUnsafe, addToWishlist } from '../../actions'
import ImageZoom from './common/product/image-zoom'
import SmallImages from './common/product/small-image'




class Column extends Component {

    constructor() {
        super();
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });

    }

    render(){
        const {symbol, item, addToCart, addToCartUnsafe, addToWishlist} = this.props
        var products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true
        };
        var productsnav = {
            slidesToShow: 3,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div>

                <Breadcrumb  title={' Product / '+item.name} />

                {/*Section Start*/}
                {(item)?
                    <section >
                        <div class="collection-wrapper">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <Slider {...products} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} class="product-right-slick">
                                            {item.variants.map((vari, index) =>
                                                <div key={index}>
                                                    <ImageZoom image={vari.images} class="img-fluid image_zoom_cls-0" />
                                                </div>
                                            )}
                                        </Slider>
                                        <SmallImages item={item} settings={productsnav} navOne={this.state.nav1} />
                                    </div>
                                    {/* Product Details */}
                                    <div class="col-lg-4">
                                        <div class="product-right product-description-box">
                                            <h2> {item.name} </h2>
                                            <div class="rating three-star  mb-2">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </div>
                                            <div class="product-icon mb-3">
                                                <ul class="product-social">
                                                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="https://plus.google.com/discover" target="_blank"><i class="fa fa-google-plus"></i></a></li>
                                                    <li><a href="https://twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                                </ul>
                                                <button class="wishlist-btn" onClick={() => addToWishlist(item)}>
                                                    <i class="fa fa-heart"></i><span class="title-font">Add To WishList</span>
                                                </button>
                                            </div>
                                            <div class="row product-accordion">
                                                <div class="col-sm-12">
                                                    <div class="accordion theme-accordion" id="accordionExample">
                                                        <div class="card">
                                                            <div class="card-header" id="headingOne">
                                                                <h5 class="mb-0">
                                                                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                        product description
                                                                    </button>
                                                                </h5>
                                                            </div>

                                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>{item.shortDetails}</p>
                                                                    <div class="single-product-tables detail-section">
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
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingTwo">
                                                                <h5 class="mb-0">
                                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                        details
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <div class="mt-2 text-center">
                                                                        <iframe  src="https://www.youtube.com/embed/BUWzX78Ye_8"  allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card">
                                                            <div class="card-header" id="headingThree">
                                                                <h5 class="mb-0">
                                                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                        review
                                                                    </button>
                                                                </h5>
                                                            </div>
                                                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                                <div class="card-body">
                                                                    <p>no reviews yet</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Price Details */}
                                    <Price symbol={symbol} item={item} navOne={this.state.nav1} addToCartClicked={addToCart} BuynowClicked={addToCartUnsafe}  />
                                </div>
                            </div>
                        </div>
                    </section> : ''}
                {/*Section End*/}

                <section class="tab-product m-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-lg-12">
                                <DetailsTopTabs item={item} />
                            </div>
                        </div>
                    </div>
                </section>
                <RelatedProduct />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let productId = ownProps.match.params.id;
    return {
        item: state.data.products.find(el => el.id == productId),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist}) (Column);