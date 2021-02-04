import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import { borrowReturn } from "../store/actions";
import MemberItem from "./MemberItem";
import { BookNameDetail, BookInfo, BookName } from "../styles";
import BackButton from "./buttons/BackButton";

const BookDetails = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.books);
  // console.log(books);

  const members = useSelector((state) => state.members);
  // console.log(members);

  const { bookSlug } = useParams();

  const book = books.find((book) => book.slug === bookSlug);

  if (!book) return <Redirect to="/" />;

  const membersIds = [...new Set(book.borrowedBy)];
  // console.log(membersIds);

  const membersBorrowed = [];
  membersIds.forEach((memberId) => {
    membersBorrowed.push(members.find((member) => member.id === memberId));
  });
  // console.log(membersBorrowed); >> better to replace forEach & push with map.

  const membersBorrowedList = membersBorrowed.map((memberBorrowed) => (
    <MemberItem key={memberBorrowed.id} member={memberBorrowed} />
  ));

  const handleClick = (member) => {
    const borrowedBooksNumber = member.currentlyBorrowedBooks.length;
    if (member.membership === "silver") {
      if (borrowedBooksNumber < 2) {
        updateFinally(member);
      } else
        alert(
          `${member.firstName} is not allowed to borrow more books due to the membership level`
        );
    } else if (member.membership === "gold") {
      if (borrowedBooksNumber < 3) {
        updateFinally(member);
      } else
        alert(
          `${member.firstName} is not allowed to borrow more books due to the membership level`
        );
    } else {
      if (borrowedBooksNumber < 5) {
        updateFinally(member);
      } else
        alert(
          `${member.firstName} is not allowed to borrow more books due to the membership level`
        );
    }
    console.log(member);
  };

  const updateFinally = (member) => {
    let updatedBook = {
      ...book,
      available: false,
      borrowedBy: [...book.borrowedBy, member.id],
    };
    let updatedMember = {
      ...member,
      currentlyBorrowedBooks: [...member.currentlyBorrowedBooks, book.id],
    };
    dispatch(borrowReturn(updatedBook, updatedMember));
  };

  const membersList = members.map((member) => (
    <Dropdown.Item
      key={member.id}
      as="button"
      onClick={() => handleClick(member)}
    >{`${member.firstName} ${member.lastName}`}</Dropdown.Item>
  ));

  const handleAvailability = () => {
    if (book.available === true) return "🟢";
    else return "🔴";
  };

  return (
    <div>
      <BackButton path="/books" />
      <br />
      <br />
      <BookNameDetail>{`${handleAvailability()} ${book.title}`}</BookNameDetail>
      <br />
      <BookName>{book.author}</BookName>
      <p>{book.genre.length}</p>

      <BookInfo>{`Book was Borrowed ${book.borrowedBy.length} times`}</BookInfo>
      <br />
      <br />
      <Dropdown>
        <Dropdown.Toggle disabled={!book.available} id="dropdown-basic">
          Borrow
        </Dropdown.Toggle>
        <Dropdown.Menu>{membersList}</Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      <BookInfo>Members who borrowed: </BookInfo>
      <div>{membersBorrowedList}</div>
    </div>
  );
};

export default BookDetails;
