import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { useNavigate, useParams } from "react-router-dom"; // Use useParams to get client id from the URL
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

const UpdateClient = ({ updateClient }) => {
  const [client, setClient] = useState({ name: "", address: "" });
  const { id } = useParams(); // Get client id from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the client data based on the id
    const fetchClient = async () => {
      const response = await fetch(`http://localhost:5000/api/clients/${id}`);
      const clientData = await response.json();
      setClient(clientData);
    };

    fetchClient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (client.name.trim() && client.address.trim()) {
      await updateClient(client); // Send the updated client data to the parent component
      navigate("/clients"); // Redirect to the client list after updating
    } else {
      alert("Both fields are required!");
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
                    <h2 className="text-center text-primary">Update Client</h2>
                    <p className="text-center text-muted">
                      Modify the fields below to update client information.
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
                      Update Client
                    </Button>
                  </Form>
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

export default UpdateClient;
