import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";

const BookProfile = () => {
  const books = useSelector((state) => state.books);
  // console.log(books);

  const { bookSlug } = useParams();

  const book = books.find((book) => book.slug === bookSlug);

  if (!book) return <Redirect to="/" />;

  const membersIds = [...new Set(book.borrowedBy)];
  console.log(membersIds);

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.genre.length}</p>
      <p>{book.available}</p>
      <p>{book.borrowedBy.length}</p>
    </div>
  );
};

export default BookProfile;
