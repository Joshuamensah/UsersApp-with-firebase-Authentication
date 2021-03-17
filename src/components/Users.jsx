import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Container, Row } from "react-bootstrap";
import User from "./User";

const Users = ({ firestoreData, requested, requesting, ...props }) => {
  let whatToDisplay;
  if (requesting) whatToDisplay = <p>Loading...</p>;
  else if (requested && firestoreData.length === 0)
    whatToDisplay = <p>No users added</p>;
  else if (requested && firestoreData.length > 0)
    whatToDisplay = firestoreData.map((user) => {
      return <User userInfo={user} key={user.id} editUser={props.editUser} />;
    });

  return (
    <Container>
      <Row>{whatToDisplay}</Row>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  usersData: state.usersState.users,
  firestoreData: state.firestore.ordered.users,
  requesting: state.firestore.status.requesting.users,
  requested: state.firestore.status.requested.users,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["users"])
)(Users);
