import React, {Component} from 'react';
import { connect } from 'react-redux'
import store from '../../store';
import SimpleReactValidator from 'simple-react-validator';
import {SendContact,getContactDetail} from '../../actions'
import "../layouts/coolncool/carousel.css"
import Heading from './heading';

class Contact extends Component {

    constructor (props) {
        super (props)

        this.state = {
            "FirstName": '',
            "LastName":'',
            "Phone":'',
            "Email":'',
            "Message":'',
            "UserID":''
        }
        this.validator = new SimpleReactValidator();
        store.dispatch(getContactDetail());
    }

    setStateFromInput = (event) => {
        var obj = {};
    
        obj[event.target.name] = event.target.value;
        this.setState(obj);

    }

    
    SubmitContact = () => {
        if (this.validator.allValid()) {
         
            var data = {

                "last_name":this.state.last_name,
                "description":this.state.description,
                "first_name":this.state.first_name,
                "phone_number":this.state.phone_number,
                "email":this.state.email    
            };
           
            store.dispatch(SendContact(data));
        }
        else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            this.forceUpdate();
        }
    }

    componentDidMount(){
        store.dispatch(getContactDetail());
    }

    render (){
        const {contactDetails} = this.props;


        return (
            <div>
                {/* <Breadcrumb title={'Contact Us'}/> */}
                
                
                <section class=" contact-page section-b-space">
                    <div class="container">
         <div className='head50' />
         <Heading name="Contact Us" />

                        <div class="row section-b-space">
                            <div class="col-lg-7 map">
                                <iframe
                                    // src={contactDetails[country][0].Location}
                                     src={contactDetails.data.map_location}

                                    allowFullScreen></iframe>
                            </div>
                            <div class="col-lg-5">
                                <div class="contact-right">
                                    <ul>
                                        <li>
                                            <div class="contact-icon">
                                                <i class="fa fa-solid fa-phone" aria-hidden="true"></i>
                                                    <h6>Contact Us</h6>
                                            </div>
                                            
                                            <div class="media-body">
                                                <p>{contactDetails.data.phone_number}</p>
                                              
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-icon">
                                                <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                <h6>Address</h6>
                                            </div>
                                            <div class="media-body">
                                                <p>{contactDetails.data.shop_address}</p>
                                               
                                            </div>
                                        </li>
                                        <li>
                                            <div class="contact-icon">
<i class="fa fa-solid fa-envelope"></i>

                                                    <h6>Email</h6>
                                            </div>
                                            <div class="media-body">
                                            
                                                <p>{contactDetails.data.email}</p>
                                        
                                            </div>
                                        </li>
                                  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12">
                                <form class="theme-form">
                                    <div class="form-row">
                                        <div class="col-md-6">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" class="form-control" id="first_name"
                                                   placeholder="Enter Your name" required="" name="first_name" onChange={this.setStateFromInput} />
                                                    {this.validator.message('first_name', this.state.first_name , 'required|alpha')}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="email">Last Name</label>
                                            <input type="text" class="form-control" id="last_name "
                                                   placeholder="Last name" required=""  name="last_name" onChange={this.setStateFromInput} />
                                                   {this.validator.message('last_name', this.state.last_name, 'required|alpha')}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="review">Phone number</label>
                                            <input type="text" class="form-control" id="phone_number"
                                                   placeholder="Enter your number" required="" name="phone_number"  onChange={this.setStateFromInput}/>
                                                    {this.validator.message('phone_number', this.state.phone_number, 'required|phone')}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" class="form-control" id="email" name="email"   placeholder="Email"
                                                   required="" onChange={this.setStateFromInput}/>
                                                     {this.validator.message('email', this.state.email, 'required|email')}
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="review">Write Your Message</label>
                                            <textarea class="form-control" placeholder="Write Your Message"
                                                      id="description" rows="6"   name="description"   onChange={this.setStateFromInput}></textarea>
                                             {this.validator.message('description', this.state.description, 'required')}
                                        </div>
                                        <div class="col-md-12">
                                            <a class="btn btn-solid" onClick={() => this.SubmitContact()}>Send Your Message</a>
                                        </div>
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
    contactDetails: state.contactDetails.contactDetails,
})

export default  connect(mapStateToProps)(Contact);