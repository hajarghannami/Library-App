// ACTION TYPES
export const ADD_MEMBER = "ADD_MEMBER";
export const ADD_BOOK = "ADD_BOOK";

// Add Member Action
export const addMember = (newMember) => {
  return {
    type: ADD_MEMBER,
    payload: { newMember },
  };
};

// Add Book Action
export const addBook = (newBook) => {
  return {
    type: ADD_BOOK,
    payload: { newBook },
  };
};
