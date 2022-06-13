import React, { Component, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import '../common/index.scss';
import { connect } from "react-redux";

// import custom Components
import Service from "./common/service";
import store from '../../store';

import NewProduct from "../common/new-product";
import DetailsTopTabs from "./common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist,removeWishlist ,addItemToCart,fetchReviews} from '../../actions'

import {
  FacebookShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
} from 'react-share';


import ReactStars from 'react-rating-stars-component';




const ProductDetailsMe = (props) => {
  let {item} = props
  const myurl = window.location.href;

  function getproductid (e) {
    store.dispatch(fetchReviews(e));
   }
  function add_wishlist(e) {
    store.dispatch(removeWishlist(e));
}
const [qty , setqty] = useState(1);
const [loadMain, setLoadMain] = useState(true);
const [loadSmall, setLoadSmall] = useState(true);
const [image, setImage] = useState(item.api.images[0] ? item.api.images[0].url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXh6vH////5+vrl7fPv8/f0+fzt9Pbf6vD+/f/j6/Lf6vL///3f6fLr8fbv8/by9vm0HxD7AAACbUlEQVR4nO3c65abIBRAYVHTDALx/d+2VBuDII6zLHro2t/fmEn2HETn2jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkG29irNHa4I9G9+qu83B2BTauu01JIIYUUUkghhbcX/ipFTGH3LKOTUmi6Qq/QGQrLovA8Ckuj8LzqC/98A2ZX5YXd2Lajf6beOaTmwm5+tnnsBNZc+NTt/OaNanWT/U5hzYWjWjzyh1VSqK1ONpTPW/fyz66kcHCqixJtHwSqPvvUKgq1D/Rjik61MZzhWPd5aJ3fTfwR6yn+P4XzBFU8RevCwvzPJCoo9IFmepdmPUUdFuqaZzgt0fcUw8T+88Ar/wrSC/UywemgcKE+7Tg/ZNRY8V2bDScYT9G6r+mdu+fOK8guXE8wmaK/Vet6980PPmUXDvEEVXLRCL942lwGkguny0RSmF76//ILuh/SE1JyYXIObk/xzfn17NJH5BZ+LvSHpmjno10yRbmFySYTDHFjivONnZ9iHC+3MLNE31NcJy7zNsn9m9DC9DIRTXG9UD977jTF1UIVWpjbZDJTDM/YeLsRWfjdBKMprj8d8RRFFm5d6Dca31OM99z1diOwMHehT01TTBe0WV00BBYem+AyRbdxcDhFgYX6YN80RZu5LTCSZ9gcLzSqz+xIZvloAgt/MsN8u+QZUkghhRRSSCGFFFJIIYWXFKqv85Towr3fcDpKSy78xygsjcLzKCyNwvPEFCpthxKsVlIKXVeGE1NYHoUUUkghhRRSeFfh2D6u0o53BOpmuOz/RA17f8MHAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjcb3yLQG5tF3tgAAAAAElFTkSuQmCC");
const [name , setname] = useState(item.name);
const [shortDetails , setshortDetails] = useState(item.shortDetails);
const [price , setprice] = useState(item.price);
const [p_id , setp_id] = useState(item.id);
const [drop, setDrop] = useState(false);


const LoadNow = () =>{
  setImage(item.api.images[0] ? item.api.images[0].url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXh6vH////5+vrl7fPv8/f0+fzt9Pbf6vD+/f/j6/Lf6vL///3f6fLr8fbv8/by9vm0HxD7AAACbUlEQVR4nO3c65abIBRAYVHTDALx/d+2VBuDII6zLHro2t/fmEn2HETn2jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkG29irNHa4I9G9+qu83B2BTauu01JIIYUUUkghhbcX/ipFTGH3LKOTUmi6Qq/QGQrLovA8Ckuj8LzqC/98A2ZX5YXd2Lajf6beOaTmwm5+tnnsBNZc+NTt/OaNanWT/U5hzYWjWjzyh1VSqK1ONpTPW/fyz66kcHCqixJtHwSqPvvUKgq1D/Rjik61MZzhWPd5aJ3fTfwR6yn+P4XzBFU8RevCwvzPJCoo9IFmepdmPUUdFuqaZzgt0fcUw8T+88Ar/wrSC/UywemgcKE+7Tg/ZNRY8V2bDScYT9G6r+mdu+fOK8guXE8wmaK/Vet6980PPmUXDvEEVXLRCL942lwGkguny0RSmF76//ILuh/SE1JyYXIObk/xzfn17NJH5BZ+LvSHpmjno10yRbmFySYTDHFjivONnZ9iHC+3MLNE31NcJy7zNsn9m9DC9DIRTXG9UD977jTF1UIVWpjbZDJTDM/YeLsRWfjdBKMprj8d8RRFFm5d6Dca31OM99z1diOwMHehT01TTBe0WV00BBYem+AyRbdxcDhFgYX6YN80RZu5LTCSZ9gcLzSqz+xIZvloAgt/MsN8u+QZUkghhRRSSCGFFFJIIYWXFKqv85Towr3fcDpKSy78xygsjcLzKCyNwvPEFCpthxKsVlIKXVeGE1NYHoUUUkghhRRSeFfh2D6u0o53BOpmuOz/RA17f8MHAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjcb3yLQG5tF3tgAAAAAElFTkSuQmCC")
  setname(item.name);
  setshortDetails(item.shortDetails)
  setprice(item.price)
  setp_id(item.id)
}

if(name !== item.api.name){
  LoadNow()
}


function addItemTOCart(e) {
  var item = {'product_id':e,'quantity':qty}
  store.dispatch(addItemToCart(item));
  setqty(1);
}

function getvariant(e){
  item.api.variants.filter(item => item.shoescode === e).map(value => (
    <>  
      {setname(value.name)}
      {setshortDetails(value.shortDetails)}
      {setprice(value.price)}
      {setp_id(value.id)}
    </>
    
  ))

}

useEffect(()=>{
	if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		
	  setDrop(true);
	}

},[])


  return (
    <>
     <Helmet>
                    <title>{name} - Makki Herbals</title>
                </Helmet>
<div className='row'>
 

<div className='head50' />

{
  drop
  ?
  <div className='col-md-2'></div> 
  :
<div className='col-md-4' 
  style={{marginTop:90, paddingLeft:60}}
  >
<Service/>
<NewProduct/>

  </div>


}



      <div class="col-md-8"  >
         <div class="card-wrappering"> 
        

        <div class="carding"
         style={{ marginTop: 50 ,width:"100%"}}
        >


          <div class="product-imgs">
            <div class="img-display" >
              <div class="img-showcase">

            
            

<div class="skeleton-item skeleton-image" style={{paddingTop:"25vh", paddingBottom:"25vh",width:"20em",display : loadMain ? "block" : "none"}}></div>


<div style={{display : loadMain ? "none" : "block" ,  borderRadius: 10, boxShadow: "0px 20px 50px rgba(0,0,0,0.05)"}}>
  
                      <img style={{ height:"50vh",width:"20em", marginLeft:"5%",border: "1px solid rgba(0,0,0,0.2)",}}
                       className='image' onLoad={()=>setLoadMain(false)} src={image} alt="product image" />
</div>

                  


              </div>
            </div>

            <div class="img-select">
              {

                item.api.images.map((e, i) => {
                  
                  getproductid(item.id)
                  return (

                    <div onClick={()=>setImage(e.url)} key={i} class="img-item" style={{ borderRadius: 10,}}>
                      <a>
                      <div style={{display : loadSmall ? "block" : "none"}}>

                      <div class="skeleton-item skeleton-imageas" style={{ width:"100px", height:"100px"}}></div>
                      </div>
                      <div style={{display : loadSmall ? "none" : "block" , height:"100px",}}>

                        <img style={{ width: 100, height: 100,border: "1px solid rgba(0,0,0,0.2)", marginLeft:"9%",boxShadow: "0px 20px 50px rgba(0,0,0,0.08)", }} onLoad={()=>setLoadSmall(false)} className='image' src={e.url ? e.url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXh6vH////5+vrl7fPv8/f0+fzt9Pbf6vD+/f/j6/Lf6vL///3f6fLr8fbv8/by9vm0HxD7AAACbUlEQVR4nO3c65abIBRAYVHTDALx/d+2VBuDII6zLHro2t/fmEn2HETn2jQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkG29irNHa4I9G9+qu83B2BTauu01JIIYUUUkghhbcX/ipFTGH3LKOTUmi6Qq/QGQrLovA8Ckuj8LzqC/98A2ZX5YXd2Lajf6beOaTmwm5+tnnsBNZc+NTt/OaNanWT/U5hzYWjWjzyh1VSqK1ONpTPW/fyz66kcHCqixJtHwSqPvvUKgq1D/Rjik61MZzhWPd5aJ3fTfwR6yn+P4XzBFU8RevCwvzPJCoo9IFmepdmPUUdFuqaZzgt0fcUw8T+88Ar/wrSC/UywemgcKE+7Tg/ZNRY8V2bDScYT9G6r+mdu+fOK8guXE8wmaK/Vet6980PPmUXDvEEVXLRCL942lwGkguny0RSmF76//ILuh/SE1JyYXIObk/xzfn17NJH5BZ+LvSHpmjno10yRbmFySYTDHFjivONnZ9iHC+3MLNE31NcJy7zNsn9m9DC9DIRTXG9UD977jTF1UIVWpjbZDJTDM/YeLsRWfjdBKMprj8d8RRFFm5d6Dca31OM99z1diOwMHehT01TTBe0WV00BBYem+AyRbdxcDhFgYX6YN80RZu5LTCSZ9gcLzSqz+xIZvloAgt/MsN8u+QZUkghhRRSSCGFFFJIIYWXFKqv85Towr3fcDpKSy78xygsjcLzKCyNwvPEFCpthxKsVlIKXVeGE1NYHoUUUkghhRRSeFfh2D6u0o53BOpmuOz/RA17f8MHAAAAAAAAAAAAAAAAAAAAAAAAAAAAALjcb3yLQG5tF3tgAAAAAElFTkSuQmCC"} alt="product image" />
                    </div>
                      </a>
                    </div>
                    
                  )

                }

                )


              }
              

            </div>
          </div>








          <div class="product-content">
            <h2 class="product-title" style={{marginTop:40}}>{name}</h2>
            <a href="#" class="product-link"></a>
            <div class="product_average-ratings__score">
<ReactStars
  count={5}
  size={24}
  isHalf={true}
  value={item.api.reviews.average_rating}
  edit={false}
  emptyIcon={<i className="far fa-star"></i>}
  halfIcon={<i className="fa fa-star-half-alt"></i>}
  fullIcon={<i className="fa fa-star"></i>}
  activeColor="#ffd700"
/>
<span class="product_average-ratings__stars">{`${item.api.reviews.average_rating}(${item.api.reviews.total})`}</span>

</div>


           
                <div class="product-price">
                  <p class="new-price fs-5">Price: <span className="px-1"> {price}</span></p>
                </div>

          


            <div class="product-detail">
              <h2>Description: </h2>
              <p style={{fontFamily:"Poppins,sans-serif"}} dangerouslySetInnerHTML={{ __html: shortDetails }} />
            </div>


            <div>

              <h5 className='h5ian'>Quantity</h5>
              <div class="qty-box">
                <div class="input-group">
                  <span class="input-group-prepend">
                    <button type="button" class="btn quantity-left-minus" onClick={()=>setqty((qty == 1)?1:qty-1)} >
                      <i class="icon-minus"></i>
                    </button>
                  </span>
                  <input type="text" name="quantity" value={qty} readOnly={true}  class="form-control input-number" />
                  <span class="input-group-prepend">
                    <button type="button" class="btn quantity-right-plus" onClick={()=>setqty(qty + 1)} >
                      <i class="icon-plus"></i>
                    </button>
                  </span>
                </div>
              </div>

{(item.api.super_attributes)?<div><h5 className='h5ian'>Size</h5>

<select id="cars" onChange={(e)=>getvariant(e.target.value)} style={{ width: "100%", padding: 10, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 5, outline: "none" }}>
{item.api.super_attributes[1].options.map(e =>(
  <option value={e.id}>{e.label}</option>
))}

</select></div>:<div></div>}
              


            </div>

            <div class="purchase-info">
              <button type="button" class="btn-solid btn" onClick={() =>  addItemTOCart(p_id)}  >Add to Cart</button> &nbsp;&nbsp;&nbsp;&nbsp;
            
            
            
          {   
          item.wishlist
          ?
          <button type="button" class="btn-solid btn" onClick={() => localStorage.getItem("customerData") ? add_wishlist(p_id):window.location.href = "/login"}>Remove From Wishlist</button>
          
          :
          <button type="button" class="btn-solid btn" onClick={() => localStorage.getItem("customerData") ? add_wishlist(p_id):window.location.href = "/login"}>Add to Wishlist</button>
           
           }
           
            </div>

            <div class="social-links">
              <p style={{ marginTop: 15, marginRight: 5, fontWeight: 600 }}>Share At: </p>
              &nbsp;&nbsp;&nbsp;
              <FacebookShareButton
                url={myurl}
                quote={name}
                hashtag={'#MakkiHerbals'}
              >
                <FacebookIcon size={35} round={true} />
              </FacebookShareButton>&nbsp;&nbsp;

              <WhatsappShareButton
                url={myurl}
                quote={name}
                hashtag={'#MakkiHerbals'}
              >
                <WhatsappIcon size={35} round={true} />
              </WhatsappShareButton>

            </div>
          </div>
        </div>

     
     
     
     
     
     
     
     
     
     
     
     
      </div>

        <DetailsTopTabs item={item} />
      </div> 

{
  drop ? 
<div className='my-4'>
  <div style={{border:"1px solid rgba(0,0,0,0.1)", marginLeft:"5%", marginRight:"5%"}}>

  <Service />
  </div>


  <div style={{marginLeft:"5%", marginRight:"5%", marginTop:50,border:"1px solid rgba(0,0,0,0.1)", padding:10}}>
  <NewProduct />
</div>

</div>
: null
}
      </div>
    </>
  )
}







class LeftSideBar extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
      nav1: null,
      nav2: null,
      quantity: 1,
      stock: 'InStock',
      nav3: null,

    };
  }
  minusQty = () => {
    if (this.state.quantity > 1) {
      this.setState({ stock: 'InStock' })
      this.setState({ quantity: this.state.quantity - 1 })
    }
  }

  plusQty = () => {
    if (this.props.item.stock >= this.state.quantity) {
      this.setState({ quantity: this.state.quantity + 1 })
    } else {
      this.setState({ stock: 'Out of Stock ' })
    }
  }
  changeQty = (e) => {
    this.setState({ quantity: parseInt(e.target.value) })
  }


  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  filterClick() {
    document.getElementById("filter").style.left = "-15px";
  }
  backClick() {
    document.getElementById("filter").style.left = "-365px";
  }

  render() {
    const { symbol, item, addToCart, addToCartUnsafe, addToWishlist,review } = this.props
    



    return (
      <div>
        <Helmet>
          <title>Makki Herbals</title>
          <meta name="description" content="" />
        </Helmet>


        {(item) ?


          <ProductDetailsMe review={review} item={item} symbol={symbol} minusQty={this.minusQty} plusQty={this.plusQty} changeQty={this.changeQty} quantity={this.state.quantity} />






          : ''}
        {/*Section End*/}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let productId = ownProps.match.params.id;
  return {
    item: state.data.products.find(el => el.name === productId),
    symbol: state.data.symbol,
    review: state.data.reviewsdata.data

  }
}

export default connect(mapStateToProps, { addToCart, addToCartUnsafe, addToWishlist })(LeftSideBar);