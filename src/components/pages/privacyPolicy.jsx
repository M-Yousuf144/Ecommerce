import React, {Component} from 'react';
import {connect} from 'react-redux';


class priacyPolicy extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        const {privatepolicy} = this.props;
    

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
                            
                                <p style={{textAlign: 'center'}}>{privatepolicy["Privacy"]}</p>
                            </div>
                            </div>
                        
                                { privatepolicy["Privacy_details"].map((e, index ) =>
                                <div class="row justify-content-center mt-3">
                                    <div class="col-sm-12">
                                            <div class="card" key={index}>
                                            <div class="card-header" id="headingOne">
                                                <h5 class="mb-0">
                                                    <button class="btn btn-link" type="button" data-toggle="collapse"
                                                            data-target="#collapseOne" aria-expanded="true"
                                                            aria-controls="collapseOne">
                                                     Policy
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                                data-parent="#accordionExample">
                                                <div class="card-body">
                                                <p> {e}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )}
                          



                      
                    </div>
                </section>

          
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    privatepolicy: state.data.privatepolicy[state.filters.country],

})


export default connect(mapStateToProps)(priacyPolicy);