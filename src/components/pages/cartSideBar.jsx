import React, { Component } from 'react'

import { connect } from 'react-redux'
import store from '../../store';
import {forgetverifyotp,forgetotpsend} from '../../actions'
import {ResendOTP} from "otp-input-react";


class CartSidebars extends Component {
    constructor () {
        super ()
       
    }
    
 
    render (){
      


    return (
        <>
       
           
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
)(CartSidebars)