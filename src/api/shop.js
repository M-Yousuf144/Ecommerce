
 import * as url from '../constants/Endpoints'
 import axios from 'axios'
import { toast } from 'react-toastify';
 var CryptoJS = require("crypto-js");
 const check_login = localStorage.getItem("customerData");
 const TIMEOUT = 100
 
 export default {
   getProducts: (cb, timeout) => {
     getData(url.temp_url+url.getnewProducts)
     .then( async res => {
 
         let data = [] ;
 
         await  res.data.data.map(d =>{
        
           var img = d.images[0].url
          var bas_img = d.images[0].small_image_url
 
          var pro_img = d.images[0].path ? img : bas_img
       
 
 
             var obj = {}; 
             obj.id = d.id;
             obj.name = d.name;
             obj.price = d.formated_price || d.formated_price;
             obj.discount = d.CampaignId;
             obj.features = d.Features;
             obj.pictures = pro_img;
             obj.shortDetails = d.short_description;
             obj.description = d.description;
             obj.stock = 1000;
             obj.new = true;
             obj.isfeatured = true;
             obj.category = (d.Category[0])?d.Category[0].name:'None';
             obj.country = 'UAE';
             obj.rating = 5;
             obj.api= d;
             obj.wishlist = d.is_wishlisted;
             obj.productCode = d.ProductCode;
                 data.push(obj);
         });
         cb(data)
       
     });
 
 
 },
     buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT),
     getMenu: (cb, timeout) => {
      
         getData(url.temp_url+'api/descendant-categories')
         .then(async res => {
          
           cb(res.data.data);
         });
 
     
     },
     getSliderimages: (cb, timeout) => {
       getData(url.temp_url+"api/sliders?slider_for=web")
       .then(async res => {
        
         cb(res.data);
       });
     },
 
     getHomebanner:(cb,timeout) => {
         getData(url.temp_url+url.getBanner+'banner')
         .then(async res => {
          
           cb(res.data.data);
         });
     },
 
 
  
 
     getOrigin:(cb,timeout)=>{
 
     },

     postReviews:(payload,cb,timeout)=>{
      postData(url.temp_url+url.postreviewsbyproductid+payload.product_id+"/create?token=true",payload)
      .then(res => {
             cb(res.data);

      });
     
      
  },

  postrefund:(payload,cb,timeout)=>{
    postData(url.temp_url+url.returnorder,payload)
    .then(res => {
           cb(res.data);
    });
   
    
},
      
 
     postCustsignup:(payload,cb,timeout)=>{
         postData(url.temp_url+url.custSignUp,payload)
         .then(res => {

          var encrypt_data = CryptoJS.AES.encrypt(JSON.stringify(res.data.data.email), url.encrypt_code).toString();

           localStorage.setItem('RegisterUser', encrypt_data);
           cb(res.data);
         })
         .catch(error => { 
           if(error.response.status === 422){
          toast.success(error.response.data.errors.email[0], {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            bodyClassName: 'toastStyle',
        });
            
      }else{
        toast.success('Some Error Occourd', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          bodyClassName: 'toastStyle',
      });

    }
     });
         
     },


     postCustsignIn:(payload,cb,timeout)=>{
      var encrypt_reg = CryptoJS.AES.encrypt(JSON.stringify(payload.email), url.encrypt_code).toString();

      localStorage.setItem('RegisterUser', encrypt_reg);
         postData(url.temp_url+url.custSignIn,payload)
         .then(res => {

           if(res.data.status === 200){
            var encrypt_data = CryptoJS.AES.encrypt(JSON.stringify(res.data), url.encrypt_code).toString();
             
            localStorage.setItem('customerData', encrypt_data);
           }
           cb(res.data);
         });
        
         
     },
 
  
 
    
 
 
   getDeals:(cb) =>{
     getData(url.temp_url+url.getfeaturedProducts)
     .then(async res => {
       let data = [] ;
 
       await  res.data.data.map(d =>{
         
         var img = url.temp_url+'storage/'+ d.images[0].path
         var bas_img = d.images[0].small_image_url
 
          var pro_img = d.images[0].path ? img : bas_img
         // var img = d.Image.split(",").map(e => {
    
         //   return url.base_url+e;
         // });
 
 
           var obj = {}; 
           obj.id = d.id;
           obj.name = d.name;
           obj.price = d.formated_price || d.formated_price;
           obj.discount = d.CampaignId;
           obj.features = d.Features;
           obj.pictures = pro_img;
           obj.shortDetails = d.short_description;
           obj.description = d.description;
           obj.DOTD = true;
           obj.stock = 1000;
           obj.new = true;
           obj.isfeatured = d.IsFeatured;
           // obj.category = d.Category[0].name;
           obj.country = 'UAE';
           obj.rating = 5;
           obj.api= d;
           obj.wishlist = d.is_wishlisted;
           obj.productCode = d.ProductCode;
               data.push(obj);
       });
       cb(data)
     });
   },
 
  
 
   getProductCategory:(cb) =>{
     getData(url.temp_url+url.product_category).then( async d =>{
       cb(d.data);
     });
   },
 
   getLogout:(cb) =>{
    getData(url.temp_url+url.logout).then( async d =>{
      cb(d.data);
    });
  },

   postAddAddress:(payload,cb,timeout)=>{
    postData(url.temp_url+url.addAddress,payload)
    .then(async res => {
         cb(res.data);
     
    });
   
    
},



 
   getcustomer:(cb) =>{
     getData(url.temp_url+url.getcustomer).then( async d =>{
     
       cb(d.data);
     });
   },
   getAddress:(cb) =>{
     getData(url.temp_url+url.getAddress).then( async d =>{
       cb(d.data);
     });
   },
  
   getSocialLink:(cb) =>{
     getData(url.temp_url+url.getSociallink).then( async d =>{
       cb(d.data);
     });
   },
   getWishlist:(cb) =>{
     getData(url.temp_url+url.getWishlist).then( async d =>{
       cb(d.data);
     });
   },
   getfilterProducts:(payload,cb) =>{
     var category = (payload !== undefined)?payload:'?token=true';
     getData(url.temp_url+url.getfilterproducts+category).then( async d =>{
       cb(d.data);
     });
   },

   getreviews: (product_id,cb, timeout) => {
    getData(url.temp_url+url.reviewsbyproductid+'?product_id='+product_id)
    .then( async res => {
    
      cb(res.data);

      
    });
  },
  
  //  getreivews:(cb) =>{
  //    getData(url.temp_url+url.getReviews).then( async d =>{
  //      cb(d.data);
  //    });
  //  },
   getOrders:(cb) =>{
     getData(url.temp_url+url.MyOrders).then( async d =>{
       cb(d.data);
     });
   },

   deleteaddress: (address_id,cb, timeout) => {

    removeData(url.temp_url+url.DeleteAddress+address_id+"?token=true")
      .then( async res => {
      
        cb(res.data);

        
      });
    },
    
   searchProduct:(payload,cb,timeoutcb) =>{
     let search = (payload !== '')?url.searchProduct+payload : url.getfilterproducts;
    getData(url.temp_url+search).then( async d =>{
      cb(d.data);
    });
  },
   getCartData:(cb) =>{
     getData(url.temp_url+url.getCart).then( async d =>{
       cb(d.data);
     });
   },
   forgetotpsend:(payload,cb,timeout) =>{
    postData(url.temp_url+url.forgetsendotp,payload).then( async d =>{
      cb(d.data);
    });
  },

  sendSubscriberEmail:(payload,cb,timeout) =>{
    console.log(payload)
    postData(url.temp_url+url.SubcriberEmail,payload).then( async d =>{
      cb(d.data);
    });
  },

  updateaddress:(payload,cb,timeout)=>{

    getputData(url.temp_url+url.getAddressbyid+payload)
    .then(async res => {

      cb(res.data);
     
    });
  },
  
  getaddressbyid: (address_id,cb, timeout) => {
    getData(url.temp_url+url.getAddressbyid+address_id+"?token=true")
    .then( async res => {
      cb(res.data);
    });
  },
  

  forgetverifyotp:(payload,cb,timeout) =>{
    postData(url.temp_url+url.forgetOTPerify,payload).then( async d =>{
      cb(d.data);
    });
  },
  forgetNewPassword:(payload,cb,timeout) =>{
    postData(url.temp_url+url.forgetnewpasword,payload).then( async d =>{
      cb(d.data);
    });
  },
   postContact:(payload,cb,timeout)=>{
     postData(url.temp_url+url.placeContact,payload)
     .then(async res => {
     
       cb(res.data);
     });
     
 },
 

 addItemToCart:(payload,cb,timeout)=>{
  let token = (check_login !== null)?'?token=true':'';
  postData(url.temp_url+url.addcartitem+payload.product_id+token,payload)
  .then(res => {
console.log('add cart',res)
    cb(res.data);
  });
  
},
 
 removeWishlistItem:(payload,cb,timeout)=>{
   getData(url.temp_url+url.removeWishlist+payload+'?token=true')
   .then(async res => {
     cb(res.data);
   });
 },
 
 removecartitem:(payload,cb,timeout)=>{
  getData(url.temp_url+url.deletecartitem+payload+(check_login !== null)?'?token=true':'')
  .then(async res => {
    cb(res.data);
  });
},


updatecart:(payload,cb,timeout)=>{
  
  getputData(url.temp_url+url.cartUpdate+(check_login !== null)?'?token=true':''+payload)
  .then(res => {
    cb(res.data);
  });
},

 verifyOtp:(payload,cb,timeout)=>{
   postData(url.temp_url+url.verfiyotp,payload)
   .then(res => {
     cb(res.data);
   });
 },
 
 reOrder:(payload,cb,timeout)=>{
   postData(url.temp_url+url.Reorder+payload+'?token=true')
   .then(res => {
 
     cb(res.data);
   });
 },
 updateProfile:(payload,cb,timeout)=>{
   postData(url.temp_url+url.updateProfile,payload)
   .then(res => {
     cb(res.data);
   });
 },
 
 resendOtp:(payload,cb,timeout)=>{
   postData(url.temp_url+url.sendOtp,payload)
   .then(res => {
 
     cb(res.data);
   });
 },
 getorderdetails:(payload,cb,timeout)=>{
   getData(url.temp_url+url.getOrderDetail+payload+'?token=true')
   .then(async res => {
  
     cb(res.data);
   });
 },
 CancelOrder:(payload,cb,timeout)=>{
   postData(url.temp_url+url.orderCancel+payload+'?token=true')
   .then(async res => {
 
     cb(res.data);
   });
 },
 ChangePassword:(payload,cb,timeout)=>{
  postData(url.temp_url+url.changePassword,payload)
  .then(res => {
    cb(res.data);
  });
},
saveAddrestocart:(payload,cb,timeout)=>{
  postData(url.temp_url+url.saveAddress,payload)
  .then(res => {
 

    localStorage.setItem('shipping-rates', JSON.stringify(res.data.data.rate));
    cb(res.data);
  });
},
saveShipping:(payload,cb,timeout)=>{
  postData(url.temp_url+url.saveshipping,payload)
  .then(res => {

    cb(res.data);
  });
},
saveOrder:(payload,cb,timeout)=>{
  postData(url.temp_url+url.saveorder,payload)
  .then(res => {
    localStorage.setItem('Order-numbessr', JSON.stringify(res));

    localStorage.setItem('Order-number', JSON.stringify(res.data.order));
    cb(res.data);
  });
},
applyCoupan:(payload,cb,timeout)=>{
  postData(url.temp_url+url.applyCoupan,payload)
  .then(res => {
    cb(res.data);
  });
},
removeCoupan:(payload,cb,timeout)=>{
  removeData(url.temp_url+url.removeCoupan)
  .then(res => {
    cb(res.data);
  });
},
savePayment:(payload,cb,timeout)=>{
  postData(url.temp_url+url.savepayment,payload)
  .then(res => {
    cb(res.data);
  });
},
 movetocart:(payload,cb,timeout)=>{
   getData(url.temp_url+url.movetocart+payload+'?token=true')
   .then(async res => {
   
     cb(res.data);
   });
 },
 
 

 
 getContactDetail:(cb)=>{
   getData(url.temp_url+url.getContactDetails)
     .then(async res => {
       cb(res.data);
     });
 },
 
 getSocialIcon:(cb)=>{
   getData(url.temp_url+url.getsocialicons)
     .then(async res => {
  
       cb(res.data);
     });
 },
 
 getfetchSideDetails:(cb)=>{
   getData(url.temp_url+url.sideDetails)
     .then(async res => {
       cb(res.data);
     });
 },
 getDealsBanner: (cb, timeout) => {
   getData(url.temp_url+url.getBanner+"banner")
   .then(async res => {
     cb(res.data);
   });
 },
 
 getBestSeller: (cb, timeout) => {
   getData(url.temp_url+url.getBestSeller)
   .then(async res => {
     cb(res.data);
   });
 },
 
}
 
 
 function getData(URL){
 const decryptedData = localStorage.getItem("customerData");
 if(decryptedData){
  var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
  var getData = bytes.toString(CryptoJS.enc.Utf8);
 }else{
var getData = null
 }

 if(getData !== null){
 const Data = JSON.parse(getData);
 const token = (Data != null)?Data.token:'';
 
 axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
 }
    return axios.get(URL);
 }
 










 function removeData(URL,data){
  const decryptedData = localStorage.getItem("customerData");
 if(decryptedData){
  var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
  var getData = bytes.toString(CryptoJS.enc.Utf8);
 }else{
var getData = null
 }

  if(getData !== null){
  const Data = JSON.parse(getData);
  const token = (Data != null)?Data.token:'';
  
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
  }
     return axios.delete(URL);
  }







  
 function postData(URL,data){
 const decryptedData = localStorage.getItem("customerData");
 if(decryptedData){
  var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
  var getData = bytes.toString(CryptoJS.enc.Utf8);
 }else{
var getData = null
 }
 
   if(getData !== null){
     const Data = JSON.parse(getData);
     const token = (Data != null)?Data.token:'';
     axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
   }
   let result = axios.post(URL,data);
  //  let dddd = httpGet(URL)
     return result;
  }
 


  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}




 
 function getDataParam(URL,data){
     return axios.get(URL, {
         params: data
       });
  }
 
  function getputData(URL){
    const decryptedData = localStorage.getItem("customerData");
    if(decryptedData){
     var bytes = CryptoJS.AES.decrypt(decryptedData, url.encrypt_code);
     var getData = bytes.toString(CryptoJS.enc.Utf8);
    }else{
   var getData = null
    }
   if(getData !== null){
     const Data = JSON.parse(getData);
     const token = (Data != null)?Data.token:'';
     axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
   }
   return axios.put(URL);
 }
  