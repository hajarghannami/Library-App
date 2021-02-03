import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addMember } from "../store/actions";

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
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Member Form</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info ">First Name</span>
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
          <span className="btn btn-outline-info">Last Name</span>
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
          <span className="btn btn-outline-info">Membership</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="membership"
          value={member.membership}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-info float-right">
        Add Member
      </button>
    </form>
  );
};

export default MemberForm;
