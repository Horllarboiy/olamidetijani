// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react"

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <section class="site-section" id="contact-section">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-5 position-relative">
              <h2 class="section-title text-center mb-5">Contact Form</h2>
              <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xvowygaq"
                method="POST"
                className="form"
              >
                <div className="row mb-4">
                  <div class="form-group col-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div class="row mb-4">
                  <div class="form-group col-12">
                    <input
                      className="form-control"
                      type="text"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                </div>
                {status === "SUCCESS" ? (
                  <p className="alert alert-success" role="alert">Thanks for message!</p>
                ) : (
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="submit"
                        class="btn btn-primary"
                        value="Send Message"
                      />
                    </div>
                  </div>
                )}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
