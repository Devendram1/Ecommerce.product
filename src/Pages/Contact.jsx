import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    textarea: "",
  });

  const handleSubmit = (e) => {
   console.log(e);
  };


  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <section className="ftco-section bg-black text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Contact </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row justify-content-center">
                  <div className="col-lg-8 mb-5">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Address:</span> 198 Vijay Nagar, Suite 721
                              Indore NY 10016
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Phone:</span>{" "}
                              <a href="tel://1234567920">+ 1235 2355 98</a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Email:</span>{" "}
                              <a href="mailto:info@yoursite.com">
                                info@grain.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="contact-wrap">
                      <h3 className="mb-4 text-center">Get in touch with us</h3>
                      <div
                        id="form-message-warning"
                        className="mb-4 w-100 text-center"
                      />
                      <div
                        id="form-message-success"
                        className="mb-4 w-100 text-center"
                      >
                        Your message was sent, thank you!
                      </div>
                      <form
                        onClick={handleSubmit}
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                        className="contactForm"
                        noValidate="novalidate"
                      >
                        <div className="row ">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                name="name"
                                type="text"
                                className="form-control"
                                id="name"
                                onChange={handleInputs}
                                placeholder="Name"
                                value={user.name}
                              />
                            </div>
                            <br />
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                name="email"
                                type="email"
                                className="form-control"
                                id="email"
                                onChange={handleInputs}
                                placeholder="Email"
                                value={user.email}
                              />
                            </div>
                            <br />
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                name="subject"
                                type="text"
                                value={user.subject}
                                className="form-control"
                                onChange={handleInputs}
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                            <br />
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="textarea"
                                value={user.textarea}
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={8}
                                placeholder="Message"
                                defaultValue={""}
                                onChange={handleInputs}
                              />
                            </div>
                            <br />
                          </div>
                          <div className="col-md-12 text-center  ">
                            <button
                              type="button"
                              class="btn btn-secondary btn-lg btn-block"
                            >
                              submit Now
                            </button>
                          </div>
                        </div>
                        <br />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
