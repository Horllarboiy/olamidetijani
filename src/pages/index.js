import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div class="site-section" id="about-section">
      <div class="container">
        <div class="row ">
          <div class="col-12 mb-4 position-relative">
            <h2 class="section-title">About Me</h2>
          </div>
          <div class="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
            <div class="bg-light pt-5">
              {/* <img src="images/face.png" alt="Image" class="img-fluid" /> */}
            </div>
          </div>
          <div class="col-lg-4 order-2 order-lg-1">
            <p>
              Since beginning my journey as a FullStack Developer nearly 3 years
              ago, I've done remote work for agencies , and collaborated with
              talented people
            </p>
            <p>
              to create digital products for both business and consumer use. I'm
              quietly confident, naturally curious, and perpetually improving my
              skills.
            </p>
          </div>
          <div class="col-lg-4 order-3 order-lg-3">
            <h2 class="section-title">Language i speak</h2>
            <p>
              JavaScript: React, React Native, Express, Node
              <br />
              Python, Ruby
            </p>
            <p>
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </p>
            <p>
              <a href="#contact-section" class="btn smoothscroll btn-primary">
                Contact Me
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
