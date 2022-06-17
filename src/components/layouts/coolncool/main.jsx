import React, { Component,useEffect } from 'react';
import { Helmet } from 'react-helmet'
import '../../common/index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
// Import custom components
import Collection from "./collection"
import HeaderThree from "../../common/headers/header-three"
import FooterFour from "../../common/footers/footer-four"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-toastify/dist/ReactToastify.css';
import WovistaCarousel from './carousel';
import CustomChatbot from '../../chatbot/CustomChatbot';
import Collection2 from './collection2';
import { getfilterProducts,sendSubscriberEmail } from '../../../actions';
import store from '../../../store';
import Slider from 'react-slick';
import Cookies from 'js-cookie';
class Coolncool extends Component {
    constructor (props) {
        super (props);
        this.counter = React.createRef(0);
        this.state = {
           loadingCategory:true,
           subscribeModal:true,
           checkstatus:Cookies.get('SubscribeModal'),
           subscriberEmail:''
           };
    }

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color18.css`);
    }
    category = (e) =>{
        var cate = '?category_id='+e;
        store.dispatch(getfilterProducts(cate));
        document.querySelector(".loader-wrapper").style = "display: block";
      }
    render() {
        let { categories } = this.props;
      
        const imageLoaded = () => {
            this.counter.current += 1;
            if (this.counter.current >= categories.length) {
              this.setState({loadingCategory:false});
            }
          }

          var settings = {
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 3000,
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
        let closeModal =()=>{
            var now = new Date();
            Cookies.set('SubscribeModal',true, { expires: 1 })
            this.setState({subscribeModal:false})
        }
    
        let sendEmail = () =>{
            let obj ={
                'email':this.state.subscriberEmail
            }
        store.dispatch(sendSubscriberEmail(obj));
            closeModal();
        }
     
      
        return (
            <div>
                
                <Helmet>
                    <title>Home - Makki Herbals</title>
                </Helmet>


      

                <HeaderThree logoName={'logo/14.png'} history={this.props.history} />
            <div style={{height:60}} ></div>
                <section className=" pt-1 larg-slider">
                    <WovistaCarousel />
                </section>
                <Collection type={'new'} title="New Arrivals" />
             

             
                <section className="pt-3 banner-6 ratio2_1">
                    <div className="container">
                        <div className="title1 title5">
                            <h2 className="title-inner1 mob-heading" style={{ letterSpacing: '5px' }}>CATEGORIES</h2>
                            <hr role="tournament6" />
                        </div>

                        <Slider {...settings} class="slide-4" >
                            {
                              categories && categories.map(m => {
                              
                                    return (
                                        <div className="px-3">
                                        <div className=" p-left">
                                            <div className="img-part">
                                    <Link to={`/shopPage`} onClick={()=> this.category(m.id)} >
                                    <img style={{display : this.state.loadingCategory ? "none" : "block", height:"100%", border:"2px solid #13743F"}}

                                                src={m.image_url}
                                                    className="img-fluid"
                                                    alt=""
                                                    onLoad={imageLoaded}
                                                />
                                    </Link>
                                               

                                                <div className="img-fluid text-center" style={{ display : this.state.loadingCategory ? "block" : "none"}}>
                                                <div class="skeleton-item skeleton-image"  ></div>

                      
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-md-center text-center">
{
this.state.loadingCategory ?
<div class="skeleton-item skeleton-title"></div>
:
<Link to={`/shopPage`} onClick={()=> this.category(m.id)} >

                                                <h3 style={{textTransform:"uppercase", marginTop:15}}>{m.name}</h3>
</Link>
}
                                        </div>
                                 </div>
                                        );
                                    })
                                } 

                            </Slider>
                    </div>
                </section>
                
            {/* {(this.state.subscribeModal ==  true && this.state.checkstatus !== 'true')? */}
            {(this.state.subscribeModal ==  true )?

            <div id="popup2">
                <div id="popup">
    <div id="close">
        <span style={{fontSize:'20px'}} onClick={()=>closeModal()}>&#10008;</span>
    </div>
    <div id="inpopup">
        <h2>Subscribe Now</h2>
        <p>Be the first to learn about our latest trends and get exclusive offers.</p>
        <br />
        <div id="input-subscribe">
            <input style={{paddingLeft:"15px"}} className="input-class" type="email" name="email" onChange={(e)=>this.setState({subscriberEmail:e.target.value})} placeholder="Enter your email"/>
            <button id="subscribe" onClick={()=>sendEmail()}>Subscribe</button>
        </div>
    </div>
</div>
</div>
:''
        }
              
                <Collection2 type={'isfeatured'} title="Featured Products" />
                <CustomChatbot eventHandler={this.clickEventHandler} />
                <FooterFour logoName={'logo/14.png'} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
   
    categories: state.data.menu,
})
export default connect(mapStateToProps)(Coolncool);