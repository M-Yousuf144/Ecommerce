import React, {Component} from 'react';


class Search extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Search'}/>
                
                
                {/*Search section*/}
                <section class="authentication-page section-b-space">
                    <div class="container">
                        <section class="search-block">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 offset-lg-3">
                                        <form class="form-header">
                                            <div class="input-group">
                                                <input type="text" class="form-control"
                                                       aria-label="Amount (to the nearest dollar)"
                                                       placeholder="Search Products......" />
                                                    <div class="input-group-append">
                                                        <button class="btn btn-solid"><i
                                                            class="fa fa-search"></i>Search
                                                        </button>
                                                    </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

            </div>
        )
    }
}

export default Search