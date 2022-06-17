import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Slider from 'react-slick';



class Price extends Component {

    constructor (props) {
        super (props)
        this.state = {
            quantity:1,
            stock: 'InStock',
            nav3: null
        }
    }

    componentDidMount() {
        this.setState({
            nav3: this.slider3
        });
    }

    minusQty = () => {
        if(this.state.quantity > 1) {
            this.setState({stock: 'InStock'})
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    plusQty = () => {
        if(this.props.item.stock >= this.state.quantity) {
            this.setState({quantity: this.state.quantity+1})
        }else{
            this.setState({stock: 'Out of Stock !'})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }

    render (){
        const {symbol, item, addToCartClicked, BuynowClicked} = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div class="col-lg-4">
                <div class="product-right product-form-box">
                    <h4>
                        <del>{symbol}{item.price}</del>
                        <span>{item.discount}% off</span>
                    </h4>
                    <h3>{symbol}{(item.price*item.discount/100)} </h3>
                    <ul class="color-variant">
                        <Slider {...colorsnav} asNavFor={this.props.navOne} ref={slider => (this.slider1 = slider)} class="color-variant">
                            {item.variants.map((vari, i) => {
                                return <li class={vari.color} key={i} title={vari.color}></li>
                            })}
                        </Slider>
                    </ul>
                    <div class="product-description border-product">
                        <h6 class="product-title">Time Reminder</h6>
                        <div class="timer">
                            <p id="demo">
                                <span>25
                                    <span class="padding-l">:</span>
                                    <span class="timer-cal">Days</span>
                                </span>
                                <span>22
                                    <span class="padding-l">:</span>
                                    <span class="timer-cal">Hrs</span>
                                </span>
                                <span>13
                                    <span class="padding-l">:</span>
                                    <span class="timer-cal">Min</span>
                                </span>
                                <span>57
                                    <span class="timer-cal">Sec</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="product-description border-product">
                        <h6 class="product-title size-text">select size
                            <span><a href="" data-toggle="modal"
                                     data-target="#sizemodal">size chart</a></span></h6>
                        <div class="modal fade" id="sizemodal" tabIndex="-1"
                             role="dialog" aria-labelledby="exampleModalLabel"
                             aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered"
                                 role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title"
                                            id="exampleModalLabel">Sheer Straight
                                            Kurta</h5>
                                        <button type="button" class="close"
                                                data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`}
                                             alt="" class="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="size-box">
                            <ul>
                                {item.size.map((size, i) => {
                                    return <li key={i}><a href="#">{size}</a></li>
                                })}
                            </ul>
                        </div>
                        <span>{this.state.stock}</span>
                        <h6 class="product-title">quantity</h6>
                        <div class="qty-box">
                            <div class="input-group">
                                  <span class="input-group-prepend">
                                    <button type="button" class="btn quantity-left-minus" onClick={this.minusQty} data-type="minus" data-field="">
                                     <i class="fa fa-angle-left"></i>
                                    </button>
                                  </span>
                                <input type="text" name="quantity" value={this.state.quantity} onChange={this.changeQty} class="form-control input-number" />
                                <span class="input-group-prepend">
                                <button type="button" class="btn quantity-right-plus" onClick={this.plusQty} data-type="plus" data-field="">
                                <i class="fa fa-angle-right"></i>
                                </button>
                               </span>
                            </div>
                        </div>
                    </div>
                    <div class="product-buttons" >
                        <a class="btn btn-solid" onClick={() => addToCartClicked(item, this.state.quantity)}>add to cart</a>
                        <Link to={`${process.env.PUBLIC_URL}/checkout`} class="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >buy now</Link>
                    </div>
                </div>
            </div>
        )
    }
}


export default Price;