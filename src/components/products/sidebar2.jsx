import React from 'react'

const Sidebar2 = () => {
  return (
      <>
      
      <div class="row">
      <div class="blog-sidebar">
      <div class="theme-card">
          <h4>Recent Blog</h4>
          <ul class="recent-blog">
              <li>
                  <div class="media">
                      <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/1.jpg`} alt="Generic placeholder image" />
                          <div class="media-body align-self-center">
                              <h6>25 Dec 2018</h6>
                              <p>0 hits</p>
                          </div>
                  </div>
              </li>
              <li>
                  <div class="media">
                      <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/2.jpg`} alt="Generic placeholder image" />
                          <div class="media-body align-self-center">
                              <h6>25 Dec 2018</h6>
                              <p>0 hits</p>
                          </div>
                  </div>
              </li>
              <li>
                  <div class="media">
                      <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/3.jpg`} alt="Generic placeholder image" />
                          <div class="media-body align-self-center">
                              <h6>25 Dec 2018</h6>
                              <p>0 hits</p>
                          </div>
                  </div>
              </li>
              <li>
                  <div class="media">
                      <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/4.jpg`} alt="Generic placeholder image" />
                          <div class="media-body align-self-center">
                              <h6>25 Dec 2018</h6>
                              <p>0 hits</p>
                          </div>
                  </div>
              </li>
              <li>
                  <div class="media">
                      <img class="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/blog/5.jpg`} alt="Generic placeholder image" />
                          <div class="media-body align-self-center">
                              <h6>25 Dec 2018</h6>
                              <p>0 hits</p>
                          </div>
                  </div>
              </li>
          </ul>
      </div>
      </div>
      </div>
      </>
  )
}

export default Sidebar2