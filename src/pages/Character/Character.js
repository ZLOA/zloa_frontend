import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../../layout/Nav";

export default function Character() {
  const navigate = useNavigate();
  const goToProfile = (data) => {
    navigate("/character/profile");
  };
  const goToSkill = (data) => {
    navigate("/character/skill");
  };

  const goToAvatar = (data) => {
    navigate("/character/avatar");
  };

  const goToHistory = (data) => {
    navigate("/character/history");
  };

  const goToExpedition = (data) => {
    navigate("/character/expedition");
  };

  const goToGuild = (data) => {
    navigate("/character/guild");
  };

  return (
    <>
      <Nav />
      <CharContainer>
        <CharAside>
          <div onClick={goToProfile}>능력치</div>
          <div onClick={goToSkill}>스킬</div>
          <div onClick={goToAvatar}>아바타</div>
          <div onClick={goToHistory}>히스토리</div>
          <div onClick={goToExpedition}>보유 캐릭터</div>
          <div onClick={goToGuild}>길드</div>
        </CharAside>
        <CharContent>
          <Outlet />
        </CharContent>
      </CharContainer>
    </>
  );
}

const CharContainer = styled.div`
  margin: auto;
  margin-top: 30px;
  width: 65vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
`;

const CharAside = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
`;

const CharContent = styled.div`
  border: 1px solid black;
  color: black;
  font-size: 100px;
`;
