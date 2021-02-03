import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const BooksList = () => {
  const books = useSelector((state) => state.books);
  // console.log(books);

  const booksList = books.map((book) => <BookItem key={book.id} book={book} />);

  return <div>{booksList}</div>;
};

export default BooksList;
