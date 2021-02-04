import { Link } from "react-router-dom";
import { TagWrapper, Emoji, MemberName, Info } from "../styles";

const MemberItem = ({ member }) => {
  const handleMembership = () => {
    if (member.membership === "silver") return "🥈";
    else if (member.membership === "gold") return "🥇";
    else return "🥉";
  };
  return (
    <Link to={`/members/${member.slug}`}>
      <TagWrapper>
        <Emoji>{handleMembership()}</Emoji>
        <MemberName>{`${member.firstName} ${member.lastName}`}</MemberName>
        <Info>{`Books: ${member.currentlyBorrowedBooks.length}`}</Info>
      </TagWrapper>
    </Link>
  );
};

export default MemberItem;
