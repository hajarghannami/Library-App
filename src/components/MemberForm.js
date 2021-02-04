import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addMember } from "../store/actions";
import { Button, ButtonsWrapper } from "../styles";
import BackButton from "./buttons/BackButton";

const MemberForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    currentlyBorrowedBooks: [],
    membership: "",
  });

  const handleChange = (event) =>
    setMember({ ...member, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMember(member));
    history.push("/members");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Member Form</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-light ">First Name</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="firstName"
          value={member.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-light">Last Name</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="lastName"
          value={member.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-light">Membership</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="membership"
          value={member.membership}
          onChange={handleChange}
        />
      </div>

      <ButtonsWrapper>
        <Button type="submit">Add Member</Button>
        <BackButton path="/members" />
      </ButtonsWrapper>
    </form>
  );
};

export default MemberForm;
