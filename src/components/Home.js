import { Link } from "react-router-dom";
import { TagWrapper, Name, Emoji } from "../styles";

const Home = () => {
  return (
    <>
      <h1>Welcome To Your Library!</h1>
      <Link to="/members">
        <TagWrapper>
          <Emoji>⭐️</Emoji>
          <Name>Members</Name>
        </TagWrapper>
      </Link>
      <Link to="/books">
        <TagWrapper>
          <Emoji>📚</Emoji>
          <Name>Books</Name>
        </TagWrapper>
      </Link>
    </>
  );
};

export default Home;
