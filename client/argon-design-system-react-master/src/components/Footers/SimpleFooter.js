import React from "react";
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

const SimpleFooter = () => {
  return (
    <footer style={{ backgroundColor: "#0f344d", color: "#fff", padding: "40px 0" }}>
      <Container>
        {/* Top Section */}
        <Row className="mb-4">
          <Col lg="4" md="6">
            <h3 className="text-light">Tendanz</h3>
            <p>
              Tendanz is a leading consulting firm specialized in data and insurance,
              providing tailored B2B solutions across Europe.
            </p>
          </Col>
          <Col lg="2" md="6">
            <h5 className="text-light">Explore</h5>
            <Nav vertical>
              <NavItem>
                <NavLink href="#" style={{ color: "#fff" }} className="footer-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "#fff" }} className="footer-link">
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "#fff" }} className="footer-link">
                  Join Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "#fff" }} className="footer-link">
                  Data Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" style={{ color: "#fff" }} className="footer-link">
                  Legal Notice
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col lg="4" md="6">
            <h5 className="text-light">Contact</h5>
            <p>
              66 AV. CHAMPS ELYSEES<br />
              75008 PARIS<br />
              (+33) 744 752 443<br />
              <a href="mailto:contact@tendanz.com" style={{ color: "#11f405" }}>
                contact@tendanz.com
              </a>
            </p>
          </Col>
        </Row>

        <hr style={{ backgroundColor: "#11f405", opacity: 0.5 }} />

        {/* Bottom Section */}
        <Row>
          <Col md="6">
            <div className="copyright">
              © {new Date().getFullYear()} Tendanz. All Rights Reserved.
            </div>
          </Col>
          <Col md="6" className="text-md-right">
            <Nav className="justify-content-end">
              <NavItem>
                <NavLink href="#" className="footer-link" style={{ color: "#fff" }}>
                  Privacy Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="footer-link" style={{ color: "#fff" }}>
                  Terms of Use
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SimpleFooter;
