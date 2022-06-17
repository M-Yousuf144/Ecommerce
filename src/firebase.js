
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

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
        console.log('current token for client: ', currentToken);


        getMessaging().subscribeToTopic(currentToken, 'topic')
        .then((response) => {
          // See the MessagingTopicManagementResponse reference documentation
          // for the contents of response.
          console.log('Successfully subscribed to topic:', response);
        })  .catch((error) => {
          console.log('Error subscribing to topic:', error);
        });
        
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


