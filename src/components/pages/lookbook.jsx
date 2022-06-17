import React, {Component} from 'react';
import Slider from 'react-slick';


class aboutUs extends Component {

    constructor (props) {
        super (props)

    }

    render (){


        return (
            <div>
                <Breadcrumb title={'Lookbook'}/>
                
                
                {/*about section*/}
                <div class="container-fluid lookbook-section lookbook">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="row lookbook-img">
                                <div class="col-12">
                                    <div class="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/men.jpg`} alt="" class="img-fluid" />
                                            <div class="lookbook-dot dot5">
                                                <span>1</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/7-a1.jpg`} class="img-fluid" alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>100$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="lookbook-dot dot6">
                                                <span>2</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/7-a1.jpg`} class="img-fluid" alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>150$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/6.jpg`} alt="" class="img-fluid" />
                                            <div class="lookbook-dot dot7">
                                                <span>1</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/6-a1.jpg`} class="img-fluid" alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>89$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="lookbook-dot dot8">
                                                <span>2</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/6-a2.jpg`} class="img-fluid" alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>159$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row lookbook-img">
                                <div class="col-12">
                                    <div class="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/3.jpg`} alt="" class="img-fluid" />
                                            <div class="lookbook-dot dot9">
                                                <span>1</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/pro3/33.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>181$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="lookbook-dot dot10">
                                                <span>2</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/3-a2.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>111$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/5.jpg`} alt="" class="img-fluid" />
                                            <div class="lookbook-dot dot11">
                                                <span>1</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/5-a2.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>173$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="lookbook-dot dot12">
                                                <span>2</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/5-a1.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>99$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row lookbook-img">
                                <div class="col-12">
                                    <div class="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/4.jpg`} alt="" class="img-fluid" />
                                            <div class="lookbook-dot dot13">
                                                <span>1</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/4-a3.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>199$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="lookbook-dot dot14">
                                                <span>2</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/4-a4.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>59$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="lookbook-block">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/fashion/lookbook/2.jpg`} alt="" class="img-fluid" />
                                            <div class="lookbook-dot dot15">
                                                <span>1</span>
                                                <a href="#">
                                                    <div class="dot-showbox">
                                                        <img src={`${process.env.PUBLIC_URL}/assets/images/pro3/2.jpg`} class="img-fluid"
                                                             alt="" />
                                                            <div class="dot-info">
                                                                <h5 class="title">tee</h5>
                                                                <h5>182$</h5>
                                                                <h6>details</h6>
                                                            </div>
                                                    </div>
                                                </a>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default aboutUs