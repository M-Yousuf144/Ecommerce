import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux'
import store from '../../../store';

import {Product4} from '../../../services/script'
import {addToCart, addToWishlist, addToCompare,removeWishlist,addItemToCart} from "../../../actions";
import ProductItem from './product-item';

import "./proCard.css"

class Collection2 extends Component {

    

    render (){

        function handleClick(e) {
            store.dispatch(removeWishlist(e));
        }
        function addItemTOCart(e) {
            var item = {'product_id':e,'quantity':1}
            store.dispatch(addItemToCart(item));
        }

        const {items, symbol, addToCart, addToWishlist, addToCompare, title, subtitle,featured} = this.props;
        
        
        return (
            <div>
                {/*Paragraph*/}
                <section class="section-b-space j-box pets-box ratio_square">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="title1 title5">
                                    {subtitle?<h4 style={{fontStyle: 'italic',fontSize: '14px',color: '#777777',letterSpacing:'0px'}}>{subtitle}</h4>:''}
                                    <h2 class="title-inner1 mob-heading" style={{letterSpacing:'5px'}}>{title}</h2>
                                    <hr role="tournament6" />
                                </div>
                                <Slider {...Product4} class="product-4 product-m no-arrow">
                                    {  items.map((product, index ) =>
                            
                                        <div key={index}>
                                         
                                            <ProductItem product={product} symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => localStorage.getItem("customerData") ? handleClick(product.id): window.location.href = "./login"}
                                                         onAddToCartClicked={() => addItemTOCart(product.id)} key={index} />
                                        </div>)
                                    }




                                </Slider>
                            </div>
                        </div>
                    </div>
             
                </section>
            </div>
        )
    }
}
function mapStateToProps (state, ownProps)  {
    let bestsellers = [];
    if(state.data.bestsellers !== undefined   ){
         bestsellers = state.data.bestsellers[state.filters.country] ;
    }

    return {

    items: state.data.deals,
    symbol: state.data.symbol,
}
  
}

    export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (Collection2);