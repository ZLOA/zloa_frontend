import styled from "styled-components";
import { useParams } from "react-router-dom";
import Nav from "../../layout/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

import CharAvatar from "./CharAvatar";
import CharExpedition from "./CharExpedition";
import CharGuild from "./CharGuild";
import CharHistory from "./CharHistory";
import CharProfile from "./CharProfile";
import CharSkill from "./CharSkill";

export default function Character() {
  const [responseData, setResponseData] = useState(null);
  const param = useParams();

  const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5812/zloaApi/character/characters/profile?characterName=${param.id}`
      );

      setResponseData(response.data);

      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchProfileData();
    // eslint-disable-next-line
  }, [param]);

  useEffect(() => {
    fetchProfileData();
    // eslint-disable-next-line
  }, []);

  const tabs = ["능력치", "스킬", "아바타", "히스토리", "보유 캐릭터", "길드"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = {
    능력치: (
      <CharProfile
        equip={responseData?.ArmoryEquipment}
        gem={responseData?.ArmoryGem}
        stat={responseData?.Stats}
        engraving={responseData?.ArmoryEngraving}
        card={responseData?.ArmoryCard}
      />
    ),
    스킬: <CharSkill />,
    아바타: <CharAvatar />,
    히스토리: <CharHistory />,
    "보유 캐릭터": <CharExpedition data={responseData?.ArmoryEquipment} />,
    길드: <CharGuild />,
  };

  return (
    <>
      {responseData && (
        <>
          <Nav />
          <CharContainer>
            <CharAside>
              <CharAsideImgContainer>
                <CharAsideCharInfo>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>서버</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.ServerName}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>길드</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.GuildName ?? "-"}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>클래스</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.CharacterClassName}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>칭호</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.Title ?? "-"}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>전투</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.CharacterLevel}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>아이템</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.ItemMaxLevel}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>원정대</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.ExpeditionLevel}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>PVP</CharAsideCharInfoTag>
                    <div>{responseData.ArmoryProfile.PvpGradeName}</div>
                  </CharAsideCharInfoWrapper>
                  <CharAsideCharInfoWrapper>
                    <CharAsideCharInfoTag>영지</CharAsideCharInfoTag>
                    <div>{`Lv.${responseData.ArmoryProfile.TownLevel} ${responseData.ArmoryProfile.TownName}`}</div>
                  </CharAsideCharInfoWrapper>
                </CharAsideCharInfo>
                <CharAsideImg />
              </CharAsideImgContainer>
              <FlexWrap>
                {tabs.map((tab) => (
                  <Tab
                    key={tab}
                    onClick={() => handleTabClick(tab)}
                    isActive={tab === activeTab}
                  >
                    <TabContent isActive={tab === activeTab}>{tab}</TabContent>
                  </Tab>
                ))}
              </FlexWrap>
            </CharAside>
            <CharContent>{tabData[activeTab]}</CharContent>
          </CharContainer>
        </>
      )}
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
  font-size: 100px;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Tab = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 15px;
`;

const TabContent = styled.div`
  padding-bottom: 5px;
  border-bottom: ${(props) => (props.isActive ? "1px solid white" : "none")};
  font-weight: ${(props) => (props.isActive ? "bold" : "default")};
`;
