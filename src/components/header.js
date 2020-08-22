import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <div className="site-blocks-cover overlay bg-light" id="home-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mt-lg-5 text-left align-self-center text-intro">
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="text-black">I'm Olamide Tijani</h1>
                  <p className="lead">FullStack Developer Based on Lagos city</p>
                  <p>
                    <a
                      href="#portfolio-section"
                      className="btn smoothscroll btn-primary"
                    >
                      Portfolio
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <img src="images/face.png" alt="Image" className="img-face" data-aos="fade" /> */}
      </div>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
