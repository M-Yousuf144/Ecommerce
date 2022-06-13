import React, { Component } from 'react';
import { connect } from 'react-redux';
import {forgetNewPassword} from '../../actions'
import 'react-toastify/dist/ReactToastify.css';
import store from '../../store';
import { toast } from 'react-toastify';


class NewForgetPassword extends Component {

    constructor (props) {
        super (props)
        this.state = {
            "newPassword":'',
            "confirmPassword":'',
         }
    }
    submitPassword = (e) => {
    if(this.state.confirmPassword === this.state.newPassword){
        var password =  {"email":e,"password":this.state.confirmPassword}
        store.dispatch(forgetNewPassword(password));
        
    }else{
        toast.error("Password Not Match");

    }
        
    }
  render(){
    const {getorders} = this.props;
    const Dataa = getorders.email;
  return(
    <div>
        {/* / <Breadcrumb title={'create account'}/> */}

        {/*Regsiter section*/}
        <section class="register-page section-b-space">
            <div class="container">
                <div class="row">
                  <div className="col-md-4"/>
                    <div class="col-lg-4" >
                        <h2 className='py-3' style={{fontWeight:700}}>New Password</h2>
                        <div class="theme-card" style={{boxShadow:"rgb(0 0 0 / 19%) 0px 10px 20px", border:"1px solid rgba(0,0,0,0.05)"}}>
                            <div class="theme-form" >
                                <div class="form-row" >
                                <div class="col-md-12">
                                  <div className='mx-3'>

                                        <label htmlFor="New Password">New Password</label>
                                        <input type="password" class="form-control" id="New Password"
                                                placeholder="New Password" required="required" name="New Password"  onChange={(e)=>this.setState({newPassword:e.target.value})}/>
                                                </div>
                                    </div>
                                    <div class="col-md-12">
                                    <div className='mx-3'>
                                        <label htmlFor="Confirm Password">Confirm Password</label>
                                        <input type="password" class="form-control" id="Confirm Password"  onChange={(e)=>this.setState({confirmPassword:e.target.value})}
                                                placeholder="Confirm Password" required="required" name="Confirm Password" />
                                    </div>
                                    </div>
                                   
                                   
                                   
                              
                                   <div className='text-center col-md-12'>

                                    <button type="submit" class="btn btn-solid" onClick={(e) => this.submitPassword(Dataa)} style={{borderRadius:5}}>Change Password</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}
}
const mapStateToProps = (state) => ({
    getorders: state.data.forget_email,
    
    })
    export default connect(
        mapStateToProps,
        {}
    )(NewForgetPassword)
