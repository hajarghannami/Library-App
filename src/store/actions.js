// ACTION TYPES
export const ADD_MEMBER = "ADD_MEMBER";
export const ADD_BOOK = "ADD_BOOK";
export const UPDATE_MEMBER = "UPDATE_MEMBER";
export const UPDATE_BOOK = "UPDATE_BOOK";

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

// Update Member Action
export const updateMember = (updatedMember) => {
  return {
    type: UPDATE_MEMBER,
    payload: { updatedMember },
  };
};

// Update Book Action
export const updateBook = (updatedBook) => {
  return {
    type: UPDATE_BOOK,
    payload: { updatedBook },
  };
};
