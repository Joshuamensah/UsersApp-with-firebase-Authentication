// Action creator for adding user
// This function accept the new user we'll be adding
// Since this function would be used outside of this file, we need to export it as a named export
export const addUser = (newUser) => {
  // returning an action which is basically on object that has type and payload
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add(newUser)
      .then((res) => {
        console.log("User added successfully!");
      })
      .catch((err) => console.log("An error occured!", err));
  };
};

// action creator for deleting user
export const deleteUser = (userId) => {
  // checking to see if our action creator here is fired when the button is clicked using console.log
  // console.log("action fired", userId)
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {
        console.log("user deleted successfully!");
      })
      .catch((err) => {
        console.log("An error occured!", err);
      })
  };
};

// Action creator for editing user
export const editUser = (updatedUser) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection("users").doc(updatedUser.id).update(updatedUser).then(() => {
      console.log("user updated successfully!");
    }).catch((err) => {
      console.log("An error occured!", err);
    })
  }
};
