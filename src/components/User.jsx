import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/usersActions';
import EditUserForm from './EditUserForm';

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.removeUser(props.userInfo.id);
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userInfo={props.userInfo} closeModal={handleClose} />
        </Modal.Body>
      </Modal>

      <Col md="4" style={{ marginBottom: "1rem" }}>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              Codetrain Name
            </Card.Subtitle>
            <Card.Title>{props.userInfo.name}</Card.Title>
            <Card.Text>
              {/* <p>Email: {props.userInfo.email}</p> */}
              {/* <p>Gen: {props.userInfo.gen}</p> */}
              Email: {props.userInfo.email}
            </Card.Text>
            <Card.Text>Gen: {props.userInfo.gen}</Card.Text>
            <Card.Link href="#" onClick={handleShow}>
              Edit
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

const mapDispatchToProps = {
  removeUser: deleteUser
};

export default connect(null, mapDispatchToProps)(User);
