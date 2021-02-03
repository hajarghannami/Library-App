import membersData from "../members";
import booksData from "../books";
import slugify from "react-slugify";
import { ADD_MEMBER } from "./actions";

const initialState = {
  members: membersData,
  books: booksData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MEMBER:
      const { newMember } = action.payload;
      newMember.id = state.members[state.members.length - 1].id + 1;
      newMember.slug = slugify(newMember.name);
      return {
        ...state,
        members: [...state.members, newMember],
      };

    default:
      return state;
  }
};

export default reducer;
