import React, {Component} from 'react';
import {connect} from 'react-redux';


class Service extends Component {
    render (){
        const {sideDetails} = this.props
        
        return (
          
            <div class="collection-filter-block" style={{width:"100%"}} >
                <div class="product-service">
              
                {sideDetails.data.map(data => (

            <div class="media">
                <div > <img src={data.icon} alt="sad" /></div>
                <div class="media-body">
                <h4>{data.main_heading}</h4>
                <p>{data.sub_heading}</p>
                </div>
                </div>
              ))}


                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        sideDetails: state.contactDetails.sideDetails,
     
    }
}

export default connect(mapStateToProps)(Service);
