
import React, { Component } from 'react';
import Slider from 'react-slick';

class SmallImages extends Component {
    constructor (props) {
        super(props);
        this.state = {
            nav2: null,
            item : null
        }
    }
    componentDidMount() {
        this.setState({
            nav2: this.slider2,
        });
    }

    render() {
        const { item, settings } = this.props;
    
        var productsnav = settings;

        return (
            <div class="row">
                <div class="col-12 p-0">
                    <Slider {...productsnav} asNavFor={this.props.navOne} ref={slider => (this.slider2 = slider)} class="slider-nav">
                        {item? ()=>null
                        // item.map((vari, index) =>
                        //     <div key={index}>
                        //         <img src={`${vari.pictures}`} key={index} alt=""  class="img-fluid" />
                        //     </div>
                        // )
                        : 
                        Object.keys(item.pictures).length > 1 ? 
                            item.pictures.map((vari, index) =>
                                <div key={index}>
                                    <img src={`${vari}`} key={index} alt=""  class="img-fluid" />
                                </div>
                            ) : ''
                            
                            }
                    </Slider>
                </div>
            </div>
        );
    }
}

export default SmallImages;