import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import MemberItem from "./MemberItem";

const BookDetails = () => {
  const members = useSelector((state) => state.members);
  // console.log(members);

  const books = useSelector((state) => state.books);
  // console.log(books);

  const { bookSlug } = useParams();

  const book = books.find((book) => book.slug === bookSlug);

  if (!book) return <Redirect to="/" />;

  const membersIds = [...new Set(book.borrowedBy)];
  // console.log(membersIds);

  const membersBorrowed = [];
  membersIds.forEach((memberId) => {
    membersBorrowed.push(members.find((member) => member.id === memberId));
  });
  // console.log(membersBorrowed);

  const membersBorrowedList = membersBorrowed.map((memberBorrowed) => (
    <MemberItem key={memberBorrowed.id} member={memberBorrowed} />
  ));

  return (
    <div>
      <h1>{book.title}</h1>
      <h3>{book.author}</h3>
      <p>{book.genre.length}</p>
      <p>{book.available}</p>
      <p>{book.borrowedBy.length}</p>
      <br />
      <h1>Members who borrowed: </h1>
      <div>{membersBorrowedList}</div>
    </div>
  );
};

export default BookDetails;
