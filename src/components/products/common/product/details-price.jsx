import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "../../leftSidebar.scss"


class DetailsWithPrice extends Component {

    constructor (props) {
        super (props)
        this.state = {
            open:false,
            quantity:1,
            stock: 'InStock',
            nav3: null,
            imgId:1,

        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

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
            this.setState({stock: 'Out of Stock '})
        }
    }
    changeQty = (e) => {
        this.setState({ quantity: parseInt(e.target.value) })
    }









    
    render (){
        const {symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked} = this.props

        var colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
// let imgId = 1;


imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        this.setState({ imgId: imgItem.dataset.id })
       slideImage();
    });
});

 const slideImage = () => {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- ( this.state.imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


      

        return (
            <>





            <div className='container' style={{border:"1px solid rgba(0,0,0,0.05)",borderRadius:20, width:"80%", marginLeft:"10%",  boxShadow:"0px 10px 50px rgba(0,0,0,0.1)", display:"flex", justifyContent:"center", alignItems:"center"}}>
                
            
            
                <div className='row'>
            <div className='col-md-4 product-image' style={{height:"65vh",borderRadius:20, padding:"20px", width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}} >
            {/* <div class="product-image" > */}
            
            {/* <img src={item.pictures} width="250px" /> */}
            {/* </div> */}


            <div class = "product-imgs" style={{padding:0,marginTop:20, marginBottom:20,height:"96vh",margin:4, border:"1px solid rgba(255,255,255,0.5)", borderRadius:20}}>
          <div class = "img-display"  >
            <div class = "img-showcase"  >
              <img className='imgas' style={{padding:50, borderRadius:20}}  src = {item.pictures} alt = "shoe image" />
              <img className='imgas' style={{padding:50, borderRadius:20}}  src = "https://co0kie.github.io/codepen/nike-product-page/nikeShoe.png" alt = "shoe image" />
              <img className='imgas' style={{padding:50, borderRadius:20}} src = {item.pictures} alt = "shoe image" />
              <img className='imgas' style={{padding:50, borderRadius:20}} src = "https://co0kie.github.io/codepen/nike-product-page/nikeShoe.png"     alt = "shoe image" />
            </div>
          </div>

          <div class = "img-select" style={{display:"flex", bottom:0, justifyContent:"center", alignItems:"center", width:"80%", marginLeft:"10%",marginBottom:10}}>
            <div class = "img-item mx-1">
              <a href = "#" data-id = "1">
                <img className='imgas' style={ this.state.imgId == 1 ? {border:"1px solid rgba(255,255,255,1)", boxShadow:"0px 5px 10px rgba(0,0,0,0.2)", padding:10, borderRadius:20, height:80, width:80} : {border:"1px solid rgba(255,255,255,0.5)",padding:10, borderRadius:20, height:80, width:80} } src = {item.pictures} alt = "shoe image" />
              </a>
            </div>
            <div class = "img-item mx-1">
              <a href = "#" data-id = "2">
                <img className='imgas' style={ this.state.imgId == 2 ? {border:"1px solid rgba(255,255,255,1)", boxShadow:"0px 5px 10px rgba(0,0,0,0.2)", padding:10, borderRadius:20, height:80, width:80} : {border:"1px solid rgba(255,255,255,0.5)", padding:10, borderRadius:20, height:80, width:80} } src = "https://co0kie.github.io/codepen/nike-product-page/nikeShoe.png" alt = "shoe image" />
              </a>
            </div>
            <div class = "img-item mx-1">
              <a href = "#" data-id = "3">
                <img className='imgas' style={ this.state.imgId == 3 ? {border:"1px solid rgba(255,255,255,1)", boxShadow:"0px 5px 10px rgba(0,0,0,0.2)", padding:10, borderRadius:20, height:80, width:80} : {border:"1px solid rgba(255,255,255,0.5)",padding:10, borderRadius:20, height:80, width:80} } src = {item.pictures} alt = "shoe image" />
              </a>
            </div>
            <div class = "img-item mx-1">
              <a href = "#" data-id = "4">
                <img className='imgas' style={ this.state.imgId == 4 ? {border:"1px solid rgba(255,255,255,1)", boxShadow:"0px 5px 10px rgba(0,0,0,0.2)", padding:10, borderRadius:20, height:80, width:80} : {border:"1px solid rgba(255,255,255,0.5)",padding:10, borderRadius:20, height:80, width:80} } src = "https://co0kie.github.io/codepen/nike-product-page/nikeShoe.png"   alt = "shoe image" />
              </a>
            </div>
          </div>
        </div>










            </div>
            
            <div className='col-md-8'>
            
            
            
            <div class="product-details">
                <header className='headerian' style={{display:"flex", justifyContent:"space-between"}}>
                    <div>
            
                  <h1 class="title">
                      {item.name}
                      </h1>
                  <span class="colorCat">mint green</span>
                  <div class="price">
                    <span class="before">$150</span>
                    <span class="current">$144.99</span>

                  </div>
                    </div>
            
                    <a href="#" className='anc'><img className='imgnc' src="http://co0kie.github.io/codepen/nike-product-page/share.png" alt="" /></a>
            
            
                  {/* <div class="rate">
                    <a href="#" style={{color:"yellow"}}>★</a>
                    <a href="#" style={{color:"yellow"}}>★</a>
                    <a href="#" style={{color:"yellow"}}>★</a>
                    <a href="#">★</a>
                    <a href="#">★</a>
                  </div> */}
                </header>
            
                <article className='articleian' style={{borderRadius:"20px", boxShadow:"0px 5px 10px rgba(0,0,0,0.1)", padding:20}}>
                  <h5 className='h5ian'>Description</h5>
              

                  <p>

                  <p dangerouslySetInnerHTML={{__html: item.description}} />
                  </p>
                </article>
            
                <div class="controls row " style={{borderRadius:"20px", boxShadow:"0px 5px 10px rgba(0,0,0,0.1)", padding:20}}>
                  <div class="color col-md-4">
                    <h5 className='h5ian'>color</h5>
                    <ul className='ulian'>
                      <li><a href="#" class="colors color-bdot1"></a></li>
                      <li><a href="#" class="colors color-bdot2"></a></li>
                      <li><a href="#" class="colors color-bdot3"></a></li>
                      <li><a href="#" class="colors color-bdot4"></a></li>
                      <li><a href="#" class="colors color-bdot5"></a></li>
                    </ul>
                  </div>
                  <div class="color col-md-4">
                    <h5 className='h5ian'>Size</h5>

                    <select id="cars" style={{width:"100%", padding:10, border:"1px solid rgba(0,0,0,0.2)", borderRadius:5, outline:"none"}}>
  <option value="Small">Small</option>
  <option value="Medium">Medium</option>
  <option value="Large">Large</option>
  <option value="XLarge">XLarge</option>
  <option value="XXLarge">XXLarge</option>
</select>

                  
                  </div>
                  <div class="color col-md-4">
                    <h5 className='h5ian'>Quantity</h5>
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
                  
                     
   
                  
            
     
           
           
            </div>
            
            
                <div class="footer" style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
                <button onClick={() => addToCartClicked(item, this.state.quantity)} class="btn btn-solid" style={{borderRadius:10, marginTop:20}} type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add To Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                <Link to={`${process.env.PUBLIC_URL}/checkout`}>
                <button onClick={() => BuynowClicked(item, this.state.quantity)} class="btn btn-solid" style={{borderRadius:10, marginTop:20}} type="submit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Buy Now &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
              </Link>
            
                    {/* <span>add to cart</span> */}
            
                </div>





              </div>
            
            
            
            
            </div>
            
            
            
            
            
                </div>
            
           
            
            
            
                </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            </>
            
        )
    }
}


export default DetailsWithPrice;