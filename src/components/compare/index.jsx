import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';


import {removeFromCompare, addToCart} from '../../actions'

class Compare extends Component {

    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        var settings = {
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            // autoplay: true,
            // autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 586,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }

        const {Items, symbol, addToCart, removeFromCompare} = this.props;

       
        return (
            <div>
                {Items.length>0 ?
                <section class="compare-section section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <Slider {...settings} class="slide-4">
                                    {Items.map((item,index) =>
                                        <div key={index}>
                                            <div class="compare-part">
                                                <button type="button" class="close-btn mx-2 my-2" onClick={() => removeFromCompare(item)}>
                                                    <span aria-hidden="true" style={{fontSize:30}}>×</span>
                                                </button>
                                                <div class="img-secton">
                                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`}>
                                                    <img src={item.variants?
                                                                item.variants[0].images
                                                                : typeof(item.pictures) == "object" ? item.pictures[0] : item.pictures} class="img-fluid" alt="" />
                                                    
                                                    
                                                    <h2 style={{marginTop:'5%', textAlign:"center"}}>{item.name}</h2>
                                                    
                                                    </Link>
                                                    <h5>{symbol}{(item.price*item.discount/100)}
                                                        <del><span class="money text-center">{symbol}{item.price}</span></del></h5>
                                                </div>
                                                <div class="detail-part">
                                                    <div class="title-detail">
                                                        <h5>description</h5>
                                                    </div>
                                                    <div class="inner-detail">
                                                    <p className='text-center' dangerouslySetInnerHTML={ {__html: item.description} } />
                                                    </div>
                                                </div>
                                                <div class="detail-part">
                                                    <div class="title-detail">
                                                        <h5>Brand Name</h5>
                                                    </div>
                                                    <div class="inner-detail">
                                                        <p>{item.tags}</p>
                                                    </div>
                                                </div>
                                                <div class="detail-part">
                                                    <div class="title-detail">
                                                        <h5>size</h5>
                                                    </div>
                                                    <div class="inner-detail">
                                                        {/* <p>{item.size}</p> */}
                                                        <center><p>Small</p></center>
                                                    </div>
                                                </div>
                                                <div class="detail-part">
                                                    <div class="title-detail">
                                                        <h5>color</h5>
                                                    </div>
                                                    <div class="inner-detail">
                                                        <p>{item.colors}</p>
                                                    </div>
                                                </div>
                                                <div class="detail-part">
                                                    <div class="title-detail">
                                                        <h5>availability</h5>
                                                    </div>
                                                    <div class="inner-detail">
                                                    <center><p>In stock</p></center>
                                                    </div>
                                                </div>
                                                <div class="btn-part">
                                                    <a href="javascript:void(0)" style={{borderRadius:6}} class="btn btn-solid" onClick={() => addToCart(item, 1)}>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Slider>
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
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-compare.png`} class="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Compare List is Empty</strong>
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
    Items: state.compare.items,
    symbol: state.data.symbol,
})

export default connect(
    mapStateToProps,
    {removeFromCompare, addToCart}
)(Compare)