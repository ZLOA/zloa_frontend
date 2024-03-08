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

  const trash = [
    {
      tag: "서버",
      content: "아브렐슈드",
    },
    {
      tag: "길드",
      content: "6덕",
    },
    {
      tag: "클래스",
      content: "스카우터",
    },
    {
      tag: "칭호",
      content: "빛을 꺼트리는 자",
    },
    {
      tag: "전투",
      content: "60",
    },
    {
      tag: "아이템",
      content: "1630.00",
    },
    {
      tag: "원정대",
      content: "230",
    },
    {
      tag: "PVP",
      content: "20급",
    },
    {
      tag: "영지",
      content: "Lv.70 후엥후에엥",
    },
  ];

  return (
    <>
      <Nav />
      <CharContainer>
        <CharAside>
          <CharAsideImgContainer>
            <CharAsideCharInfo>
              {trash.map((d, i) => {
                return (
                  <CharAsideCharInfoWrapper key={i}>
                    <CharAsideCharInfoTag>{d.tag}</CharAsideCharInfoTag>
                    <div>{d.content}</div>
                  </CharAsideCharInfoWrapper>
                );
              })}
            </CharAsideCharInfo>
            <CharAsideImg />
          </CharAsideImgContainer>
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
  border: 2px solid #666;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  min-height: 89vh;
`;

const CharAsideImgContainer = styled.div`
  background-color: rgb(21, 24, 29);
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const CharAsideCharInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(9, 1fr);
  gap: 7px;
  margin: 5px;
`;

const CharAsideCharInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 15px;
`;

const CharAsideCharInfoTag = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const CharAsideImg = styled.div`
  width: 100%;
  padding-top: 140%;

  background-position: 50% 0%;
  background-repeat: no-repeat;
  background-image: url("https://img.lostark.co.kr/armory/8/efcfda75f82080bf5ddef0a4767de8aea4d37214f7fc30623bd351f437f86c86.png?v=20240227112717");
  background-size: cover;
`;

const CharContent = styled.div`
  /* border: 1px solid black; */
  color: black;
  font-size: 100px;
`;
