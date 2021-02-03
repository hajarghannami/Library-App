import { Link } from "react-router-dom";

const AddButton = ({ type }) => {
  return (
    <Link to={type === "member" ? "/members/new" : "/books/new"}>
      <button type="button" class="btn btn-outline-primary">
        Add {type === "member" ? "Member" : "Book"}
      </button>
    </Link>
  );
};

export default AddButton;
