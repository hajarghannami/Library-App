import { useSelector } from "react-redux";
import MemberItem from "./MemberItem";
import AddButton from "./buttons/AddButton";
import BackButton from "./buttons/BackButton";
import { ButtonsWrapper } from "../styles";

const MembersList = () => {
  const members = useSelector((state) => state.members);
  // console.log(members);

  const membersList = members.map((member) => (
    <MemberItem key={member.id} member={member} />
  ));

  return (
    <div>
      <ButtonsWrapper>
        <AddButton type="member" />
        <BackButton path="/" />
      </ButtonsWrapper>

      {membersList}
    </div>
  );
};

export default MembersList;
