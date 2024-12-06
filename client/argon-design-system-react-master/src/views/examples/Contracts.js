import React, { Component } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col, Table } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Hero from "views/IndexSections/Hero";

import "../../assets/css/ContractPage.css";

class ContractPage extends Component {
  state = {
    contracts: [],
    loading: true, // For tracking loading state
    error: null, // For handling errors
  };

  // Fetch contracts when the component mounts
  componentDidMount() {
    this.fetchContracts();
  }

  fetchContracts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/contracts/"); // Replace with your API URL
      this.setState({ contracts: response.data, loading: false });
    } catch (error) {
      this.setState({ error: "Failed to fetch contracts", loading: false });
    }
  };

  addContract = () =>  {
      // Implement logic to add a new client
      console.log("Add Contract logic");
  };

  updateContract = (num) => {
    // Implement logic to update a contract's information
    console.log(`Updating Contract ${num}`);
  };

  deleteContract = async (num) => {
    try {
      await axios.delete(`http://localhost:5000/contracts/${num}`);
      this.setState((prevState) => ({
        contracts: prevState.contracts.filter((contract) => contract.num !== num),
      }));
    } catch (error) {
      alert("Failed to delete contract");
    }
  };
  render() {
    const { contracts, loading, error } = this.state;
  
    return (
      <>
        <DemoNavbar />
        <Hero />
        <main className="contract-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
            </div>
          </section>
  
          <section className="section">
            <Container className="custom-container">
              <Card className="card-contract shadow mt-4">
                <div className="px-3">
                  <Row className="justify-content-center">
                    <Col>
                      <h2>Contract Management</h2>
                    </Col>
                  </Row>
  
                  {loading && <p>Loading contracts...</p>}
                  {error && <p className="text-danger">{error}</p>}
  
                  {!loading && !error && (
                    <div className="text-center mt-5">
                      <Button
                        href="/add-contract"
                        color="info"
                        size="sm"
                        className="add-contract-btn mb-3"
                      >
                        Add Contract
                      </Button>
  
                      <Table responsive className="contract-table">
                        <thead>
                          <tr style={{ backgroundColor: "#0f344d", color: "white" }}>
                            <th>#</th>
                            <th>Type</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Annual Premium</th>
                            <th>Client Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contracts.map((contract) => (
                            <tr key={contract.id}>
                              <td>{contract.id}</td>
                              <td>{contract.insurance_type}</td>
                              <td>{new Date(contract.start_date).toLocaleDateString()}</td>
                              <td>{new Date(contract.end_date).toLocaleDateString()}</td>
                              <td>{contract.annual_premium}</td>
                              <td>{contract.client_name}</td>
                              <td className="d-flex flex-column align-items-center">
                                <Button
                                  color="warning"
                                  size="sm"
                                  onClick={() => this.updateContract(contract.id, { /* pass updated data */ })}
                                  className="update-btn mb-2"
                                  href="/update-contract"
                                >
                                  Update
                                </Button>
                                <Button
                                  color="danger"
                                  size="sm"
                                  onClick={() => this.deleteContract(contract.id)}
                                  className="delete-btn"
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    </div>
                  )}
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default ContractPage;
