import React, {Component} from 'react';
import { connect } from 'react-redux'
import { SlideToggle } from 'react-slide-toggle';


class BrandBlock extends Component {


    render (){
        return (
            <div class="collection-filter-block">
                <div class="collection-mobile-back">
                    <span class="filter-back">
                        <i class="fa fa-angle-left" aria-hidden="true"></i> back
                    </span>
                </div>
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div class="collection-collapse-block">
                            <h3 class="collapse-block-title" onClick={onToggle}>brand</h3>
                            <div class="collection-collapse-block-content" ref={setCollapsibleElement}>
                                <div class="collection-brand-filter">
                                    <ul class="category-list">
                                        <li><a href="#">clothing</a></li>
                                        <li><a href="#">bags</a></li>
                                        <li><a href="#">footwear</a></li>
                                        <li><a href="#">watches</a></li>
                                        <li><a href="#">accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

export default connect(
    mapStateToProps,
    null
)(BrandBlock)
