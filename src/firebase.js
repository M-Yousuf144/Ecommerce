
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { sendfcp_token } from './actions';
import store from './store';

var firebaseConfig = {
  // apiKey: "AIzaSyAJwnwdNFm2H4dTLddq4nB3Xuwcw9gBnZ8",
  // authDomain: "woo-vista.firebaseapp.com",
  // projectId: "woo-vista",
  // storageBucket: "woo-vista.appspot.com",
  // messagingSenderId: "391151148487",
  // appId: "1:391151148487:ios:dfe6148b467caa0d4f8de2",
  // databaseURL: 'https://woo-vista.firebaseapp.com',

  apiKey: "AIzaSyBuuMKzba2S_Qopk3prQPUtOyV1VyEv9uQ",
  authDomain: "woo-vista.firebaseapp.com",
  projectId: "woo-vista",
  storageBucket: "woo-vista.appspot.com",
  messagingSenderId: "391151148487",
  appId: "1:391151148487:web:70442667eaaf61a24f8de2",
  measurementId: "G-7QDGBR1QCF"
  
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BNOA7wow99TGMGygmDiEx8vTTNoPVjiHJEowKJGHQyclFiKmUeBfsgMyE_LnGSpF9DAR3xvVcwCjpCGhN9f90YU` })
    .then((currentToken) => {
      if (currentToken) {
   
        store.dispatch(sendfcp_token({'token':currentToken}));


        getMessaging().subscribeToTopic('fV1Q7-XYbltYEL04N6C2-R:APA91bF1B2NSlh1tbWPZghftQPo8B5ibv6ZTL5Pgf6-rQow_rQWKlTACKbHh14_dTjjZrE4q3EJAK_SkEivzpy1S01cUd8XC1GmbCL9ZHXcHzSTD8o2v96FA1artj6_gJ1RYyDkVUdLe', '/topics/makki')
        .then((response) => {
     
          console.log('Successfully subscribed to topic:', response);
        })
      
        
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};



export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });


