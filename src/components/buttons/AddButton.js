import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to="/members/new">
      <button type="button" class="btn btn-outline-primary">
        Add Member
      </button>
    </Link>
  );
};

export default AddButton;
