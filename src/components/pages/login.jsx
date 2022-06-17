import React, {Component} from 'react';
// import {Link} from 'react-router-dom'
// import{signForm} from './login'
import {connect} from 'react-redux'

class Login extends Component {
    constructor (props) {
        super (props);
        
    }
    componentDidUpdate(){
        // alert('sdasd');
    }
    render (){
        const {payment, items, symbol, orderTotal} = this.props.location.state;
        return (
         <signForm user={this.props.user} data={this.props}/>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user.user,


    
})
export default connect(mapStateToProps)(Login)