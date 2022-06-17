import React, {Component} from 'react';
import {connect} from 'react-redux';


class retrunRefund extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        const {retrunrefund} = this.props;

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
                            
                                <p style={{textAlign: 'center'}}>{retrunrefund["Terms"]}</p>
                            </div>
                        </div>
                    </div>
                </section>

          
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    retrunrefund: state.data.privatepolicy,

})


export default connect(mapStateToProps)(retrunRefund);