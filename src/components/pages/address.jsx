import React, {Component} from 'react';
import {connect} from 'react-redux'
import store from '../../store';
import {getaddressbyid,updateaddress} from '../../actions'


class Address extends Component {


constructor (props) {

  

  const {user,Info,Address} = props;

 
  super (props)
  this.state = {
      'id':Address.id,
      "address":Address.address1[0] ,
      "city":Address.city,
      "country":Address.country,
      "phone":Address.phone,
      "post_code":Address.postcode,
      "state":Address.state,
   }
}
UpdateProfile = () => {

    var upatecartitem = `${this.state.id}?token=true&address1[0]=${this.state.address}&city=${this.state.city}&country=${this.state.country}&phone=${this.state.phone}&postcode=${this.state.post_code}&state=${this.state.state}`;
store.dispatch(updateaddress(upatecartitem));
     
  }



render (){

 
  return (

    <section class="register-page section-b-space">
    <div class="container">
        <div class="row">
          <div className="col-md-2"/>
            <div class="col-lg-8" >
                <h2 className='py-3' style={{fontWeight:700}}>Edit Address</h2>
                <div class="theme-card" style={{boxShadow:"0px 10px 20px rgba(0,0,0,0.08)", border:"1px solid rgba(0,0,0,0.05)"}}>
                    <form class="theme-form" onSubmit={(e)=>e.preventDefault()} >
                        <div class="form-row" >
                        <div class="col-md-6">
                          <div className='mx-3'>
                                <label htmlFor="Address">Address</label>
                                <input type="text" class="form-control" id="Address"
                                        placeholder="Address" required="required"
                                       value={this.state.address} onChange={e =>this.setState({address:e.target.value})} 
                                        name="address"  />
                                        </div>
                            </div>
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="City">City</label>
                                <input type="text" class="form-control" id="City" 
                                        placeholder="City" required="required" name="city"
                                        value={this.state.city} onChange={e =>this.setState({city:e.target.value})}
                                        />
                            </div>
                            </div>
                           
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="Country">Country</label>
                                <input type="text" class="form-control" id="Phone"
                                value={this.state.country} name='phone'   onChange={e =>this.setState({country:e.target.value})}
                                        placeholder="Enter your Country" required="required" />
                              

                                {/* <input type="text" class="form-control" id="Country"
                                        placeholder="Country" required="required" name="last_name"  /> */}
                            </div>
                            </div>
                           
                      
                            
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="Phone">Phone</label>
                                <input type="text" class="form-control" id="Phone"
                                value={this.state.phone} name='phone' onChange={e =>this.setState({phone:e.target.value})}
                                        placeholder="Enter your Phone" required="required" />
                            </div>
                            </div>
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="Postal">Postal Code</label>
                                <input type="text" class="form-control" id="Postal"
                                value={this.state.post_code} name='post_code' onChange={e =>this.setState({post_code:e.target.value})}
                                        placeholder="Enter your Postal Code"  required="required"  />
                            </div>
                            </div>
                           
                            <div class="col-md-6">
                            <div className='mx-3'>
                                <label htmlFor="state">State</label>
                                <input type="text" class="form-control" id="state"
                                value={this.state.state} onChange={e =>this.setState({state:e.target.value})}
                                        placeholder="Enter your State" name ="state" required="required"  />
                            </div>
                            </div>
                           <div className='text-center col-md-12'>
                            <button type="submit" class="btn btn-solid" onClick={() => this.UpdateProfile() } style={{borderRadius:5}}>Edit Address</button>
                           </div>
                      
                        </div>
                    </form>
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
Info : state.user.user,
Address : state.address.getAddressbyid.data,
});

export default connect(mapStateToProps)(Address);