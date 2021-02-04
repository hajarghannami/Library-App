import { useState } from "react";
import { useSelector } from "react-redux";
import { ButtonsWrapper } from "../styles";
import BookItem from "./BookItem";
import AddButton from "./buttons/AddButton";
import BackButton from "./buttons/BackButton";
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

      <ButtonsWrapper>
        <AddButton type="book" />
        <BackButton path="/" />
      </ButtonsWrapper>

      {booksList}
    </div>
  );
};

export default BooksList;
