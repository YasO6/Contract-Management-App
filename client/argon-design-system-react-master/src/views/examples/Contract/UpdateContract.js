import React, { useState } from "react";
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



const UpdateContract = ({ contractData, updateContract }) => {
  const [contract, setContract] = useState(contractData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContract((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contract.type.trim() &&
      contract.startDate &&
      contract.endDate &&
      contract.annualPremium.trim() &&
      contract.clientName.trim()
    ) {
      updateContract(contract); // Pass the updated contract data to the parent
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
            <Card className="card-client shadow mt-4 narrow-card">
              <div className="px-4 py-4">
                <Row className="justify-content-center">
                  <Col>
                    <h2 className="text-center text-primary">Update Contract</h2>
                    <p className="text-center text-muted">
                      Modify the fields below to update the contract.
                    </p>
                  </Col>
                </Row>

                <div className="text-center mt-4">
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Label for="type" className="form-label">
                        <strong>Contract Type</strong>
                      </Label>
                      <Input
                        type="text"
                        name="type"
                        id="type"
                        value={contract.type}
                        onChange={handleChange}
                        placeholder="Enter contract type"
                        required
                        className="form-control-alternative"
                      />
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
                        type="number"
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
                        type="text"
                        name="clientName"
                        id="clientName"
                        value={contract.clientName}
                        onChange={handleChange}
                        placeholder="Enter client name"
                        required
                        className="form-control-alternative"
                      />
                    </FormGroup>
                    <Button
                      color="info"
                      type="submit"
                      className="add-client-btn w-100"
                    >
                      Update Contract
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

export default UpdateContract;
