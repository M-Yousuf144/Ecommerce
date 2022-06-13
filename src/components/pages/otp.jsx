import React, {Component } from 'react'

import { connect } from 'react-redux'
import store from '../../store';
import {verify_otp,resendOtp} from '../../actions'
import {ResendOTP} from "otp-input-react";

import * as url from '../../constants/Endpoints'
import Heading from './heading';


class Otp extends Component {
    constructor () {
        super ()

        this.state = {
           "one":0,
           "two":'',
           "three":'',
           "four":''
        }
       
    }
    SubmitOtp = (e) => {
        var otp = this.state.one + this.state.two+ this.state.three + this.state.four;
        var data = {'otp':otp,'email':e}
        store.dispatch(verify_otp(data));
       
    }
    resend = (e) => {
        var user = {"email":e}
        store.dispatch(resendOtp(user));
    }
    render (){
        var CryptoJS = require("crypto-js");

        const decryptedData = localStorage.getItem("RegisterUser");
        var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
        var getData = bytes.toString(CryptoJS.enc.Utf8);

    const Dataa = JSON.parse(getData);

    let email_length = Dataa.length;
    let first = Dataa.substring(0,3)
    let last = Dataa.substring(email_length-4, email_length);
    let final = first +'*********' + last;


    const renderButton = (buttonProps) => {
        return <button onClick={() => this.resend(Dataa)} className="btn btn-solid" {...buttonProps}>Resend</button>;
      };
      const renderTime = (remainingTime) => {
        return <span style={{marginTop:15, }}>{remainingTime} seconds remaining</span>;
      };

    return (
        <>
       

            <div class="container height-100 d-flex justify-content-center align-items-center" >
                <div class="position-relative" style={{marginTop:100}}>
                <div className='head50' />
         <Heading name="OTP Verification" />
                    <div class="card p-8 text-center">
                        <h6>Please enter the one time password <br /> to verify your account</h6>
                        <div> <span>A code has been sent to</span> <small style={{fontWeight:700,color:"red"}}>{final}</small> </div>
                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-4" > 
                            <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" onChange={e =>this.setState({one:e.target.value})}/>
                            <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" onChange={e =>this.setState({two:e.target.value})} />
                            <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" onChange={e =>this.setState({three:e.target.value})} />
                            <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" onChange={e =>this.setState({four:e.target.value})} />
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-warning px-4 validate text-white" onClick={() => this.SubmitOtp(Dataa)} style={{borderRadius:5,padding:10}}>Validate</button></div>
                    </div>
                    <div class="card-2" style={{marginTop:15}}>
                        <div class="content">
                            <div className='text-center' style={{marginTop:10}}>

                            <span className='fw-bold'>Didn't get the code?</span>
                            </div>
                            <br />
                  
                              <ResendOTP renderButton={renderButton} renderTime={renderTime} maxTime={30} />
                              {/* <a class="text-decoration-none ms-4" onClick={}>Resend</a> */}
                           
                              </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
}

const mapStateToProps = (state) => ({


})
export default connect(
    mapStateToProps,
    {}
)(Otp)