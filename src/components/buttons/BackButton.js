import { Link } from "react-router-dom";
import { Button } from "../../styles";

const BackButton = ({ path }) => {
  return (
    <Link to={path}>
      <Button color="tomato" textColor="white">
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
