import React, {Component} from 'react';
import {connect} from 'react-redux';


class webTerms extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        const {webterms} = this.props;

        return (
            <div>
                {/* <Breadcrumb title={'About Us'}/> */}
                {/*about section*/}
                <section class="about-page  section-b-space">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-3">
                                <div class="banner-section">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/logos/logo.png`} class="img-fluid" alt=""/>
                                </div>
                            </div>
                            <div class="col-sm-12">
                            
                                <p style={{textAlign: 'center'}}>{webterms["Terms"]}</p>
                            </div>
                        </div>
                    </div>
                </section>

          
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    webterms: state.data.privatepolicy,

})


export default connect(mapStateToProps)(webTerms);