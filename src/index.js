import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations'
import { fetchMenu,
         getAllProducts ,
         fetchImages,
        
         
        fetchHomeBanner,
      
        fetchOrigin,
        getDeals,
      
        getSocialLink,
        getWishlist,
        // getreivews,
        getDealsBanner,
        getOrders,
        getCartData,
        getContactDetail,
        getProductCategory,
        getcustomer,
        updateaddress,
        getAddress,
        getfilterProducts,
        fetchBestSeller,  
        fetchReviews,
        dispatchgetOrders} from './actions'
import Landing from './components/landing'


// Layouts


import Coolncool from './components/layouts/coolncool/main';




// Product Pages
import LeftSideBar from "./components/products/left-sidebar";

import DealsBar from "./components/products/deals";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'


// Extra Pages
import aboutUs from './components/pages/about-us'
import priacyPolicy from './components/pages/privacyPolicy'
import termsConditions from './components/pages/termsConditions'
import retrunRefund from './components/pages/retrunRefund'
import webTerms from './components/pages/webTerms'
import deliveryPolicy from './components/pages/deliveryPolicy'


import Login from './components/pages/login'
import Register from './components/pages/register'

import Contact from './components/pages/contact'
import Dashboard from './components/pages/dashboard'
import Faq from './components/pages/faq'

// Blog Pages




// Theme Element


// Product Elements


// Portfolio Features

import registerForm from './components/pages/register';
import Address from './components/pages/address';
import Add_Address from './components/pages/add-address';
import ShippingOptions from './components/pages/shipping';
import BillingOptions from './components/pages/billing';
import ForgetOtp from './components/pages/forgetOtp';
import NewForgetPassword from './components/pages/forgetNewPassword';
import MyOrders from './components/pages/myOrders';
import Otp from './components/pages/otp';
import ViewDetails from './components/pages/viewDetails';
import ProfileDetails from './components/pages/profileDetails';
import shopPage from './components/pages/shopPage';
import AddressCard from './components/pages/addressCard';
import AddressEdit from './components/pages/addressEdit';
import ForgetPassword from './components/pages/forgetPassword';
import PrivateRoute from './containers/PrivateRoute';
import OrderNumber from './components/pages/orderNumber';
import CustomizedTooltips from './components/pages/cart';
import CartSidebars from './components/pages/Sidebarcart';
import HorizontalNonLinearStepper from './components/pages/bredcram';
import Guest_Address from './components/pages/guest-address';


// import CheckoutNew from './components/pages/checkoutNew';




class Root extends React.Component {  
    constructor(props) {
        super(props);

        
    }
    

    componentDidMount() {

        store.dispatch(fetchOrigin());
    }
    componentWillMount(){
       
    }
    render() {
        store.dispatch(fetchBestSeller());
       
        store.dispatch(fetchMenu());
        store.dispatch(fetchImages());
        store.dispatch(fetchHomeBanner());

        store.dispatch(getAllProducts());
        store.dispatch(getDeals());
     
    
        store.dispatch(getSocialLink());
        store.dispatch(getDealsBanner());
        store.dispatch(getContactDetail());
        store.dispatch(getcustomer());
        store.dispatch(getAddress());
        
        store.dispatch(getWishlist());
        store.dispatch(getOrders());
        store.dispatch(getCartData());
        store.dispatch(getfilterProducts());
        store.dispatch(getProductCategory());
        store.dispatch(updateaddress());
        store.dispatch(fetchReviews());
        
        
        

        


        return(
            
        	<Provider store={store}>
                <IntlProvider translations={translations} locale='en'>
				<BrowserRouter basename={'/'} >
					<ScrollContext>
						<Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Coolncool} /> 
                        
                            <Layout>

                                {/*Routes For Layouts*/}
                               

								{/*Routes For Features (Product Collection) */}

                                

								{/*Routes For Single Product*/}
								<Route path={`${process.env.PUBLIC_URL}/product/product/:id`} component={LeftSideBar}/>
                                <Route path={`${process.env.PUBLIC_URL}/deals/product/:id`} component={DealsBar}/>
								
								<Route path={`${process.env.PUBLIC_URL}/test`} component={HorizontalNonLinearStepper}/>

								<Route path={`${process.env.PUBLIC_URL}/cart-sidebar`} component={CartSidebars}/>
								{/*Routes For custom Features*/}
								<Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                <Route path={`${process.env.PUBLIC_URL}/otp`} component={Otp}/>
								<PrivateRoute path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
								<Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
								<Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
								<PrivateRoute path={`${process.env.PUBLIC_URL}/myOrders`} component={MyOrders}/>
							
                                <PrivateRoute path={`${process.env.PUBLIC_URL}/viewDetails`} component={ViewDetails}/>
                                <Route path={`${process.env.PUBLIC_URL}/shopPage`} component={shopPage}/>
                                <Route path={`${process.env.PUBLIC_URL}/NewForgetPassword`} component={NewForgetPassword}/>
                                <Route path={`${process.env.PUBLIC_URL}/cartitem`} component={CustomizedTooltips}/>


                                <Route path={`${process.env.PUBLIC_URL}/ForgetOtp`} component={ForgetOtp}/>

								{/*Routes For Extra Pages*/}
                                <Route path={`${process.env.PUBLIC_URL}/about-us`} component={aboutUs}/>
                                <Route path={`${process.env.PUBLIC_URL}/privacy-policy`} component={priacyPolicy}/>
                                <Route path={`${process.env.PUBLIC_URL}/terms-conditions`} component={termsConditions}/>
                                <Route path={`${process.env.PUBLIC_URL}/retrun-refund`} component={retrunRefund}/>
                                <Route path={`${process.env.PUBLIC_URL}/web-terms`} component={webTerms}/>
                                <Route path={`${process.env.PUBLIC_URL}/guest_address`}component={Guest_Address}/>
                                <Route path={`${process.env.PUBLIC_URL}/orderNumber`} component={OrderNumber}/>
                                
                                <Route path={`${process.env.PUBLIC_URL}/delivery-terms`} component={deliveryPolicy}/>

                                <Route path={`${process.env.PUBLIC_URL}/faq`} component={Faq}/>
                                <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                                <Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
                               
                                <Route path={`${process.env.PUBLIC_URL}/register`} component={registerForm}/>
                                <PrivateRoute  path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard}/>
                                <PrivateRoute path={`${process.env.PUBLIC_URL}/address`} component={Address}/>
                                <PrivateRoute path={`${process.env.PUBLIC_URL}/add_address`}component={Add_Address}/>
                                <Route path={`${process.env.PUBLIC_URL}/ShippingOptions`} component={ShippingOptions}/>
                                <Route path={`${process.env.PUBLIC_URL}/BillingOptions`} component={BillingOptions}/>
                                <PrivateRoute path={`${process.env.PUBLIC_URL}/addressEdit`} component={AddressEdit}/>
                                <PrivateRoute path={`${process.env.PUBLIC_URL}/addressCard`} component={AddressCard}/>
                                {/* <PrivateRoute path={`${process.env.PUBLIC_URL}/checkoutNew`} component={CheckoutNew}/> */}

                                <PrivateRoute path={`${process.env.PUBLIC_URL}/profileDetails`} component={ProfileDetails}/>
                                <Route path={`${process.env.PUBLIC_URL}/forgetPassword`} component={ForgetPassword}/>


								{/*Features*/}
                             
								{/*Theme Elements*/}
                         

								{/*Product Elements*/}
                           

								{/*Portfolios*/}
                             

								{/*Blog Pages*/}
                                
                               
                                

                                {/* <Route exact path="*" component={PageNotFound} /> */}


                                {/* <Route exact path={"**"} component={PageNF}/> */}



                            </Layout>
                         </Switch>
					  </ScrollContext>
					</BrowserRouter>
                </IntlProvider>
			</Provider>
    	);
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));


