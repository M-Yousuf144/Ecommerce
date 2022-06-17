import React, { useReducer, useState } from 'react';
import store from '../../store';
import { custSignIn, socialLogin } from '../../actions'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Heading from './heading';

// const handleSocialLogin = (user) => {
//   var data = {
//     Email: user._profile.email,
//     Token: user._token.accessToken,
//     Channel: user._provider
//   }
//   store.dispatch(socialLogin(data));
// }
// const handleSocialLoginFailure = (err) => {
//   console.error(err)
// }
const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
  }
}
function signForm(props) {
  const { user, history } = props;
  // useEffect(() => {
  //   if (Object.keys(user).length !== 0) {
  //     props.history.goBack();
  //   }
  // }, [props.user]);

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async event => {
    event.preventDefault();
    store.dispatch(custSignIn(formData));
  }
  const handleChange = event => {
   

    setFormData({
     
      name: "Token",
      value: '',
    });
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return (
    <div>
      {/* <Breadcrumb title={'Login'}/> */}
      {/*Login section*/}





      <section className="login-page section-b-space">
        <center>
          <div className="container">
          <div className='head50' />
         <Heading name="Login" />
            <div className="col-md-8 col-lg-5">
              
              <p>New Here?

                <Link to={`${process.env.PUBLIC_URL}/register`}> Create an Account</Link>
              </p>
              <div className="theme-card">
                <form className="theme-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email" style={{marginRight:"90%"}}>Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Email" name="email"
                      required="required" onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="review"  style={{marginRight:"90%"}}>Password</label>

                    <input type="password" className="form-control" id="review"
                      placeholder="Enter your password" required="required" name="password" onChange={handleChange} />
                  </div>
                  <div className="form-group d-flex justify-content-center ">
                    <button disabled={(formData.email && formData.password) ? false : true} type="submit" className="btn btn-solid px-5" style={{ borderRadius: 5 }}>Login</button>
                  </div>
                </form>
               <Link to={`${process.env.PUBLIC_URL}/forgetPassword`}> <p class="social-text" style={{fontSize:15, fontWeight:600, color:"#13743F"}}>Forgot Password?</p></Link>
                {/* <div className="row p-md-6">
                  <p class="social-text" style={{fontSize:15, fontWeight:600}}>Or Sign in with social platforms</p>
                  <SocialButton
                    provider='facebook'
                    appId='548484736126739'//'199279227837108'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    style={{ borderRadius: 5 }}
                  >
                    Facebook
                  </SocialButton>
                  <SocialButton
                    provider='google'
                    appId='469935774698-2omrtppqmp59pd1jfk54i0gmuiuujolg.apps.googleusercontent.com'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    key={'google'}
                    style={{ borderRadius: 5 }}
                  >
                    Google
                  </SocialButton>
                </div> */}
              </div>
            </div>

          </div>

        </center>
      </section>


    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user.user,
  country: state.filters.country
})
export default connect(mapStateToProps)(signForm);









