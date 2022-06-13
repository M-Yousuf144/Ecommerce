import React, { Component} from 'react';
import {updateProfile} from '../../actions'
import "./profileDetails.scss";
import store from '../../store';
import {connect} from 'react-redux'
import image from "../../assets/images/profile.png"
import Heading from './heading';

class ProfileDetails extends Component {

    constructor (props) {
        const{Info} = props;
        super (props)
        this.state = {
            "first_name":Info.first_name,
            "last_name":Info.last_name,
            "email":Info.email,
            "Profile":'',
            "date_of_birth":Info.date_of_birth,
            "phone":Info.phone,
            "gender":Info.gender,
            "img":Info.profile !== null ? Info.profile : image,
            "profile":null
         }
    }
    UpdateProfile = () => {
        const data = new FormData() 
        data.append('first_name',this.state.first_name)
        data.append('last_name',this.state.last_name)
        data.append('email',this.state.email)
        data.append('profile',this.state.profile)
        data.append('date_of_birth',this.state.date_of_birth)
        data.append('phone',this.state.phone)
        data.append('gender',this.state.gender)
     



   
    store.dispatch(updateProfile(data));
       
    }
    render (){
  
    
        


  return(
    <div>
        
        <section class="register-page section-b-space">
         
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <div className='head50' />
         <Heading name="Profile Details" />
                        <div class="theme-card">
                            <div class="theme-form" >
                                <div class="form-row">
                                <div class="col-md-6">
                                        <label htmlFor="email">First Name</label>
                                        <input type="text" class="form-control" id="fname"
                                                placeholder="First Name" required="required" value={this.state.first_name} name="first_name" onChange={e =>this.setState({first_name:e.target.value})}  />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="email">Last Name</label>
                                        <input type="text" class="form-control" id="fname"
                                                placeholder="Last Name" required="required" value={this.state.last_name} name="last_name" onChange={e =>this.setState({last_name:e.target.value})}  />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="email">email</label>
                                        <input type="text" class="form-control" id="email"
                                                placeholder="Email" required="required" value={this.state.email} disabled="true" name="email"  />
                                   
                                    </div>
                              
                                    
                                    <div class="col-md-6">
                                        <label htmlFor="review">Date Of Birth</label>
                                        <input type="date" class="form-control" id="review"
                                                placeholder="Enter Date Of Birth" name="dob" value={this.state.date_of_birth} onChange={e =>this.setState({date_of_birth:e.target.value})} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">Phone</label>
                                        <input type="number" class="form-control" id="review"
                                                placeholder="Enter Phone Number" name="phone" value={this.state.phone} onChange={e =>this.setState({phone:e.target.value})} />
                                    </div>
                                    <div class="col-md-5">
                                        <label htmlFor="review">Profile</label>
                                        <input type="file" class="form-control" 
                                                 name="profile" accept="image/*" onChange={e =>this.setState({profile:e.target.files[0]})} />
                                    </div>
                                   
                                   <div class="col-md-1">
{
    this.state.img !== null || this.state.profile !== null ?

    <img alt='imga' src={ this.state.profile !== null ? URL.createObjectURL(this.state.profile) : this.state.img } style={{marginTop:20, marginLeft:40}} width="50px" height="50px" />
:
null}
                                  
                                   </div>
                                    <div class="col-md-6">
                                        <label htmlFor="gender">Gender</label>
                                        <br />  
                                        

  <div class="radio" id="gender" style={{marginTop:"10px", marginBottom:50}}>
    <input id="radio-2" name="radio"  type="radio" value="male" checked={this.state.gender === 'male'} onChange={e =>this.setState({gender:'male'})} />
    <label  for="radio-2" class="radio-label" >Male</label>
    
        <input id="radio-3" name="radio" type="radio" value="female" checked={this.state.gender === 'female'} onChange={e =>this.setState({gender:'female'})}/>
    <label  for="radio-3" class="radio-label" >Female</label>
    
        <input id="radio-4" name="radio" type="radio" value="other" checked={this.state.gender === 'other'} onChange={e =>this.setState({gender:'other'})} />
    <label  for="radio-4" class="radio-label">Prefer Not to say</label>
  </div>

                                    </div>

                                    
                                   
                                </div>
                                    <button type="submit" class="btn btn-solid" onClick={() => this.UpdateProfile()} style={{borderRadius:5}}>Update Profile Details</button>
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
const mapStateToProps = (state, ownProps) => ({
    
    Info :(state.user.user.data)?state.user.user.data:[],

});

export default connect(mapStateToProps)(ProfileDetails);



