import React, { Component } from 'react'

import { connect } from 'react-redux'
import store from '../../store';
import {forgetverifyotp,forgetotpsend} from '../../actions'
import {ResendOTP} from "otp-input-react";


class ForgetOtp extends Component {
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
        store.dispatch(forgetverifyotp(data));
       
    }
    resend = (e) => {
        var user = {"email":e}
        store.dispatch(forgetotpsend(user));
    }
    render (){
        const {getorders} = this.props;
    const Dataa = getorders.email;

    let email_length = Dataa.length;
    let first = Dataa.substring(0,3)
    let last = Dataa.substring(email_length-4, email_length);
    let final = first +'*********' + last;


    return (
        <>
       

            <div class="container height-100 d-flex justify-content-center align-items-center" >
                <div class="position-relative" style={{marginTop:150}}>
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
                            <button class="btn btn-warning px-4 validate" onClick={() => this.SubmitOtp(Dataa)} style={{borderRadius:5,padding:10}}>Validate</button></div>
                    </div>
                    <div class="card-2" style={{marginTop:15}}>
                        <div class="content d-flex justify-content-center align-items-center">
                            <span>Didn't get the code</span>
                  
                              <ResendOTP onResendClick={() => this.resend(Dataa)} maxTime={10} />
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
    getorders: state.data.forget_email,

})
export default connect(
    mapStateToProps,
    {}
)(ForgetOtp)