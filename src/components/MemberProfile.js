import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import BookItem from "./BookItem";

const MemberProfile = () => {
  const members = useSelector((state) => state.members);
  // console.log(members);

  const books = useSelector((state) => state.books);
  // console.log(members);

  const { memberSlug } = useParams();

  const member = members.find((member) => member.slug === memberSlug);
  // console.log(member);

  if (!member) return <Redirect to="/" />;

  const borrowedBooks = [];
  member.currentlyBorrowedBooks.forEach((bookId) => {
    borrowedBooks.push(books.find((book) => book.id === bookId));
  });
  // console.log(borrowedBooks);

  const borrowedBooksList = borrowedBooks.map((borrowedBook) => (
    <BookItem key={borrowedBook.id} book={borrowedBook} />
  ));

  return (
    <div>
      <h1>{`${member.firstName} ${member.lastName}`}</h1>
      <h3>{member.membership}</h3>
      <p>{member.currentlyBorrowedBooks.length}</p>
      <div>{borrowedBooksList}</div>
    </div>
  );
};

export default MemberProfile;
