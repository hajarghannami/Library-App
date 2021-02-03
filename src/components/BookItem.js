import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
  return (
    <div>
      <Link to={`/books/${book.slug}`}>
        <h1>{book.title}</h1>
      </Link>
      <h3>{book.author}</h3>
      <p>{book.genre.length}</p>
      <p>{book.available}</p>
      <p>{book.available}</p>
      <p>{book.borrowedBy.length}</p>
    </div>
  );
};

export default BookItem;
