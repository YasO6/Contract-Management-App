import React, { useState, useEffect } from "react";
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

import "../../../assets/css/AddContract.css";

const AddContract = () => {
  const [contract, setContract] = useState({
    type: "",
    startDate: "",
    endDate: "",
    annualPremium: "",
    clientName: "",
  });

  const [clients, setClients] = useState([]);

  // Fetch client names on component mount
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("/api/clients");
        const clientData = await response.json();
        setClients(clientData);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContract((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, startDate, endDate, annualPremium, clientName } = contract;

    if (
      type.trim() &&
      startDate &&
      endDate &&
      annualPremium.trim() &&
      clientName.trim()
    ) {
      try {
        // Fetch the client ID based on the clientName
        const clientResponse = await fetch(`/api/clients?name=${clientName}`);
        const clientData = await clientResponse.json();

        if (!clientData.id) {
          alert("Client not found! Please check the client name.");
          return;
        }

        const client_id = clientData.id;

        // Post the contract data
        const response = await fetch("/api/contracts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            client_id,
            insurance_type: type,
            start_date: startDate,
            end_date: endDate,
            annual_premium: annualPremium,
          }),
        });

        if (response.ok) {
          alert("Contract added successfully!");
          setContract({
            type: "",
            startDate: "",
            endDate: "",
            annualPremium: "",
            clientName: "",
          });
        } else {
          throw new Error("Failed to add contract");
        }
      } catch (error) {
        console.error(error);
        alert("Error adding contract");
      }
    } else {
      alert("All fields are required!");
    }
  };

  return (
    <>
      <DemoNavbar />
      <Hero />
      <main className="contract-page">
        <section className="section-profile-cover section-shaped my-0">
          <div className="shape shape-style-1 shape-default alpha-4">
            <span />
          </div>
        </section>

        <section className="section">
          <Container className="custom-container">
            <Card className="card-contract shadow mt-4 narrow-card">
              <div className="px-4 py-4">
                <Row className="justify-content-center">
                  <Col>
                    <h2 className="text-center text-primary">Add New Contract</h2>
                    <p className="text-center text-muted">
                      Please fill in the details below to add a new contract.
                    </p>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="type" className="form-label">
                        <strong>Type</strong>
                      </Label>
                      <Input
                        type="select"
                        name="type"
                        id="type"
                        value={contract.type}
                        onChange={handleChange}
                        required
                        className="form-control-alternative"
                      >
                        <option value="">Select type</option>
                        <option value="Health">Health</option>
                        <option value="Auto">Auto</option>
                        <option value="Home">Home</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="startDate" className="form-label">
                        <strong>Start Date</strong>
                      </Label>
                      <Input
                        type="date"
                        name="startDate"
                        id="startDate"
                        value={contract.startDate}
                        onChange={handleChange}
                        required
                        className="form-control-alternative"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="endDate" className="form-label">
                        <strong>End Date</strong>
                      </Label>
                      <Input
                        type="date"
                        name="endDate"
                        id="endDate"
                        value={contract.endDate}
                        onChange={handleChange}
                        required
                        className="form-control-alternative"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="annualPremium" className="form-label">
                        <strong>Annual Premium</strong>
                      </Label>
                      <Input
                        type="text"
                        name="annualPremium"
                        id="annualPremium"
                        value={contract.annualPremium}
                        onChange={handleChange}
                        placeholder="Enter annual premium"
                        required
                        className="form-control-alternative"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="clientName" className="form-label">
                        <strong>Client Name</strong>
                      </Label>
                      <Input
                        type="select"
                        name="clientName"
                        id="clientName"
                        value={contract.clientName}
                        onChange={handleChange}
                        required
                        className="form-control-alternative"
                      >
                        <option value="">Select client</option>
                        {clients.map((client) => (
                          <option key={client.id} value={client.name}>
                            {client.name}
                          </option>
                        ))}
                      </Input>
                    </FormGroup>
                    <Button
                      color="info"
                      type="submit"
                      className="add-contract-btn w-100"
                    >
                      Add Contract
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

export default AddContract;
