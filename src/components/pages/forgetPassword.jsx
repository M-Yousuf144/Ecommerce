import React, {Component} from 'react';

import {forgetotpsend} from '../../actions'
import store from '../../store';
import { connect } from 'react-redux'
import Heading from './heading';

class ForgetPassword extends Component {

    constructor (props) {
        super (props)
        this.state = {
            "email":'',
            
         }
    }


    sendOtp = () => {
        var email = {"email":this.state.email}
        store.dispatch(forgetotpsend(email));
    
    }


    render (){


        return (
            
            <div>
  
                
                {/*Forget Password section*/}
                <section class="pwd-page section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                            <div className='head50' />
         <Heading name="Forgot Password?" />
                                <form class="theme-form">
                                    <div class="form-row">
                                        <div class="col-md-12">
                                            <input type="text" class="form-control" id="email"
                                                   placeholder="Enter Your Email" required="" onChange={(e)=>this.setState({email:e.target.value})}/>
                                        </div>
                                        <a class="btn btn-solid" onClick={() => this.sendOtp()}>Submit</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
//   getorders: state.orders.get_orders.data,

})
export default connect(
    mapStateToProps,
    {}
)(ForgetPassword)