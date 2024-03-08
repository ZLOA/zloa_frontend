import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";

import CharacteristicTab from "./CharacteristicTab";
import EquipmentTab from "./EquipmentTab";
import CardTab from "./CardTab";
import SkillJewelryTab from "./SkillJewelryTab";
import AvatarTab from "./AvatarTab";

const tabs = ["특성/각인", "장비", "카드", "아바타", "보석/스킬"];
const tabData = {
  "특성/각인": <CharacteristicTab />,
  "장비": <EquipmentTab />,
  "카드": <CardTab />,
  "아바타": <AvatarTab />,
  "보석/스킬": <SkillJewelryTab />,
};

export default function CompResult() {
  const { charName1, charName2 } = useParams();

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <div>
        <div>
          <SearchContainer>
            <SearchBar value={charName1} />
            <Separator>VS</Separator>
            <SearchBar value={charName2} />
            <SearchButton>검색</SearchButton>
          </SearchContainer>
        </div>

        <CharInfo>
          <FlexWrap>
              <CharImg
                src="https://cdn-lostark.game.onstove.com/uploadfiles/notice/6ea307f6d8414e7c9bb89c2dbe124578.png"
                alt="스카우터"
              />
              <CharImg
                src="https://i.namu.wiki/i/nfCV0r1peFJ3uonmp47aNSBIHm2LHiqrFdl48qRo1Ue_c4Yip_qgccPO0uuHXqdg6rNLn5yWPX3R4qshcMRgFmPiXvJZsEFXk7ZMMu3CEVYGNyqlbNiyOilBVX0G9SU3WDSvCG_bF8MZiaoUbp7I-g.webp"
                alt="소서리스"
              />

            <CharCombat>
                <div>
                    1500000
                </div>
                <div>
                  실 전투력
                </div>
                <div>
                    1489000
                </div>
            </CharCombat>

            <CharAbilitis>
              <CharAbility end>
                <div>@아브렐슈드</div>
                <CharName>끄구마</CharName>
                <div>
                  <span>스카우터</span>
                  <span>*</span>
                  <span>1,630.83</span>
                </div>
              </CharAbility>
              <CharAbility>
                <div>@아브렐슈드</div>
                <CharName>끄구마</CharName>
                <div>
                  <span>스카우터</span>
                  <span>*</span>
                  <span>1,630.83</span>
                </div>
              </CharAbility>
            </CharAbilitis>
          </FlexWrap>

          <div>
            <FlexWrap>
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  isActive={tab === activeTab}
                >
                  {tab}
                </Tab>
              ))}
            </FlexWrap>
            <ResultArea>{tabData[activeTab]}</ResultArea>
          </div>
        </CharInfo>
      </div>
    </Container>
  );
}

console.log(tabData["카드"]);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1e1f;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
  height: 5vh;
  font-size: 25px;
  border: 1px solid #ddd;
  border-radius: 25px;
  padding: 5px;
  margin-right: 5px;
  transition: border 0.3s;
  &:focus {
    outline: none;
    border: 1px solid #3f9957;
  }
`;

const Separator = styled.div`
  margin: 0px 10px 10px 10px;
  font-size: 40px;
  color: #555;
`;

const SearchButton = styled.button`
  height: 5vh;
  width: 70px;
  margin-left: 25px;
  font-size: 16px;
  background-color: #3f9957;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #35824a;
  }
`;

const CharImg = styled.img`
  width: 48vw;
  height: auto;
  margin: 0px;
`;

const Tab = styled.div`
  cursor: pointer;
  flex: 1;
  padding: 10px;
  margin: 0px;
  background-color: ${(props) => (props.isActive ? "#1f1e1f" : "#524f52")};
  color: ${(props) => (props.isActive ? "white" : "#8a888a")};
  text-align: center;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#1f1e1f" : "#bbb")};
  }
`;

const ResultArea = styled.div`
  color: #c2bec2;
`;

const CharInfo = styled.div`
  border: solid 1px;
`;

const FlexWrap = styled.div`
    display: flex;
    position: relative;
`;

const CharCombat = styled.div`
  position:absolute;
  top:10;
  right:32%;
  color: white;
  font-size: 28px;
  font-weight: bold;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

const CharAbilitis = styled.div`

  position:absolute;
  bottom:0;
  right:33%;
  color: white;
  font-size: 18px;
  font-weight: bold;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

`;

const CharAbility = styled.div`
    ${(props) => {
    if(props.end) {
      return css`
        text-align: end;
      `;
    }
  }}
`;

const CharName = styled.div`
  font-size: 25px;
`;