import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import Users from './components/Users';
import AddUserForm from './components/AddUserForm';
import { logoutUser } from './actions/authActions';
import {connect} from 'react-redux';

class App extends Component {

  render() {
  return (
    <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <h4>Add User</h4>
            <br/>
            <AddUserForm addUser={this.addNewUser} />
          </Col>
          <Col>
          <h4>Codetrain Users</h4>
          <button 
            className="btn btn-warning" 
            onClick={() => this.props.logoutUser()}>Logout</button>
          <br/><br />
            <Users 
              deleteUser={this.deleteUser} 
              editUser={this.editUser} 
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
}

export default connect(null, { logoutUser }) (App);
