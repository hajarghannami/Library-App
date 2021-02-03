import { useSelector } from "react-redux";
import MemberItem from "./MemberItem";

const MembersList = () => {
  const members = useSelector((state) => state.members);
  // console.log(members);

  const membersList = members.map((member) => (
    <MemberItem key={member.id} member={member} />
  ));

  return <div>{membersList}</div>;
};

export default MembersList;
