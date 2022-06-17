import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "./proCard.css"
import Heart from "react-heart"
import { getRelatedItems } from "../../../services";
class ProductItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            cartModalopen: false,
            stock: 'InStock',
            quantity: 1,
            image: '',
            click: false,
            loadingNew: true,
            wishList: this.props.product.wishlist
        }
    }
    onClickHandle(img) {
        this.setState({ image: img });
    }
    onOpenModal = () => {
        if (window.innerWidth < 750) {
            this.setState({ open: false });
        } else { this.setState({ open: true }); }
    };
    onCloseModal = () => {
        this.setState({ open: false });
    };
    onOpenCartModal = () => {
        if (window.innerWidth < 750) {
            this.setState({ cartModalopen: false });
            this.props.onAddToCartClicked();
        } else {
            this.setState({ cartModalopen: true });
            this.props.onAddToCartClicked();
        }
    };
    onCloseCartModal = () => {
        this.setState({ cartModalopen: false });
    };
    minusQty = () => {
        if (this.state.quantity > 1) {
            this.setState({ stock: 'InStock' })
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }
    plusQty = () => {
        if (this.props.product.stock >= this.state.quantity) {
            this.setState({ quantity: this.state.quantity + 1 })
        } else {
            this.setState({ stock: 'Out of Stock !' })
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }
    setActive = (e) => {
        this.setState({ wishList: e });
    }
    render() {
        const { product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked, relatedItems, user, productNo } = this.props;
        const { wishList } = this.state;
        let RatingStars = []
        for (var i = 0; i < product.rating; i++) {
            RatingStars.push(<i class="fa fa-star" key={i}></i>)
        }
        return (
            <>
                {
                    product
                        ?
                        <div>
                            <div class="card shadown" style={{ margin: "10px" }} data-sku="sku9999">
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <button
                                    >
                                        {
                                        }
                                    </button>
                                    <div style={{ width: "2.5rem", display: 'inline', position: 'absolute' }} >
                                        {
                                            this.state.loadingNew ?
                                                <div class="skeleton-item skeleton-titleas"></div>
                                                :
                                                <Heart isActive={wishList} onClick={() => { this.setActive(!wishList); onAddToWishlistClicked(); }} />
                                        }
                                    </div>
                                    <div style={{ width: "2.5rem" }}>
                                        {(product.api.Discount_Percentage) ?
                                            this.state.loadingNew ?
                                                <div class="skeleton-item skeleton-titleas"></div>
                                                :
                                                <div class="circle">
                                                    <span class="circle__content">{product.api.Discount_Percentage}</span>
                                                </div>
                                            :
                                            <div class="circle" style={{ backgroundColor: '#ffffff00' }}>
                                                <span class="circle__content">{product.api.Discount_Percentage}</span>
                                            </div>
                                        }
                                    </div>
                                    {/* </button> */}
                                </div>
                                <Link to={this.state.loadingNew ? "/" : `${process.env.PUBLIC_URL}/product/product/${product.name}`} >
                                    <a class="product-link img" href="#">
                                        <div class="text-center" style={{
                                            display: this.state.loadingNew
                                                ? "block" : "none"
                                        }} >
                                            <div class="skeleton-item skeleton-image" style={{ paddingTop: 140, paddingBottom: 140, marginTop: 10 }}></div>
                                        </div>
                                        <div class="holder-product-img" style={{
                                            display: this.state.loadingNew
                                                ? "none" : "block"
                                        }}>
                                            <img class="product-img loaded" style={{ height: 300 }} src={`${product.pictures}`}
                                                alt="Product Images"
                                                onLoad={() => this.setState({ loadingNew: false })}
                                            />
                                        </div>
                                    </a>
                                    <h3 class="product-title">
                                        <a class="product-link title" href="#">
                                            {
                                                this.state.loadingNew ?
                                                    <div class="skeleton-item skeleton-copy-full"></div>
                                                    :
                                                    <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily: "Poppins" }}>{product.category}</h6>
                                            }
                                            {
                                                this.state.loadingNew ?
                                                    <div class="skeleton-item skeleton-copy-full"></div>
                                                    :
                                                    <h6 style={{ fontSize: '12px', letterSpacing: '0px', fontFamily: "Poppins" }}>{product.name}</h6>
                                            }
                                        </a>
                                    </h3>
                                    <p class="product-price">
                        {
                            this.state.loadingNew ?
                            <div class="skeleton-item skeleton-copy-fullp"></div>
                            :
              

<h4 style={{marginTop:15}}>{(product.api.formated_price)?product.api.formated_price:(product.api.price)?product.api.price:''}
{(product.api.formated_regular_price !== null) ?
    <span class="of" style={{display:"inline-block", marginLeft:10}}>
        <span class="accessibility-text">De</span>
        <span style={{marginLeft:7}}>{product.api.formated_regular_price}</span> </span>: ''}
     
</h4>

                        }

</p>
                                </Link>
                                {
                                    this.state.loadingNew ?
                                        <div class="skeleton-item skeleton-copy-fullsa"></div>
                                        :
                                        <button class="add-to-cart" style={{ paddingBottom: "2px", height: "50px", backgroundColor: "#13743F" }} onClick={() =>  this.onOpenCartModal() } type="button" form="cart" data-plugin="toggle-class-target" data-target=".card" data-class="added-to-cart" data-flag="_parents">
                                            Add To Cart
                                        </button>
                                }
                            </div>
                        </div>
                        :
                        <div style={{ height: 500, width: "100%", textAlign: "center" }}>
                            No Products Available
                        </div>
                }
            </>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    relatedItems: getRelatedItems(state.data.products, ownProps.product.category, state.filters.country),
    symbol: state.data,
    user: state.user.user,
    productNo: state.data.products,
})
export default connect(mapStateToProps)(ProductItem);
