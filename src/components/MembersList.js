import { useSelector } from "react-redux";
import MemberItem from "./MemberItem";
import AddButton from "./buttons/AddButton";

const MembersList = () => {
  const members = useSelector((state) => state.members);
  // console.log(members);

  const membersList = members.map((member) => (
    <MemberItem key={member.id} member={member} />
  ));

  return (
    <div>
      <AddButton type="member" />
      {membersList}
    </div>
  );
};

export default MembersList;
