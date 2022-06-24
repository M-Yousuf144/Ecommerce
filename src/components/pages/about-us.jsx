import React, { Component } from 'react';
import { connect } from 'react-redux';
import Parser from 'html-react-parser';

class aboutUs extends Component {
    constructor(props){
        super(props)

    }
    render() {

        const {GetData} = this.props;
        var result = (GetData)?GetData.filter(data => data.url_slug == 'about_us'):[];
 
  

        return (
            <div style={{paddingTop:'3%'}}>
              {console.log(GetData)}
                <section class="about-page  section-b-space">
                    <div class="container">
                       
                      {/* <b> <h2 style={{textAlign:'center'}}>About Us</h2></b>  */}
                      <div className="row">
                        <div className="col-lg-lg-3"></div>
                        <div className="col-lg-lg-6">
                        {
                            result.map(res=>(
                          
                            <span>
                            {Parser(res.PageContent)}
                            </span>

                       
                            ))

                        }
                        </div>
                        <div className="col-lg-lg-3"></div>

                      </div>
                      
                    </div>
                </section>


            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    GetData: (state.pages.all_pages.data)?state.pages.all_pages.data:[]
})


export default connect(
    mapStateToProps,
)(aboutUs)
