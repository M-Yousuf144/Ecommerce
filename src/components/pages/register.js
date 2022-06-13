import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {custSignUp} from '../../actions'
import Heading from './heading';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function registerForm() {

  const [formData, setFormData] = useReducer(formReducer, {});
  // const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    // setSubmitting(true);
    setFormData({
      
      name: "Country",
      value: localStorage.getItem('country'),
    });

if(formData.password.length >=6){
if(formData.password === formData.password_confirmation){
  custSignUp(formData);
}else{
  toast.error('Confirm Password Not Match')
}
}else{
  toast.error('Password should be greater than 6 characters')

}
    // setTimeout(() => {
      // setSubmitting(false);
    // }, 3000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div>

        <section class="register-page section-b-space">
            <div class="container">

            <div className='head50' />
         <Heading name="Register" />
         <p style={{textAlign:"center"}}>Already have an account?

                <Link to={`${process.env.PUBLIC_URL}/login`}> Login Now!</Link>
              </p>
                <div class="row">
                    <div class="col-lg-2" />
                    <div class="col-lg-8">
                       
                                               <div class="theme-card">
                            <form class="theme-form" onSubmit={handleSubmit}>
                                <div class="form-row">
                                <div class="col-md-6">
                                        <label htmlFor="email">First Name</label>
                                        <input type="text" class="form-control" id="fname"
                                                placeholder="First Name" required="required" name="first_name" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="email">Last Name</label>
                                        <input type="text" class="form-control" id="fname"
                                                placeholder="Last Name" required="required" name="last_name" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="email">email</label>
                                        <input type="text" class="form-control" id="email"
                                                placeholder="Email" required="required" name="email" onChange={handleChange} />
                                    </div>
                              
                                    
                                    <div class="col-md-6">
                                        <label htmlFor="review">Password</label>
                                        <input type="password" class="form-control" id="review"
                                                placeholder="Enter your password" name ="password" required="required" onChange={handleChange} />
                                    </div>
                                    <div class="col-md-6">
                                        <label htmlFor="review">Confirm Password</label>
                                        <input type="password" class="form-control" id="review"
                                                placeholder="Confirm Password" name="password_confirmation" required="required" onChange={handleChange} />
                                    </div>
                                   
                                </div>
          <div class="text-center">
                                    <button type="submit" disabled={(formData.first_name && formData.last_name  && formData.email  && formData.password  && formData.password_confirmation ) ? false : true} class="btn btn-solid text-center" style={{borderRadius:5}}>create Account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default registerForm;
