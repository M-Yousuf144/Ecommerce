import React, {Component} from 'react';
import {connect} from 'react-redux';


class Faq extends Component {

    constructor (props) {
        super (props)
    }

    render (){

        const {faq,country} = this.props;
        return (
            <div>
                {/* <Breadcrumb title={'Faq'}/> */}
                
                
                {/*Dashboard section*/}
                <section class="faq-section section-b-space">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="accordion theme-accordion" id="accordionExample">
                                    
                                { faq.filter(e =>{
                                    return e.Country === country
                                }).map((e, index ) =>
                                        <div class="card" key={index}>
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" type="button" data-toggle="collapse"
                                                        data-target="#collapseOne" aria-expanded="true"
                                                        aria-controls="collapseOne">
                                                    {e.Question}
                                                </button>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                             data-parent="#accordionExample">
                                            <div class="card-body">
                                            <p> {e.Answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                           </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    faq: state.data.faq,
    country:state.filters.country

})

export default connect(mapStateToProps)(Faq);
