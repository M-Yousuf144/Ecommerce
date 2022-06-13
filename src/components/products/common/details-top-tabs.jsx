import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import "./details.scss"
import Slider from 'react-slick';

import ReactStars from "react-rating-stars-component";
import {postreviews} from "../../../actions"
import store from '../../../store';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import image from "../../../assets/images/profile.png"

class DetailsTopTabs extends Component {
  constructor (props) {
    super (props)
    this.state = {
      product_id: this.props.item.id,
      rating:"",
        title: "",
       comment:"",
       };

  
}

    render (){
        const {review} = this.props;

      
        const percentage = (this.props.item.api.reviews.percentage !== 0)? Object.entries(JSON.parse(this.props.item.api.reviews.percentage)):[];
        var settings = {
        // dots: true,
    infinite: false,
    className: "center",
      centerMode: true,
      centerPadding: "5px",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 586,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
   

   const ratingChanged = (newRating) => {
      this.setState({rating:newRating})
    };
    const SubmitReviews = (e)=>{
      e.preventDefault();
        let data = {
          product_id: this.props.item.id,
          title: this.state.title,
          comment: this.state.comment,
          rating: this.state.rating
        }
        store.dispatch(postreviews(data));
        toast.success("Review sent");
    }

  

        return (
            <section class="tab-product m-0" >
                <div class="row">
                    <div class="col-sm-12 col-lg-12" >
                        <Tabs class="tab-content nav-material" style={{width:"80%", marginLeft:"10%"}}>
                            <TabList class="nav nav-tabs nav-material" style={{textAlign:"center"}}>
                                <Tab class="nav-item">
                                    <span class="nav-link" ><i class="icofont icofont-man-in-glasses"></i>Details</span>
                                    <div class="material-border"></div>
                                </Tab>
                                <Tab class="nav-item">
                                    <span class="nav-link" ><i class="icofont icofont-man-in-glasses"></i>Reviews</span>
                                    <div class="material-border"></div>
                                </Tab>
                                {
                                    this.props.item.features ? 
                                    <Tab class="nav-item">
                                        <span class="nav-link" ><i class="icofont icofont-man-in-glasses"></i>Features</span>
                                        <div class="material-border"></div>
                                    </Tab>
                                    :
                                     ''
                                }
                                {
localStorage.getItem("customerData") ?
                                  <Tab class="nav-item">
                                    <span class="nav-link" >
                                        <i class="icofont icofont-contacts"></i>Write Review</span>
                                    <div class="material-border"></div>
                                </Tab> : ""
                                }
                            </TabList>
                            <TabPanel>
                                <p class="mt-4 p-0">
                                 {/* {this.props.item.description} */}
                                 <p dangerouslySetInnerHTML={{__html: this.props.item.description}} />
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <p class="mt-4 p-0">
<div>
    <div class="reviews">
    <h4 class="reviews__heading" style={{fontFamily:"Poppins, sans-serif"}}>Customer reviews</h4>
    <div class="reviews__average-ratings">
      <div class="average-ratings__stars">
      <ReactStars
  count={5}
  size={32}
  isHalf={true}
  value={this.props.item.api.reviews.average_rating}
  edit={false}
  emptyIcon={<i className="far fa-star"></i>}
  halfIcon={<i className="fa fa-star-half-alt"></i>}
  fullIcon={<i className="fa fa-star"></i>}
  activeColor="#ffd700"
/>


        <span class="stars__average-rating-score px-2" style={{fontFamily:"Poppins, sans-serif"}}>
      {this.props.item.api.reviews.average_rating} / 5
        </span>
      </div>
      <div class="average-ratings__total-customers">
      </div>
    </div>
    <div class="reviews__breakdown">
      <div class="reviews-breakdown__wrapper">
        <div class="reviews__single-star-average">
          <div class="single-star-average__amount">5 star</div>
          <div class="single-star-average__progress-bar">
            <progress
              class="progress-bar__data"
              max="100"
              value={(percentage[4])?percentage[4][1]:0}
            ></progress>
          </div>
          <div class="single-star-average__percentage">{(percentage[4])?percentage[4][1]:0}%</div>
        </div>
        <div class="reviews__single-star-average">
          <div class="single-star-average__amount">4 star</div>
          <div class="single-star-average__progress-bar">
            <progress
              class="progress-bar__data"
              max="100"
              value={(percentage[3])?percentage[3][1]:0}
            ></progress>
          </div>
          <div class="single-star-average__percentage">{(percentage[3])?percentage[3][1]:0}%</div>
        </div>
        <div class="reviews__single-star-average">
          <div class="single-star-average__amount">3 star</div>
          <div class="single-star-average__progress-bar">
            <progress
              class="progress-bar__data"
              max="100"
              value={(percentage[2])?percentage[2][1]:0}
            ></progress>
          </div>
          <div class="single-star-average__percentage">{(percentage[2])?percentage[2][1]:0}%</div>
        </div>
        <div class="reviews__single-star-average">
          <div class="single-star-average__amount">2 star</div>
          <div class="single-star-average__progress-bar">
            <progress
              class="progress-bar__data"
              max="100"
              value={(percentage[1])?percentage[1][1]:0}
            ></progress>
          </div>
          <div class="single-star-average__percentage">{(percentage[1])?percentage[1][1]:0}%</div>
        </div>
        <div class="reviews__single-star-average">
          <div class="single-star-average__amount">1 star</div>
          <div class="single-star-average__progress-bar">
            <progress
              class="progress-bar__data"
              max="100"
              value={(percentage[0])?percentage[0][1]:0}
            ></progress>
          </div>
          <div class="single-star-average__percentage">{(percentage[0])?percentage[0][1]:0}%</div>
        </div>
      </div>
    </div>
  </div>
{/*  })
     } */}
    </div>
<div style={{marginTop:10, padding:10, border:"1px solid rgba(0,0,0,0.2)"}}>
<div style={{padding:"5px 15px 15px 15px", display:"flex", justifyContent:"space-evenly", borderBottom:"1px solid rgba(0,0,0,0.08)", marginBottom:10}}>

<span className='fw-bold'>Showing Customer Reviews:</span>
<span>{review.length} results</span>

</div>




    <Slider {...settings} class="slide-1 offer-slider">
{
    (review.length!==0) ?
    review.map((e,i)=>{
        return(
<main key={i} class="main" >
    <article class="patrick article patrick--blackblue" style={{padding:"15px"}}>
      <div style={{display:"inline-flex"}}>
  
      <img src={(e.customer.profile)?e.customer.profile:image} alt="" height="50px" width="50px" aria-hidden="true" class="profile profile--violet" />
      <div style={{marginLeft:15}}>
      <div class="namei text-dark my-2">{e.name}</div>
      <p class="verified" style={{whiteSpace:"pre-wrap", fontSize:"1em", wordBreak:"break-all"}}>{e.customer.email}</p>
      </div>
      </div>
      <ReactStars
    count={5}
 
    size={24}
    isHalf={true}
    value={e.rating}
    edit={false}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
      <p class="details">{e.comment}</p>
    </article>
    <div class="media-body ml-3">

   </div>
  </main>
        )
    })
    : 
        <main class="main" >
            <article class="patrick article patrick--blackblue">
              {/* <img src="https://i.imgur.com/RmhYAHE.jpg" alt="" aria-hidden="true" class="profile profile--violet" /> */}
              <p class="namei text-dark"></p>
              <p class="verified"></p>
              <p class="details">No Reviews</p>
            </article>
          </main>
}
  </Slider>





    </div>

                                </p>
                            </TabPanel>
                            {
                                    this.props.item.features ? 
                            <TabPanel>
                                <p class="mt-4 p-0">
                                 {this.props.item.features}
                                </p>
                            </TabPanel>
                            :
                            ''
                            }
                            <TabPanel>
                                <form class="theme-form mt-4">
                                    <div class="form-row">
                                        <div class="col-md-12 ">
                                            <div class="media m-0">
                                            <label className='my-2'>Rating:</label>
  <div className='mx-3'>                                            
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={24}
      value={this.state.rating}
      activeColor="#ffd700"
    />,
   </div>  

                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <label htmlFor="review">Review Title</label>
                                            <input type="text" class="form-control" value={this.state.title} id="review" onChange={(e)=>this.setState({title:e.target.value})} placeholder="Enter your Review Subjects" required />
                                        </div>
                                        <div class="col-md-12">
                                            <label htmlFor="review">Review Comments</label>
                                            <textarea class="form-control" value={this.state.comment} onChange={(e)=>this.setState({comment:e.target.value})} placeholder="Wrire Your Testimonial Here" id="exampleFormControlTextarea1" rows="6"></textarea>
                                        </div>
                                        <div class="col-md-12">
                                            <button disabled={(this.state.rating !== '' && this.state.title !== '' && this.state.comment !== '' )?false :true} class="btn btn-solid" type="submit" onClick={(e)=>SubmitReviews(e)}>Submit YOur Review</button>
                                        </div>
                                    </div>
                                </form>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
      review: state.data.reviewsdata.data,
    }
  }
  export default connect(mapStateToProps)(DetailsTopTabs);
