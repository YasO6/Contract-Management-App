import React, { Component } from "react";
import { Button, Card, Container, Row, Col, Table } from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Hero from "views/IndexSections/Hero";

import "../../assets/css/ClientPage.css";

class ClientPage extends Component {
  state = {
    clients: [], // Initialize as empty
    loading: true,
    error: null,
  };

  componentDidMount() {
    // Fetch all clients when the component mounts
    this.fetchClients();
  }

  fetchClients = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/clients");
      if (!response.ok) {
        throw new Error("Failed to fetch clients");
      }
      const clients = await response.json();
      this.setState({ clients, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };
  addClient = () => {
    // Implement logic to add a new client
    console.log("Add Client logic");
  };

  updateClient = () => {
    // Implement logic to add a new client
    console.log("Add Client logic");
  };

  deleteClient = async (id) => {;
    try {
      const response = await fetch(`http://localhost:5000/api/clients/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete client");
      }
      this.setState((prevState) => ({
        clients: prevState.clients.filter((client) => client.id !== id),
      }));
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    const { clients, loading, error } = this.state;

    return (
      <>
        <DemoNavbar />
        <Hero />
        <main className="client-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
            </div>
          </section>

          <section className="section">
            <Container className="custom-container">
              <Card className="card-client shadow mt-4">
                <div className="px-3">
                  <Row className="justify-content-center">
                    <Col>
                      <h2>Client Management</h2>
                    </Col>
                  </Row>

                  {loading && <p>Loading clients...</p>}
                  {error && <p className="text-danger">{error}</p>}

                  {!loading && !error && (
                    <div className="text-center mt-5">
                      <Button href="/add-client"
                        color="info"
                        size="sm"
                        className="add-client-btn mb-3"
                      >
                        Add Client
                      </Button>

                      <Table responsive className="client-table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Client Name</th>
                            <th>Address</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clients.map((client) => (
                            <tr key={client.id}>
                              <td>{client.id}</td>
                              <td>{client.name}</td>
                              <td>{client.address}</td>
                              <td className="d-flex flex-column align-items-center">
                                <Button 
                                  color="warning"
                                  size="sm"
                                  className="update-btn mb-2"
                                  href="/update-client"
                                >
                                  Update
                                </Button>
                                <Button
                                  color="danger"
                                  size="sm"
                                  onClick={() => this.deleteClient(client.id)}
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

export default ClientPage;
