import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addBook } from "../store/actions";

const BookForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [book, setBook] = useState({
    author: "",
    title: "",
    genre: [],
    available: true,
    borrowedBy: [],
  });

  const handleChange = (event) =>
    setBook({ ...book, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(book));
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Book Form</h1>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info ">Book Title</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="title"
          value={book.title}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="btn btn-outline-info">Book Author</span>
        </div>
        <input
          className="form-control"
          type="text"
          name="author"
          value={book.author}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-info float-right">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
