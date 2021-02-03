// ACTION TYPES
export const ADD_MEMBER = "ADD_MEMBER";
export const ADD_BOOK = "ADD_BOOK";
export const BORROW_RETURN = "BORROW_RETURN";

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

// Borrow & Return Book Action
export const borrowReturn = (updatedBook, updatedMember) => {
  return {
    type: BORROW_RETURN,
    payload: { updatedBook, updatedMember },
  };
};
