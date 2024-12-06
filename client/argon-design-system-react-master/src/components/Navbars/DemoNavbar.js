import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button, Container } from "reactstrap";
import logo from "../../assets/img/logo.png"; // Replace with the actual path to your PNG file

const CustomNavbar = ({ handleLogout }) => {
  return (
    <Navbar style={{ backgroundColor: "#0f344d" }} expand="md" dark>
      <Container>
        {/* Logo and Home aligned left */}
        <div className="d-flex align-items-center">
          <NavbarBrand href="https://tendanz.com/">
            <img
              src={logo}
              alt="Tendanz Logo"
              style={{
                height: "40px", // Adjust size as needed
                marginRight: "10px",
              }}
            />
          </NavbarBrand>
          <Nav navbar className="d-flex align-items-center">
            <NavItem>
              <NavLink href="/" style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}>
                Home
              </NavLink>
            </NavItem>
          </Nav>
        </div>

        {/* Navigation Links */}
        <Nav className="ml-auto d-flex align-items-center" navbar>
          <NavItem>
            <NavLink href="/contracts" style={{ color: "#fff", fontSize: "16px" }}>
              Contracts
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/clients" style={{ color: "#fff", fontSize: "16px" }}>
              Clients
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/stats" style={{ color: "#fff", fontSize: "16px" }}>
              Stats
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
