import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { ProfileEmoji, ProfileName, ProfileInfo } from "../styles";
import BookItem from "./BookItem";
import BackButton from "./buttons/BackButton";
import ReturnButton from "./buttons/ReturnButton";

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
    <>
      <BookItem key={borrowedBook.id} book={borrowedBook} />
      <ReturnButton member={member} book={borrowedBook} />
    </>
  ));

  const handleMembership = () => {
    if (member.membership === "silver") return "🥈";
    else if (member.membership === "gold") return "🥇";
    else return "🥉";
  };

  const handleNumberOfBooks = () => {
    if (member.currentlyBorrowedBooks.length === 1) return "1️⃣";
    else if (member.currentlyBorrowedBooks.length === 2) return "2️⃣";
    else if (member.currentlyBorrowedBooks.length === 3) return "3️⃣";
    else if (member.currentlyBorrowedBooks.length === 4) return "4️⃣";
    else if (member.currentlyBorrowedBooks.length === 5) return "5️⃣";
    else return "0️⃣";
  };

  return (
    <div>
      <BackButton path="/members" />
      <br />
      <br />
      <ProfileName>{`${member.firstName} ${member.lastName}`}</ProfileName>
      <br />
      <ProfileEmoji>{`Membership: ${member.membership.toUpperCase()} ${handleMembership()}`}</ProfileEmoji>
      <br />
      <ProfileInfo>{`# of currently borrowed books : ${handleNumberOfBooks()}`}</ProfileInfo>
      <br />
      <br />
      <ProfileInfo>{`Borrowed Books:`}</ProfileInfo>
      <div>{borrowedBooksList}</div>
    </div>
  );
};

export default MemberProfile;
