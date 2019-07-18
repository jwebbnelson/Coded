import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/main.sass"
import home1 from "../images/home_1.png"
import home2 from "../images/home_2.png"
import home3 from "../images/home_3.png"
import Web from "../images/web.png"
import App from "../images/app.png"
import VR from "../images/vr.png"
import Vision from "../images/vision.png"
import Testimonials from "../images/testimonials.png"
import Microsoft from "../images/microsoft.png"
import Jazz from "../images/jazz.png"
import Utah from "../images/Utah.png"
import Fuze from "../images/fuze.png"
import Stars from "../images/Stars.png"
import Bees from "../images/bees.png"
import firstStar from "../images/firstStar.png"

const IndexPage = () => (
  <Layout>
    <div className="gradient-sq-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-3">
            <div className="line-white" />
          </div>
          <div className="col-xs-3">
            <div className="line-white" />
          </div>
          <div className="col-xs-3">
            <div className="line-white" />
          </div>
          <div className="col-xs-3">
            <div className="line-white" />
          </div>
          <div className="row end-xs">
            <div className="col-xs-12">
              <div className="line-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="camper-text-container">
          <div className="row">
            <div className="col-xs-12 col-sm-2">
              <div className="header-med-white">
                <h3>NOW ACCEPTING</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="header-xl-white">
                <h1>New Campers</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="header-med-white">
                <p>Creative Techology Camp</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="header-med-white">
                <p>Classes in apps, web, and VR</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="btn-med-white">
              <div className="btn-text-blue">Enroll</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="photo-1">
      <img src={home1} />
    </div>

    <div className="body-main">
      <div className="section">
        <div className="camp-options">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3">
                <div className="padding-20-20">
                  <div className="header-lg-black">Camp Options</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="padding-15-15">
                  <img src={Web} />
                </div>
                <div className="padding-15-15">
                  <div className="header-med-black">Web</div>
                </div>
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
                <div className="link-blue">
                  <Link to="/courses/">Learn More</Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                <div className="padding-15-15">
                  <img src={App} />
                </div>
                <div className="padding-15-15">
                  <div className="header-med-black">App</div>
                </div>
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
                <div className="link-blue">
                  <Link to="/courses/">Learn More</Link>
                </div>
              </div>
              <div className="col-xs-8 col-sm-offset-1 col-sm-2">
                <div className="padding-15-15">
                  <img src={VR} />
                </div>
                <div className="padding-15-15">
                  <div className="header-med-black">VR</div>
                </div>
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
                <div className="link-blue">
                  <Link to="/courses/">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photo-section-1">
        <div className="blue-square-1" />
        <div className="gray-sq-right" />
        <div className="container">
          <div className="row middle-sm">
            <div className="col-xs-12 col-sm-10">
              <img src={home2} className="img-2" />
            </div>
            <div className="col-xs-12 col-sm-2">
              <div className="body-blue-text">
                <h6>Benefit</h6>
              </div>
              <div className="padding-20-20">
                <div className="header-lg-black-wrap">
                  <h1>Future Facing</h1>
                </div>
              </div>
              <div className="p-black">
                <p>
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="our-vision">
            <div className="row middle-sm">
              <div className="col-xs-1">
                <img src={Vision} />
              </div>
              <div className="col-xs-2">
                <div className="header-lg-black">
                  <h2>Our Vision</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-8">
                <div className="header-med-black">
                  <div className="padding-50-50">
                    <h2>
                      "Happiness is not something you postpone for the future;
                      it is something you design for the present."
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-8 col-sm-offset-1 col-sm-2">
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-2">
                <div className="padding-50-50">
                  <div className="btn-blue-sm">
                    <div className="btn-text-white">
                      <h5>Our Story</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="photo-section-2">
        <div className="blue-square-2" />
        <div className="gray-sq-left" />
        <div className="container">
          <div className="row middle-xs">
            <div className="col-xs-12 col-sm-2">
              <div className="body-blue-text">
                <h6>Benefit</h6>
              </div>
              <div className="padding-20-20">
                <div className="header-lg-black-wrap">
                  <h1>Future Facing</h1>
                </div>
              </div>
              <div className="p-black">
                <p>
                  We provide a fun learning enviornmnent for our students while
                  creating experiences mthat are engaging and provide meaningful
                  value.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-offset-1 col-sm-9">
              <img src={home3} />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="testimonials">
            <div className="row middle-sm">
              <div className="col-sm-1">
                <img src={Testimonials} />
              </div>
              <div className="col-sm-2">
                <div className="header-lg-black">
                  <h2>Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-7">
                <div className="header-med-black">
                  <div className="padding-50-50">
                    <h2>
                      "Happiness is not something you postpone for the future;
                      it is something you design for the present."
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-2">
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-offset-1 col-sm-2">
                <div className="p-black">
                  <p>
                    We provide a fun learning enviornmnent for our students
                    while creating experiences mthat are engaging and provide
                    meaningful value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row center-xs">
            <div className="col">
              <div className="header-lg-black">
                <div className="padding-20-20">
                  <h2>Find A Camp</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row center-xs">
            <div className="col">
              <div className="p-black">
                <p>Are you a parent or a business?</p>
              </div>
            </div>
          </div>
          <div className="padding-50-50">
            <div className="row between-sm">
              <div className="col-xs-12 col-md-5">
              <Link to="/parentsignup">
                <div className="box-shadow">
                  <div className="box-shadow-text">
                    <div className="padding-15-15">
                      <p className="p-black">I'm a</p>
                    </div>
                    <h2 className="header-lg-black">Parent</h2>
                  </div>
                </div>
                </Link>
              </div>
              <div className="col-xs-12 col-md-5">
                <Link to="/parentsignup">
                  <div className="box-shadow">
                    <div className="box-shadow-text">
                      <div className="padding-15-15">
                        <p className="p-black">I have a</p>
                      </div>
                      <h2 className="header-lg-black">Business</h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="gray-partner-container">
      <div className="container">
        <div className="row center-xs">
          <div className="padding-20-20">
            <h2 className="header-lg-gray">Our Partners</h2>
          </div>
        </div>
        <div className="row between-xs">
          <div className="col-md-1">
            <img src={Microsoft} />
          </div>
          <div className="col-md-1">
            <img src={Jazz} />
          </div>
          <div className="col-md-1">
            <img src={Utah} />
          </div>
          <div className="col-md-1">
            <img src={Fuze} />
          </div>
          <div className="col-md-1">
            <img src={Stars} />
          </div>
          <div className="col-md-1">
            <img src={Bees} />
          </div>
          <div className="col-md-1">
            <img src={firstStar} />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
