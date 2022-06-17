import React, {Component} from 'react';

class Collection extends Component {

    constructor (props) {
        super (props)
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Collection'}/>
                
                
                {/*Collection section*/}
                <section class="collection section-b-space">
                    <div class="container">
                        <div class="row partition-collection">
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/1.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/3.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/5.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/6.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="row partition-collection section-t-space">
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <div class="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`} class="img-fluid" alt="" />
                                        <div class="collection-content">
                                            <h4>(20 products)</h4>
                                            <h3>fashion</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry....</p>
                                            <a href="category-page.html" class="btn btn-outline">shop now !</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Collection