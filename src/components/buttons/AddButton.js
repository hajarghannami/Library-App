import { Link } from "react-router-dom";
import { ButtonsWrapper, Button } from "../../styles";

const AddButton = ({ type }) => {
  return (
    <Link to={type === "member" ? "/members/new" : "/books/new"}>
      <Button>Add {type === "member" ? "Member" : "Book"}</Button>
    </Link>
  );
};

export default AddButton;
