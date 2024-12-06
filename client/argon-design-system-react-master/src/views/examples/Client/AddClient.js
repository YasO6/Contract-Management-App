import React, { useState } from "react";
import axios from "axios"; // Import axios
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Hero from "views/IndexSections/Hero";

import "../../../assets/css/AddClient.css";

const AddClient = () => {
  const [client, setClient] = useState({ name: "", address: "" });
  const [error, setError] = useState(""); // To handle errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (client.name.trim() && client.address.trim()) {
      try {
        // Make a POST request to the back-end
        const response = await axios.post("http://localhost:5000/api/clients", client); // Adjust the URL if needed
        alert("Client added successfully!");
        setClient({ name: "", address: "" }); // Reset form fields
      } catch (err) {
        console.error(err);
        setError("Failed to add client. Please try again.");
      }
    } else {
      alert("Both fields are required!"); // Handle empty fields
    }
  };

  return (
    <>
      <DemoNavbar />
      <Hero />
      <main className="client-page">
        <section className="section-profile-cover section-shaped my-0">
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
          </div>
        </section>

        <section className="section">
          <Container className="custom-container">
            <Card className="card-client shadow mt-4 narrow-card">
              <div className="px-4 py-4">
                <Row className="justify-content-center">
                  <Col>
                    <h2 className="text-center text-primary">Add New Client</h2>
                    <p className="text-center text-muted">
                      Please fill in the details below to add a new client.
                    </p>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="name" className="form-label">
                        <strong>Client Name</strong>
                      </Label>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        value={client.name}
                        onChange={handleChange}
                        placeholder="Enter client name"
                        required
                        className="form-control-alternative"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="address" className="form-label">
                        <strong>Client Address</strong>
                      </Label>
                      <Input
                        type="text"
                        name="address"
                        id="address"
                        value={client.address}
                        onChange={handleChange}
                        placeholder="Enter client address"
                        required
                        className="form-control-alternative"
                      />
                    </FormGroup>
                    <Button
                      color="info"
                      type="submit"
                      className="add-client-btn w-100"
                    >
                      Add Client
                    </Button>
                  </Form>
                  {error && <p className="text-danger mt-3">{error}</p>}
                </div>
              </div>
            </Card>
          </Container>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
};

export default AddClient;
