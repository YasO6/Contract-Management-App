/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative" style={{ backgroundColor: "#162d3e" }}>
          <img
            alt="App Hero"
            className="img-fluid"
            style={{ maxWidth: "80%", marginBottom: "30px" }}
            src={require("assets/img/image.png")} // Replace with your image
          />
        </div>
      </>
    );
  }
}

export default Hero;
