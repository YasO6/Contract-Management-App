import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/SimpleFooter";
import Hero from "../IndexSections/Hero";

class Landing extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            < Hero />
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0 text-center">
                  <h1 className="display-3 text-white">
                    Welcome to Our Insurance Contract Management Application!
                  </h1>
                  <p className="lead text-white mt-4">
                    Easily manage all your clients' contracts and ensure their satisfaction.
                  </p>
                  <Button
                    className="btn-icon mt-4"
                    color="info"
                    href="/login-page" // Update the route for your login page
                  >
                    <span className="btn-inner--text">Log In Here</span>
                  </Button>
                </div>
              </Container>
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
          </div>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;

