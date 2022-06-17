import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SlideUpDown } from "../../../services/script"
import LogoImage from "../headers/common/logo"
import "./footer.css"
import { Link } from 'react-router-dom';
import { getfilterProducts } from '../../../actions';
import store from '../../../store';
class FooterFour extends Component {
    
    componentDidMount() {
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('slide-up');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function (elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }
    category = (e) =>{
        var cate = '?category_id='+e;
        store.dispatch(getfilterProducts(cate));
        document.querySelector(".loader-wrapper").style = "display: block";
      }
    render() {
        const { socialLinks ,contactDetails,categories} = this.props;
        return (
            <footer class="footer-style" style={{bottom:0, width:"100%", left:0,}}>
                <div class="white-layout" >
                    <div class="container">
                        <section class="small-section">
                        </section>
                    </div>
                </div>
                <footer>
<hr   style={{ borderTop: "1px solid rgb(203 255 227)", color:"rgb(203 255 227)"}} />
                    <div class="content">
                        <div class="top">
                            <div class="logo-details">
                                <LogoImage style={{width:"100%"}} logo={this.props.logoName} />
                            </div>
                            <div class="">
          <a href={(contactDetails.data) ? contactDetails.data.facebook_page : ""} target="_blank" rel="noopener noreferrer">
              {((socialLinks.data)?socialLinks.data[0].is_active :'' === 1)?<img alt="as" src={(socialLinks.data)?socialLinks.data[0].icon:''} width={60} height={60} /> :''}
              </a>
          <a href={(contactDetails.data) ? contactDetails.data.twitter_page : ""} target="_blank" rel="noopener noreferrer">
          {((socialLinks.data)?socialLinks.data[1].is_active: '' === 1)?<img alt="as" src={(socialLinks.data)?socialLinks.data[1].icon:''} width={60} height={60} /> :''}
              </a>
          <a href={(contactDetails.data) ? contactDetails.data.instagram_page : ""} target="_blank" rel="noopener noreferrer">
          {((socialLinks.data)?socialLinks.data[2].is_active: '' ===1)?<img alt="as" src={(socialLinks.data)?socialLinks.data[2].icon:''} width={60} height={60} /> :''}
          </a>
          {/* <a href="#"><FaLinkedinIn className="fab" /></a> */}
          <a href={(contactDetails.data) ? contactDetails.data.youtube_page : ""} target="_blank" rel="noopener noreferrer">
          {((socialLinks.data)?socialLinks.data[3].is_active : ''=== 1)?<img alt="as" src={(socialLinks.data)?socialLinks.data[3].icon:''} width={60} height={60} /> :''}
          </a>
        </div>
                        </div>
                        <div class="link-boxes">
                            <ul class="box">
                                <li class="link_name">New Arrival</li>
                                <br />
                                {(categories)?
                                <div>
                                    {
                             
                             ((categories.length < 4)?categories.slice(0, categories.length): categories.slice(0, 4)).map((m,i)=>{
                                 return(
                                    <>
                                    <Link key={i} to={`/shopPage`} onClick={()=> this.category(m.id)}><li style={{color:"rgb(26, 26, 26)", fontWeight:400}}>{m.name}</li></Link><br />
                                    </>
                                 )
                             })
                            }
                                </div>
                            
                            :""
                            }
                             
                            </ul>
                            <ul class="box">
                               <Link to={`${process.env.PUBLIC_URL}/`}><li class="link_name">Account</li></Link> 
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/dashboard`}><li><a href="/">My Account</a></li></Link>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/myOrders`}><li><a href="/">My Orders</a></li></Link>
                                <br />
                            </ul>
                            <ul class="box">
                                <li class="link_name">Company</li>
                                <br />
                                <Link to={`${process.env.PUBLIC_URL}/shopPage`}><li style={{color:"rgb(26, 26, 26)", fontWeight:500}}>Shop</li></Link><br />
                               <Link to={`${process.env.PUBLIC_URL}/contact`}><li style={{color:"rgb(26, 26, 26)", fontWeight:500}}>Contact</li></Link> <br />
                                <Link to={`${process.env.PUBLIC_URL}/`}><li style={{color:"rgb(26, 26, 26)", fontWeight:500}}>Home</li></Link>
                            </ul>
                            <ul class="box">
                                <li class="link_name">Contact Us</li>
                                <br />
                                { socialLinks.data ?
    socialLinks.data.map((e,i)=>{
        return(
                    ((socialLinks.data)?e.is_active : '' === 1) ?
            <>
                               <li key={i} style={{color:"rgb(26, 26, 26)", fontWeight:500}}> 
                               <a  href={contactDetails.data ? contactDetails.data.facebook_page : ""} rel="noopener noreferrer" target="_blank">
                               {e.name.substring(0, e.name.length - 6)}
                               
                               
                               
                               </a></li>
                                <br />
            </>
        : ""
        )
    })
    :
    ""
}

                            </ul>
                        </div>
                    </div>
                    <div class="bottom-details text-center py-3" style={{backgroundColor:"rgb(203 255 227)"}}>
                        {/* <div class="bottom_text text-center"> */}
                            <span class="copyright_text" style={{fontWeight:"600", letterSpacing:2}}>
                                Copyrighted by Makki Herbals | Powered By <a  style={{color:"#13743F", fontWeight:"bold"}} href='https://alisonstech.com/' target="_blank">Alisons Technology</a>
                                </span>
                            {/* <span class="policy_terms">
                                <a href="#">Privacy policy</a>
                                <a href="#">Terms & condition</a>
                            </span> */}
                        {/* </div> */}
                    </div>
                </footer>
            </footer>
        )
    }
}
const mapStateToProps = (state) => ({
    socialLinks: state.contactDetails.socialLinks,
    contactDetails: state.contactDetails.contactDetails,
    categories: state.data.menu,
})
export default connect(mapStateToProps)(FooterFour);