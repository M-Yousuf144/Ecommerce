import React from "react";
import { connect } from "react-redux";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {

const {number , name} = props



    const config = {
      width: "320px",
      height: "420px",
      marginRight:"40px",
      overflow:"auto",
      floating: true
    };
    // const theme = {
    //   background: "white",
    //   fontFamily: "Poppins , sans-serif",
    //   headerBgColor: "#13743F",
    //   headerFontColor: "#fff",
    //   headerFontSize: "25px",
    //   botBubbleColor: "#13743F",
    //   botFontColor: "#fff",
    //   userBubbleColor: "#fff",
    //   userFontColor: "#000",
    //   color:"#fff",
    
    //  };
    const theme = {
      background: '#f5f8fb',
      fontFamily: "Poppins , sans-serif",
      headerBgColor: "#13743F",
      headerFontColor: '#fff',
      headerFontSize: '20px',
      botBubbleColor: '#13743F',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#000',
    };

    const steps = [
        {
           id: "Greet",
           message: `Hello, Welcome to ${(name.contactDetails.contactDetails.data)?name.contactDetails.contactDetails.data.facebook_username:''}`,
           trigger: "Ask Name"
           
        },
        {
           id: "Ask Name",
           message: "Please type your name?",
           trigger: "Waiting for the user name of user"
        },
        {
           id: "Waiting for the user name of user",
           user: true,
           trigger: "Asking HELP",
           validator: (value) => {
            if (/[a-z]/i.test(value))
              {
                return true;
              }
            else
              {
                return'Please Enter your correct Name!';
              }
        },
        },
        {
           id: "Asking HELP",
           message: "Hi {previousValue}, Do you need any help?",
           trigger: "Displaying options to help"
        },
        {
           id: "Displaying options to help",
           options: [
            {
              value: true,
              label: "Yes",
              trigger: "s"
            },
            { 
              value: "false",
              label: "No",
              trigger: "Done"
            } 
          ]
        },

        {
          id: "s",
          message: `This is the ${(name.contactDetails.contactDetails.data)?name.contactDetails.contactDetails.data.facebook_username:''} Official Number. Please click on the number given below for help.`,
          trigger: "Display whatsapp number"
       },

        {
          id: 'Display whatsapp number',
          component: (
 <a
                
                href={`https://api.whatsapp.com/send?phone=${number}&amp;text=How can a help you`}
                    class="whatsapp_float"
                    target="_blank"
                    rel="noopener noreferrer"
           
                >
                    
             {(name.contactDetails.contactDetails.data)?name.contactDetails.contactDetails.data.facebook_username:''} +{number}
                </a> 
          ),
          trigger: "Done",
        },
     
      
        {
            id: "Done",
            message: "Have a great day !",
            end: true
        }
];
return (
  <ThemeProvider theme={theme}>
     <ChatBot steps={steps}  headerTitle={(name.contactDetails.contactDetails.data)?name.contactDetails.contactDetails.data.facebook_username:''}

 {...config} />
  </ThemeProvider>
 );

   }


   const mapStateToProps = (state) => ({
    number: (state.contactDetails.contactDetails.data)?state.contactDetails.contactDetails.data.whatsapp_number:'',
    name: state,
   
  })
  export default connect(mapStateToProps)(CustomChatbot);
