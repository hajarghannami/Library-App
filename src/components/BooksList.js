import { useState } from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";
import AddButton from "./buttons/AddButton";
import SearchBar from "./SearchBar";

const BooksList = () => {
  const [query, setQuery] = useState("");

  const books = useSelector((state) => state.books);
  // console.log(books);

  const booksList = books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.join(" ").toLowerCase().includes(query.toLowerCase())
    )
    .map((book) => <BookItem key={book.id} book={book} />);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {booksList}
      <AddButton type="book" />
    </div>
  );
};

export default BooksList;
