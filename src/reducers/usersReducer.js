const initialState = {
    users: [
      {
        name: "Joshua Mensah",
        email: "Joewy4me@yahoo.com",
        gen: 15,
        id: "094484fdfkjskks"
      }, 

      {
        name: "Susana Mensah",
        email: "Siawsusan84@gmail.com",
        gen: 10,
        id: "hfhfdkfd98833"
      },
      {
        name: "Agnes Siaw",
        email: "Siawagnes89@gmail.com",
        gen: 4,
        id: "nhff877370"
      },
      ],
};

// Use the initialState as a default value
const usersReducer = (state = initialState, action) => {
  // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      // Do something here based on the different types of actions
        case "ADD_USER":
            console.log(action.payload)
            return {...state, users: [...state.users, action.payload]};

        case "DELETE_USER":
          let undeletedUsers = state.users.filter((user) => user.id !== action.payload);
          return {...state, users: undeletedUsers}

        case "EDIT_USER":
            return {...state, users: state.users.map((user =>
              user.id === action.payload.id ? action.payload : user)
              ),}
          
        default:
          // If this reducer doesn't recognize the action type, or doesn't
          // care about this specific action, return the existing state unchanged
            return state;
    }
}

export default usersReducer;