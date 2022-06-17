import React, {Component} from 'react';
import {connect} from 'react-redux'
import store from '../../store';
import {getLogout,ChangePassword,deleteaddress,getaddressbyid,userLogoff} from '../../actions';
import { FiTrash2 } from "react-icons/fi"
import { Link } from 'react-router-dom';
import {FiList} from "react-icons/fi"
import {FiLogOut} from "react-icons/fi"
import {FiEdit} from "react-icons/fi"
import {FiPlusCircle} from "react-icons/fi"
import * as url from '../../constants/Endpoints'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Slider from 'react-slick';
import image from "../../assets/images/profile.png"
import { Helmet } from 'react-helmet';
import Heading from './heading';
import { SlideToggle } from 'react-slide-toggle';

class Dashboard extends Component {
    constructor (props) {
        super (props)
        this.state = {
         'show':false,
         'old_password':'',
         'new_password':'',
         'confirm_pasword':''
         }
    }
   getaddressid = (e) => {
        store.dispatch(deleteaddress(e));
}
    submitform = (e) => {
      
        var CryptoJS = require("crypto-js");
        const decryptedData = localStorage.getItem("customerData");
        var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
        var getData = bytes.toString(CryptoJS.enc.Utf8);


        if(getData !== null){
        const Data = JSON.parse(getData);
        const email = (Data != null)?Data.data.email:'';
        if(this.state.new_password === this.state.confirm_pasword){
            const obj = {
                "old_password":this.state.old_password,
                "password":this.state.confirm_pasword,
                "email":email,
            }
            store.dispatch(ChangePassword(obj));
        }else{
            alert('Password Not Match');
        }
    }
        this.setState({show:false})
    }
    render (){
        var CryptoJS = require("crypto-js");

    function handleClick(e) {
        e.preventDefault();
        store.dispatch(getLogout());
		store.dispatch(userLogoff([]));
       localStorage.clear();
    }
    function getaddressid (e) {
        store.dispatch(deleteaddress(e));
}
function sendid (e) {
    document.querySelector(".loader-wrapper").style = "display: block";
    store.dispatch(getaddressbyid(e));
}
        const{Info,Address} = this.props;
        const handleClose = () => this.setState({show:false});
        const handleShow = () =>  this.setState({show:true});
    var settings = {
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        className: "center",
        centerMode: true,
        centerPadding: "5px",
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

        return (
            <div>
                 <Helmet>
                    <title>Dashboard - Makki Herbals</title>
                </Helmet>
                {/*Dashboard section*/}
                               <section class="section-b-space">
                    <div class="container">
                    <div className='head50' />
         <Heading name="Dashboard" />
                        <div class="row">
                            <div class="col-md-3">

                            <div class="collection-filter-block" style={{ border: '1px solid rgba(0,0,0,0.1)' }}>
                                
                                <SlideToggle>
                                    {({ onToggle, setCollapsibleElement }) => (
                                        <div class="collection-collapse-block">
                                            <h3 class="collapse-block-title" style={{ letterSpacing: '3px', fontSize: '13px' }} onClick={onToggle}>Options</h3>
                                            <div class="collection-collapse-block-content" ref={setCollapsibleElement}>
                                                <div class="collection-brand-filter">
                                                                                                   
                                                        <div class="custom-control custom-checkbox collection-filter-checkbox py-2" style={{
                                                            borderBottom: '1px #dddddd5c solid',
                                                            paddingBottom: '5px',
                                                            cursor: '-webkit-grab',
                                                            cursor:'pointer'
                                                        }} >
                                                            <Link to={`${process.env.PUBLIC_URL}/myOrders`}>
                                                            
                                                            <a style={{paddingTop:5, color:"#000"}}>
                                                    <FiList size={20} /> &nbsp;
                                                    My Orders</a>
                                                    </Link>
                                                        </div>
                                                   
                                                        <div class="custom-control custom-checkbox collection-filter-checkbox py-2" style={{
                                                            borderBottom: '1px #dddddd5c solid',
                                                            paddingBottom: '5px',
                                                            cursor: '-webkit-grab',
                                                            cursor:'pointer'
                                                        }} >
                                                           
                                                            <a style={{paddingTop:5}} onClick={handleClick}>
                                                <FiLogOut size={20} /> &nbsp;
                                                Log Out</a>
                                                        </div>
                                                  
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </SlideToggle>
                            </div>
                               
                                {/* <div class="dashboard-left" style={{boxShadow:"0px 10px 20px rgba(0,0,0,0.09)", padding: "30px 10px", borderRadius:10}}>
                                    
                                    <div class="block-content" style={{border:"none"}}>
                                        <ul>
                                            <Link to={`${process.env.PUBLIC_URL}/myOrders`}>
                                                <li class="last my-2"><a style={{paddingTop:5}}>
                                                    <FiList size={20} /> &nbsp;
                                                    My Orders</a>
                                                </li>
                                                </Link>
                                         </ul>
                                        <ul style={{marginTop:15}}>
                                            <li class="last"><a style={{paddingTop:5}} onClick={handleClick}>
                                                <FiLogOut size={20} /> &nbsp;
                                                Log Out</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                            </div>
                            <div class="col-md-9">
                                <div class="dashboard-right">
                                    <div class="dashboard" style={{border:"none", borderRadius:10}}>
                                        <div class="welcome-msg my-2">
                                            {/* <p>Hello, <span class="text-capitalize">{Customer.data.name}</span></p> */}
                                            <p style={{fontWeight:"normal", textAlign:"left", fontSize:16}}>From your My Account Dashboard you have the ability to view a snapshot of
                                                your recent account activity and update your account information. Select
                                                a link below to view or edit information.</p>
                                        </div>
                                        <div class="box-account box-info">
                                            <div class="box-head my-4" style={{textAlign:"center" , paddingTop:28}}>
                                                <h2 style={{fontWeight:600, fontSize:30}}>Account Information</h2>
                                            </div>
                                            <div class="row">
                                                <div className="col-md-2"></div>
                                               
                                               
                                                <div class="col-sm-12 col-md-8">


                                                    <div class="box" style={{ boxShadow:"inset 0 -20px 10px rgba(0,0,0,0), 0 0 0 2px rgb(255,255,255),0 10px 20px rgba(0,0,0,0.1)"}}>
                                                        <div class="box-title" style={{padding:15}}>
                                                            <h3>Contact Information</h3>
                                                            <Link to={`${process.env.PUBLIC_URL}/profileDetails`}><a style={{paddingTop:20, paddingRight:15}}><FiEdit color='#13743F' size={20} /></a></Link>
                                                        </div>
                                                     
                                                        <div class="box-content row" style={{padding:8,}}>
                                                    <div className="col-md-8">

                                                            <h6 className='my-1'><i class="fa fa-user-circle-o my-2 " style={{fontSize:"20px"}} aria-hidden="true"></i><span class="p-2 text-capitalize" style={{paddingLeft:80, paddingBottom:10,whiteSpace:"pre-wrap", fontSize:"1em", wordBreak:"break-all",  }}>{(Info)?Info.data.name:''}</span></h6>
                                                            <h6 className='my-1'><i class="fa fa-envelope-o my-2" style={{fontSize:"20px"}} aria-hidden="true"></i><span class="p-2 "  style={{paddingLeft:80, paddingBottom:10,whiteSpace:"pre-wrap", fontSize:"1em", wordBreak:"break-all",  }}>{(Info)?Info.data.email:''}</span></h6>
                                                            <span className='row'>

{
    (Info.data.phone !== null && Info.data.phone !== "") ?
    <h6 className='my-1 col-md-6 text-center'><i class="fa fa-phone my-2" style={{fontSize:20}} aria-hidden="true"></i><span class="p-2 text-capitalize"  style={{paddingLeft:"20", paddingBottom:10,textAlign:"left"}}>{(Info)?Info.data.phone:''}</span></h6>
:
null
}
                                                            
                                                            <h6 className='my-1 col-md-6 text-center' style={{paddingTop:7,cursor:'pointer', fontSize:12}}><a onClick={handleShow} style={{color:"#13743F"}}>Change Password ? </a></h6>
                                                         
                                                         
                                                            </span>
                                                    </div>
                                                    <div className="col-md-4  text-center">

                                                    <img  width="120px" alt="image"  src={Info.data.profile !== null ? Info.data.profile : image} />
                                                    </div>
                                                        </div>






                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                            <h2 style={{fontWeight:600, fontSize:30, paddingTop:40}}>Shipping Address</h2>
                                            <div class="box" style={{ padding:10}}>
                                                    <div class="box-title">
                                                     <p>The following addresses will be used on the checkout page by default.</p>
                                                    </div>
                                                    <div class="row"  >
                                                   <Slider {...settings} class="slide-1 offer-slider">
                                                            {(Address.length !== 0)?
                                                            Address.map((e,i)=>{
return(
                                                          <div key={i} class="col-md-4" style={{padding:10}}>
                                                              {/* <a href="#" className='control_next'>&raquo;</a>
                                                              <a href="#" className='control_prev'>&#8249;</a> */}

                                                         <div className='row' style={{padding:20,boxShadow:"0px 0px 5px 10px rgba(0,0,0,0.01)",backgroundColor:"#0000000d",height:"400px"}}>
                                                            <div className='col-md-8 text-center'>
                                                            <h3 style={{paddingTop:0, fontWeight:"bold",   paddingBottom:10}}>Address {i + 1}</h3>
                                                           </div>
                                                            <div className='col-md-4 text-center'>
                                                            <Link  to={`${process.env.PUBLIC_URL}/address`} ><FiEdit color='#13743F' className='mx-2'  onClick={()=>sendid(e.id)} size={20} /></Link>
                                                            <FiTrash2 className='mx-2' color='grey' onClick={()=>getaddressid(e.id)} size={20} />
                                                            </div>
                                                            <div className="row" >
                                                            <div>
                                                                <div style={{display:"flex"}}>
                                                            <h6 style={{fontWeight:"bold"}}>Country:</h6>
                                                            <p style={{marginLeft:10, paddingTop:3}}>{e.country}</p>
                                                                </div>
                                                                <div style={{display:"flex"}}>
                                                            <h6 style={{fontWeight:"bold"}}>City:</h6>
                                                            <p style={{marginLeft:10, paddingTop:3}}>{e.city}</p>
                                                                </div>
                                                                <div style={{display:"flex"}}>
                                                            <h6 style={{fontWeight:"bold"}}>State:</h6>
                                                            <p style={{marginLeft:10, paddingTop:3}}>{e.state}</p>
                                                                </div>
                                                                <div style={{display:"flex"}}>
                                                            <h6 style={{fontWeight:"bold"}}>Post Code:</h6>
                                                            <p style={{marginLeft:10, paddingTop:3}}>{e.postcode}</p>
                                                                </div>
                                                            <div style={{display:"flex"}}>
                                                            <h6 style={{width:150, fontWeight:"bold"}}>Phone Number:</h6>
                                                            <p style={{marginLeft:-2, paddingTop:3}}>{e.phone}</p>
                                                                </div>
                                                            <div style={{display:"flex"}}>
                                                            <h6 style={{fontWeight:"bold"}}>Address:</h6>
                                                            <p style={{marginLeft:10, paddingTop:3}}>
                                                            {e.address1}<br />
                                                            </p>
                                                                </div>
                                                            <br />
                                                            </div>
                                                            </div>
                                                        </div>
                                                        </div>
                                                            )}):''}
<div class="col-md-4" style={{padding:10, }}>
   <div style={{padding:20, textAlign:"center",boxShadow:"0px 0px 5px 10px rgba(0,0,0,0.01)",backgroundColor:"#0000000d"}}>
   <Link style={{paddingTop:15}} to={`${process.env.PUBLIC_URL}/add_address`} >
   <div style={{marginTop:120, marginBottom:120}}>
   <FiPlusCircle size={80}  style={{color:"#13743F"}} />
 <br />
 <br />
 <span style={{color:"#13743F"}}>Add New Address</span>
</div>
       </Link>
                                                        </div>
                                                        </div>
                                                            </Slider>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal show={this.state.show}  onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered
 size="md" style={{marginLeft:"35%"}} >
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container-fluid">
            <label style={{paddingTop:10}}> Enter Old Password</label>
            <input type="password" className='form-control' onChange={e =>this.setState({old_password:e.target.value})}  />
            <label style={{paddingTop:10}}> Enter New Password</label>
            <input type="password" className='form-control'  onChange={e =>this.setState({new_password:e.target.value})}/>
            <label style={{paddingTop:10}}> Confirm New Password</label>
            <input type="password" className='form-control'  onChange={e =>this.setState({confirm_pasword:e.target.value})}/>
            
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{border:"none",borderRadius:10}} onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" style={{backgroundColor:"#13743F",border:"none",borderRadius:10}} onClick={() => this.submitform()}>
          Change Password
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    Info : state.user.user,
    Address : (state.address.userAddress)?state.address.userAddress.data:[]
});
export default connect(mapStateToProps)(Dashboard);