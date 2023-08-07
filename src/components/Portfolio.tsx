import React from 'react'

function Portfolio() {
  return (
    <div id="portfolio" className="container content-space-2 content-space-lg-3">
      <div className="d-grid gap-7 gap-md-10">
        
        <div data-aos="fade-up">
          <a className="card card-transition bg-soft-success shadow-none" href="#">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-4 order-lg-2 mb-5 mb-lg-0">
                  <div className="d-flex flex-column h-100">
                    <div className="mb-7">
                      <h2 className="card-title h1">Kibris Order</h2>
                      <p className="card-text text-body">A comprehensive online store that meets all your needs</p>
                    </div>

                
                    <div className="card shadow-none mt-auto">
                      <div className="card-body">
                        
                        <figure>
                          <div className="mb-4">
                            <img className="avatar avatar-lg avatar-4x3" src="./assets/svg/brands/kibris-order.svg" alt="Logo" />
                          </div>

                          <blockquote className="blockquote">“ On Kibris order I can find whatever I want, whoever came up with this is definitely a genius. Thank you! ”</blockquote>

                          <figcaption className="blockquote-footer">
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <img className="avatar avatar-circle" src="/assets/img/160x160/img3.jpg" alt="Image Description" />
                              </div>

                              <div className="flex-grow-1 ms-3">
                                Max
                                <span className="blockquote-footer-source">Kibris Order Customer</span>
                              </div>
                            </div>
                          </figcaption>        
                        </figure>
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
                

                <div className="col-lg-8">
                  <div className="mb-5">
                    <img className="img-fluid rounded-2" src="./assets/img/kibris-order-landing.png" alt="Image Description" />
                  </div>

                  <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <h4 className="card-title">Fast Delivery</h4>
                      <p className="card-text text-body">We use latest technologies and design principles to deliver high-quality websites tailored to meet out clients' unique needs</p>
                    </div>
                    

                    <div className="col-sm-6">
                      <h4 className="card-title">Customer Satisfaction</h4>
                      <p className="card-text text-body">At the top of Kibris order is customer satisfaction.</p>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio