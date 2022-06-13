import React, {Component} from 'react';
import Slider from 'react-slick';


class PageNotFound extends Component {

    constructor (props) {
        super (props)

    }

    render (){

        return (
            <div>
                <Breadcrumb title={'404 Page'}/>

                <section class="p-0">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="error-section">
                                    <h1>404</h1>
                                    <h2>page not found</h2>
                                    <a href="index.html" class="btn btn-solid">back to home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default PageNotFound