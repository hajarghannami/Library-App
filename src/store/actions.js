// ACTION TYPES
export const ADD_MEMBER = "ADD_MEMBER";

// Add Member Action
export const addMember = (newMember) => {
  return {
    type: ADD_MEMBER,
    payload: { newMember },
  };
};
