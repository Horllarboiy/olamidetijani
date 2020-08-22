import React from "react"

const Footer = () => {
return (
    <footer class="site-section bg-light footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-3">
            <h3 class="footer-title">Me Address</h3>
            <p>
              <span class="d-inline-block d-md-block">
                Baale Animasaun road. Alakuko,
              </span>{" "}
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <div class="col-md-5 mx-auto">
          <div class="row">
              <div class="col-lg-4">
                <h3 class="footer-title">Links</h3>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">Web App</a>
                  </li>
                  <li>
                    <a href="#">Graphic</a>
                  </li>
                  <li>
                    <a href="#">Branding</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
