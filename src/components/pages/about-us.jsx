import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';
import { height } from '@mui/system';

class aboutUs extends Component {
    constructor(props){
        super(props)

    }
    render() {

        const {GetData,user} = this.props;
        var result = (GetData)?GetData.filter(data => data.url_slug == 'about_us_web'):[];
        var about = (user.sliderBannner)? user.sliderBannner.filter(data => data.title == 'About Us'):[];
        var about_side = (user.sliderBannner)? user.sliderBannner.filter(data => data.title == 'About Side Img'):[];
 
  

        return (
            <div style={{paddingTop:'2%'}} className="about-top">
            {about.map(res=>(
            <div>
            <img src={res.image_url} width="100%" height="100%"/>
            </div>

            ))}
    <div className="row">
        <div className="col-lg-6 base_bg_ligh" style={{width:'100%' ,height:"100%",padding:'8%',paddingTop:'5%'}}>
                        {
                            result.map(res=>(
                          
                            <span>
                            {Parser(res.PageContent)}
                            </span>

                       
                            ))

                        }
                      
        </div>
        <div className="col-lg-6">
        {about_side.map(res=>(
            <div>
            <img src={res.image_url} width="100%" height="100%" style={{paddingTop:'18%'}}/>
            </div>

            ))}
        </div>
    </div>



            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    GetData: (state.pages.all_pages.data)?state.pages.all_pages.data:[],
    user: state.images,

})


export default connect(
    mapStateToProps,
)(aboutUs)
