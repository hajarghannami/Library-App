import membersData from "../members";
import booksData from "../books";

const initialState = {
  members: membersData,
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "DELETE_COOKIE":
    // We will delete the cookie here

    default:
      return state;
  }
};

export default reducer;
