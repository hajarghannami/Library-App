import { useDispatch } from "react-redux";
import { borrowReturn } from "../../store/actions";

const ReturnButton = ({ member, book }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    let updatedBook = {
      ...book,
      available: true,
    };
    let updatedMember = {
      ...member,
      currentlyBorrowedBooks: member.currentlyBorrowedBooks.filter(
        (bookId) => bookId !== updatedBook.id
      ),
    };
    dispatch(borrowReturn(updatedBook, updatedMember));
  };

  return (
    <button type="button" class="btn btn-light" onClick={handleClick}>
      Return
    </button>
  );
};

export default ReturnButton;
