import React from "react"
import { FaDesktop, FaFileImage, FaCode, FaLeaf } from "react-icons/fa"

const Service = () => {
  return (
<div>
<div className="site-section" id="services-section">
      <div className="container">
        <div className="row ">
          <div className="col-12 mb-5 position-relative">
            <h2 className="section-title text-center mb-5">My Services</h2>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4"><span className="icon-style"> <FaFileImage /> </span></div>
              <div className="service-about">
                <h3>UI/UX Designer</h3>
                <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4"><span className="icon-business_center"> <FaDesktop /> </span></div>
              <div className="service-about">
                <h3>Web Development</h3>
                <p>I tend to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4"><span className="icon-desktop_windows"> <FaLeaf /> </span></div>
              <div className="service-about">
                <h3>Brand &amp; Logo Design</h3>
                <p>I value simple structure and clean design patterns.</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="service d-flex h-100">
              <div className="service-number mr-4"><span className="icon-layers"> <FaCode /> </span></div>
              <div className="service-about">
                <h3>App Development</h3>
                <p>I tend to code things from scratch, and enjoy bringing ideas to life.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</div>
  )
}

export default Service