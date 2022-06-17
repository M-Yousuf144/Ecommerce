import React, { Component } from 'react';

import "./carousel.css";

import Slider from 'react-slick';
import { connect } from 'react-redux'
import { getfilterProducts } from '../../../actions'
import store from '../../../store';
import { Link } from 'react-router-dom';

class WovistaCarousel extends Component {

  
product = (e) =>{
  var cate = '/'+e;
  store.dispatch(getfilterProducts(cate));
  document.querySelector(".loader-wrapper").style = "display: block";
}
flashsale = (e) =>{
  var cate = '?flash_sale=1';
  store.dispatch(getfilterProducts(cate));
  document.querySelector(".loader-wrapper").style = "display: block";
}
category = (e) =>{
  var cate = '?category_id='+e;
  store.dispatch(getfilterProducts(cate));
  document.querySelector(".loader-wrapper").style = "display: block";
}


  render() {

    const { user } = this.props;

    var settings = {


      infinite: true,
      adaptiveHeight: true,
      className: "center",
      variableWidth: true,
      centerMode: true,
      centerPadding: "60px",
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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


    
    return (
      <>
        <div>
          <Slider {...settings} class="product-4 product-m no-arrow" >
            {user.sliderImages.data ?
              user.sliderImages.data.map(img => (
              <Link to={'/shopPage'}  > <img
                  onClick={() => img.slider_is === "is_product" ? this.product(img.slider_product) : img.slider_is === "is_flashsale" ? this.flashsale(img.slider_product)  : img.slider_is === "is_category" ? this.category(img.slider_product) : null} 
                  className="carouselImg"
                  src={img.image_url} alt="Slider 1" /></Link>
              ))
              : ""}

          </Slider>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({

  user: state.images,

});

export default connect(mapStateToProps)(WovistaCarousel);
