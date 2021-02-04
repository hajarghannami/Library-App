import styled from "styled-components";

export const AppWrapper = styled.div`
  background-color: ${(props) => props.theme.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 500px;
  height: 80px;
  border-radius: 300px;
  padding: 0px 25px;
  margin-bottom: 15px;
  margin-top: 10px;

  cursor: pointer;
  user-select: none;

  background-color: rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const Emoji = styled.span`
  margin-right: 20px;
  font-size: 1.6em;
`;

export const Name = styled.span`
  flex-grow: 1;
  font-size: 1.2em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9); ;
`;

export const Info = styled.span`
  font-size: 0.5em;
  user-select: none;
  color: rgba(255, 255, 255, 0.3);
`;

export const MemberName = styled.span`
  flex-grow: 1;
  font-size: 1em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: ${(props) => props.color ?? "white"};
  color: ${(props) => props.textColor ?? "black"};

  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

  &:hover {
    box-shadow: 0 9px #aaa;
  }

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const ProfileEmoji = styled.span`
  font-size: 1em;
`;

export const ProfileName = styled.span`
  flex-grow: 1;
  font-size: 1.6em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9); ;
`;

export const ProfileInfo = styled.span`
  font-size: 0.9em;
  user-select: none;
  color: rgba(255, 255, 255, 0.9);
`;

export const BookName = styled.span`
  flex-grow: 1;
  font-size: 0.8em;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const BookEmoji = styled.span`
  margin-right: 20px;
  font-size: 1em;
`;

export const BookNameDetail = styled.span`
  flex-grow: 1;
  font-size: 1.6em;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.9);
`;

export const BookInfo = styled.span`
  font-size: 1em;
  user-select: none;
  color: rgba(255, 255, 255, 0.5);
`;
