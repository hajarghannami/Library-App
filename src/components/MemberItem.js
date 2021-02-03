import { Link } from "react-router-dom";

const MemberItem = ({ member }) => {
  return (
    <div>
      <Link to={`/members/${member.slug}`}>
        <h1>{`${member.firstName} ${member.lastName}`}</h1>
      </Link>
      <h3>{member.membership}</h3>
      <p>{member.currentlyBorrowedBooks.length}</p>
    </div>
  );
};

export default MemberItem;
