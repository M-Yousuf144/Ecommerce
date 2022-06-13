import React, {Component} from 'react';
import {connect} from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios';
import FormData from 'form-data';
import * as url from '../../constants/Endpoints'
import store from '../../store';
import shop from '../../api/shop';
import { dispatchAddrress, saveAddrestocart } from '../../actions';


class Guest_Address extends Component {


constructor (props) {


  super (props)
  this.state = {
    'first_name':'',
    'last_name':'',
    'email':'',
    "address":"" ,
    "city":"",
    "country":"Pakistan",
    "phone":"",
    "post_code":"",
    "state":"",
   }
  }


  SubmitAddress = () => {
    const AddressData = {
        "billing": {
          "address1": {
            "0": this.state.address
          },
          "use_for_shipping": "true",
          "first_name": this.state.first_name,
          "last_name": this.state.last_name,
          "email": this.state.email,
          "city": this.state.city,
          "state": this.state.state,
          "postcode": this.state.post_code,
          "country": this.state.country,
          "phone": this.state.phone
        },
        "shipping": {
          "address1": {
            "0": this.state.address
          }
        }
      }

      store.dispatch(saveAddrestocart(AddressData));


  }



render (){

   

  return (

    <section class="register-page section-b-space">
    <div class="container">
        <div class="row">
          <div className="col-md-2"/>
            <div class="col-lg-8" >
                <h2 className='py-3' style={{fontWeight:700}}>Save Address</h2>
                <div class="theme-card" style={{boxShadow:"0px 10px 20px rgba(0,0,0,0.08)", border:"1px solid rgba(0,0,0,0.05)"}}>
                    <div class="theme-form" >
                        <div class="form-row" >
                        <div class="col-md-6">
                          <div className='mx-3'>
                                <label htmlFor="first_name">First Name</label>
                                <input type="text" class="form-control" id="Address"
                                        placeholder="First Name" required="required" name="first_name" onChange={e =>this.setState({first_name:e.target.value})} />
                                        </div>
                            </div>
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="last_name">Last Name</label>
                                <input type="text" onChange={e =>this.setState({last_name:e.target.value})} class="form-control" id="last_name"
                                        placeholder="Last Name" required="required" name="last_name"  />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={e =>this.setState({email:e.target.value})} class="form-control" id="email"
                                        placeholder="Email" required="required" name="email"  />
                            </div>
                            </div>
                        <div class="col-md-6">
                          <div className='mx-3'>
                                <label htmlFor="Address">Address</label>
                                <input type="text" class="form-control" id="Address"
                                        placeholder="Address" required="required" name="address" onChange={e =>this.setState({address:e.target.value})} />
                                        </div>
                            </div>
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="City">City</label>
                                <input type="text" onChange={e =>this.setState({city:e.target.value})} class="form-control" id="City"
                                        placeholder="City" required="required" name="last_name"  />
                            </div>
                            </div>
                           
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="Country">Country</label>
                                <input type="text" class="form-control" value={this.state.country} id="Phone"
                                        placeholder="Enter your Country" name ="Country"   required="required" />

                            </div>
                            </div>
                           
                      
                            
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="Phone">Phone</label>
                                <input type="number" class="form-control" id="Phone"
                                        placeholder="Enter your Phone" min={0}  name ="Phone" onChange={e =>this.setState({phone:e.target.value})}  required="required" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="Postal">Postal Code</label>
                                <input type="number" class="form-control" id="Postal"
                                        placeholder="Enter your Postal Code" min={0} name ="Postal" onChange={e =>this.setState({post_code:e.target.value})}  required="required"  />
                            </div>
                            </div>
                           
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="state">State</label>
                                <input type="text" class="form-control" id="state"
                                        placeholder="Enter your State" onChange={e =>this.setState({state:e.target.value})}  name ="state" required="required"  />
                            </div>
                            </div>
                           <div className='text-center col-md-12'>
                            <button type="submit"  class="btn btn-solid" onClick={()=>this.SubmitAddress()} style={{borderRadius:5}}>Add Address</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

)
}
}

const mapStateToProps = (state, ownProps) => ({

user: state.user.user,
Info : state.data.userinfo,
Address : state.data.GETUSER_ADDRESSBYID,
});

export default connect(mapStateToProps)(Guest_Address);