
//base URL
export const base_url = 'https://portal.coolandcool.pk/'
// export const temp_url = "http://ecommerce.alisonstech.com/public/"
// export const temp_url = "http://shop.irishandbags.com/public/"
export const temp_url = "https://shop.makkiherbals.com/Admin/public/"
export const encrypt_code = 'alisonstech'
const check_login = localStorage.getItem("customerData");
//  'http://ecommerce.alisonstech.com/public/'
export const site_url = "http://localhost:3000/"
export const categories = 'api/products?category_id='
export const getBanner = 'api/sliders?slider_for='

export const custSignUp = "api/customer/register"
export const custSignIn = "api/customer/web_login?token=true"

export const getSociallink = 'api/social-icons'
export const placeContact  = "api/contact-form"

export const getContactDetails = 'api/contact-details';
export const sideDetails = 'api/promotion-products';
export const getBestSeller = 'api/new/allproducts?featured=1';

export const getsocialicons = '/api/social-icons';
export const getcustomer = 'api/customer/get?token=true';
export const getAddress = 'api/addresses?token=true';
export const getReviews = 'api/reviews?token=true';
export const getWishlist = 'api/wishlist?token=true';
export const removeWishlist = 'api/wishlist/add/';
export const movetocart = 'api/move-to-cart/';
export const MyOrders = 'api/orders?token=true';
export const Reorder = 'api/checkout/re-order/';
export const orderCancel = 'api/checkout/order-cancel/';
export const sendOtp = 'api/customer/request_otp';
export const verfiyotp = 'api/customer/verify_otp';
export const getOrderDetail = 'api/orders/';
export const updateProfile = 'api/customer/profile?token=true';
export const getCart = `api/checkout/cart${(check_login !== null)?'?token=true':''}`;
export const cartUpdate = 'api/checkout/cart/update';
export const deletecartitem = 'api/checkout/cart/remove-item/';
export const addcartitem = 'api/checkout/cart/add/';
export const getfilterproducts = 'api/products';
export const product_category = 'api/categories';
export const reviewsbyproductid = "api/reviews";
export const postreviewsbyproductid = "api/reviews/";
export const changePassword = "api/customer/changepassword?token=true";
export const saveAddress = `api/checkout/save-address${(check_login !== null)?'?token=true':''}`;
export const saveshipping = `api/checkout/save-shipping${(check_login !== null)?'?token=true':''}`;
export const savepayment = `api/checkout/save-payment${(check_login !== null)?'?token=true':''}`;
export const saveorder = `api/checkout/save-order${(check_login !== null)?'?token=true':''}`;
export const applyCoupan = `api/checkout/cart/coupon${(check_login !== null)?'?token=true':''}`;
export const removeCoupan = `api/checkout/cart/coupon${(check_login !== null)?'?token=true':''}`;
export const forgetsendotp = "api/customer/forget_get_email";
export const forgetOTPerify = "api/customer/forget_verify_otp";
export const forgetnewpasword = "api/customer/forget_password_update";
export const searchProduct = "api/search/";
export const addAddress = 'api/addresses/create?token=true';
export const DeleteAddress = 'api/addresses/';
export const getAddressbyid = 'api/addresses/';
export const logout = 'api/customer/logout?token=true';
export const getfeaturedProducts = 'api/products?featured=1&token=true';
export const getnewProducts = 'api/new/allproducts?token=true';
export const returnorder = 'api/refund-request';
export const SubcriberEmail = 'api/subscriber-email';