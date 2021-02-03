import membersData from "../members";
import booksData from "../books";
import slugify from "react-slugify";
import { ADD_MEMBER, ADD_BOOK } from "./actions";

const initialState = {
  members: membersData,
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      const { newMember } = action.payload;
      newMember.id = state.members[state.members.length - 1].id + 1;
      const name = newMember.firstName + " " + newMember.lastName;
      newMember.slug = slugify(name);
      return {
        ...state,
        members: [...state.members, newMember],
      };

    case ADD_BOOK:
      const { newBook } = action.payload;
      newBook.id = state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(newBook.title);
      return {
        ...state,
        books: [...state.books, newBook],
      };

    default:
      return state;
  }
};

export default reducer;
