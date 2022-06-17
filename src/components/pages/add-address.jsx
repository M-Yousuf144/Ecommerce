import React, {Component} from 'react';
import {connect} from 'react-redux'
import { toast } from 'react-toastify';
import axios from 'axios';
import FormData from 'form-data';
import * as url from '../../constants/Endpoints'
import { dispatchAddrress } from '../../actions';
import shop from '../../api/shop';
import store from '../../store';


class Add_Address extends Component {


constructor (props) {


  super (props)
  this.state = {

    "address1[0]":"" ,
    "city":"",
    "country":"Pakistan",
     "phone":"",
    "post_code":"",
    "state":"",
    "items": "",
   }
  }
  


  SubmitReviews = (e)=>{
    var CryptoJS = require("crypto-js");

   var getData = localStorage.getItem('customerData');
    var bytes = CryptoJS.AES.decrypt(getData, url.encrypt_code);
    var items =JSON.parse( bytes.toString(CryptoJS.enc.Utf8));
    if (items) {
     this.setState({'items' : items});
    }



      var data = new FormData();
data.append('address1[0]', this.state.address);
data.append('city',  this.state.city);
data.append('country',  this.state.country);
data.append('phone', this.state.phone);
data.append('postcode', this.state.post_code);
data.append('state', this.state.state);
data.append('country_name', this.state.country);


var config = {
  method: 'post',
  url: `${url.temp_url}api/addresses/create?token=true`,
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer ' + items.token, 
  },
  data : data
};

axios(config)
.then(function (response) {

  toast.success("Your Address has been added successfully!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    bodyClassName: 'toastStyle',
});

shop.getAddress(e =>{
  store.dispatch(dispatchAddrress(e));
});

setTimeout(()=>{
window.location.reload(true)
    window.history.back()
    
},2000)

})
.catch(function (error) {
  toast.error("Your Address has not been added successfully!");
});




  }



render (){


  return (

    <section class="register-page section-b-space">
    <div class="container">
        <div class="row">
          <div className="col-md-2"/>
            <div class="col-lg-8" >
                <h2 className='py-3' style={{fontWeight:700}}>Add Address</h2>
                <div class="theme-card" style={{boxShadow:"0px 10px 20px rgba(0,0,0,0.08)", border:"1px solid rgba(0,0,0,0.05)"}}>
                    <div class="theme-form" >
                        <div class="form-row" >
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
                            <button type="submit" value={this.SubmitReviews} class="btn btn-solid" onClick={(e)=>this.SubmitReviews(e)} style={{borderRadius:5}}>Add Address</button>
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
Info : state.user.user,
Address : state.data.GETUSER_ADDRESSBYID,
});

export default connect(mapStateToProps)(Add_Address);