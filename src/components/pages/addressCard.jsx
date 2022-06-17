import React, { Component } from 'react'
import { saveAddrestocart, getaddressbyid } from '../../actions';
import { Link } from 'react-router-dom';
import * as url from '../../constants/Endpoints'
import { FiEdit } from "react-icons/fi"
import { FiPlusCircle } from "react-icons/fi"
import Slider from 'react-slick';
import { connect } from 'react-redux'
import store from '../../store';
class AddressCard extends Component {
  saveaddress = (e, a) => {
    var CryptoJS = require("crypto-js");
    const decryptedData = localStorage.getItem("customerData");
    var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
    var getData = bytes.toString(CryptoJS.enc.Utf8);
    if (getData !== null) {
      const Data = JSON.parse(getData);
      const users = (Data != null) ? Data.data : '';
      const addressData = {
        "billing": {
          "address1": {
            "0": a[0]
          },
          "use_for_shipping": "true",
          "first_name": users.first_name,
          "last_name": users.last_name,
          "email": users.email,
          "address_id": e
        },
        "shipping": {
          "address1": {
            "0": a[0]
          },
          "first_name": users.first_name,
          "last_name": users.last_name,
          "email": users.email,
          "address_id": e
        },
      }
      store.dispatch(saveAddrestocart(addressData));
    }
  }
  render() {
    function sendid(e) {
      document.querySelector(".loader-wrapper").style = "display: block";
      store.dispatch(getaddressbyid(e));
    }
    var settings = {
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
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
    const { Address } = this.props;
    return (
      <div style={{ width: "90%", marginLeft: "5%" }}>
        <span className='head50' />
        <h2 style={{ fontWeight: 600, fontSize: 30, paddingTop: '3%' }}>Shipping Address</h2>
        <div class="box-title" style={{ padding: 15 }}>
          <div class="box-title">
            <p>The following addresses will be used on the checkout page by default.</p>
          </div>
        </div>
        <div style={{ paddingTop: "10px" }} >
          {console.log(Address)}
          <Slider {...settings} class="slide-4">
            {(Address.length !== 0) ?
              Address.map((e, i) => {
                return (
                  <div key={i} class="col-md-4" style={{ padding: 10 }}>
                    <div style={{ padding: 20, boxShadow: "0px 0px 5px 10px rgba(0,0,0,0.01)",borderRadius:"20px", backgroundColor: "#0000000d" }}>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h3 style={{ paddingTop: 20, paddingBottom: 10 }}>Address {i + 1}</h3>
                        <div>
                          <Link style={{ paddingTop: 15 }} to={`${process.env.PUBLIC_URL}/address`} >
                            <FiEdit className='mx-2' color='#13743F' onClick={() => sendid(e.id)} size={25} /></Link>
                        </div>
                      </div>
                      <div className="row" >
                        <div>
                          <div style={{ display: "flex" }}>
                            <h5>Country:</h5>
                            <p style={{ marginLeft: 10, paddingTop: 4 }}>{e.country}</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <h5>City:</h5>
                            <p style={{ marginLeft: 10, paddingTop: 4 }}>{e.city}</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <h5>State:</h5>
                            <p style={{ marginLeft: 10, paddingTop: 4 }}>{e.state}</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <h5>Post Code:</h5>
                            <p style={{ marginLeft: 10, paddingTop: 4 }}>{e.postcode}</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <h5 style={{ width: 150 }}>Phone Number:</h5>
                            <p style={{ marginLeft: 2, paddingTop: 4 }}>{e.phone}</p>
                          </div>
                          <div style={{ display: "flex" }}>
                            <h5>Address:</h5>
                            <p style={{ marginLeft: 10, paddingTop: 4 }}>
                              {e.address1}<br />
                            </p>
                          </div>
                          <br />
                        </div>
                        <div className="radio">
                          <input name="address" id="radio-2" style={{ marginLeft: 10 }} onClick={(f) => this.saveaddress(e.id, e.address1)} type="radio" />
                          <label for="radio-2" class="radio-label my-2">Select</label>
                        </div>
                        {/* <label htmlFor='address'>Select</label>            */}
                        {/* <input name="address" id="address" style={{marginLeft:10}} onClick={(f) => this.saveaddress(e.id,e.address1)} type="radio"  />  */}
                      </div>
                    </div>
                  </div>
                )
              }) : ''}
            <div class="col-md-4" style={{ padding: 10, }}>
              <div style={{ padding: 20, textAlign: "center", boxShadow: "0px 0px 5px 10px rgba(0,0,0,0.01)",borderRadius:"20px", backgroundColor: "#0000000d" }}>
                <Link style={{ paddingTop: 15 }} to={`${process.env.PUBLIC_URL}/add_address`} >
                  <div style={{ marginTop: 120, marginBottom: 110, color: "#13743F" }}>
                    <FiPlusCircle size={80} />
                    <br />
                    <br />
                    <span>Add New Address</span>
                  </div>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  getorders: state.orders.get_orders.data,
  Address: state.address.userAddress.data
})
export default connect(
  mapStateToProps,
  {}
)(AddressCard)