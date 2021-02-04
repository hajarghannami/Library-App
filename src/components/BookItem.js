import { Link } from "react-router-dom";
import { Emoji, BookName, BookInfo, TagWrapper } from "../styles";

const BookItem = ({ book }) => {
  const handleAvailability = () => {
    if (book.available === true) return "🟢";
    else return "🔴";
  };

  return (
    <TagWrapper>
      <Emoji>{handleAvailability()}</Emoji>
      <Link to={`/books/${book.slug}`}>
        <BookName>{book.title}</BookName>
      </Link>
    </TagWrapper>
  );
};

export default BookItem;
