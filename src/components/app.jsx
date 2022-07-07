import React, {Component} from 'react';
import { withTranslate } from 'react-redux-multilingual'
import { withRouter } from 'react-router-dom'; 
// Custom Components

import HeaderThree from './common/headers/header-three';


import FooterFour from "./common/footers/footer-four";
// import { getToken, onMessageListener } from '../services/firebase';

// import { toast } from 'react-toastify';




class App extends Component {
    

    constructor (props) {
        super ();
      
        // this.state = {
        //     isTokenFound:false,
        //     notification:{title: '', body: ''},
        //     show:false
        //    };
    }
    componentDidMount() {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color18.css` );
    }

    render() {

        return (
            
            <div>
      
                <HeaderThree logoName={'logo/14.png'} history={this.props.history}/>
                {this.props.children}
            
                <FooterFour logoName={'logo/14.png'}/>

     

            </div>
        );
    }
}

export default withRouter( withTranslate(App));
