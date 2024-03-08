import React, { useState } from "react";
import styled, { css } from "styled-components";
import Nav from "../../layout/Nav";
import GoldCharacteristicTab from "./GoldCharacteristicTab";
import GoldEquipmentTab from "./GoldEquipmentTab";
import GoldCardTab from "./GoldCardTab";
import GoldAvatarTab from "./GoldAvatarTab";
import GoldJewelTab from "./GoldJewelTap";
import GoldEtcTab from "./GoldEtcTab";

const GoldData = [
  {
    a: "장비 강화",
    b: "1800000G",
    c: "460000⬆",
  },
  {
    a: "카드",
    b: "3000000G",
    c: "2600400⬆",
  },
  {
    a: "보석",
    b: "4000000G",
    c: "560000⬆",
  },
];

const tabs = ["특성/각인", "장비", "카드", "아바타", "보석", "팔찌/엘릭서"];
const tabData = {
  "특성/각인": <GoldCharacteristicTab />,
  장비: <GoldEquipmentTab />,
  카드: <GoldCardTab />,
  아바타: <GoldAvatarTab />,
  보석: <GoldJewelTab />,
  "팔찌/엘릭서": <GoldEtcTab />,
};

export default function Gold() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Nav />
      <GoldContainer>
        <CharImgWrapper>
          <CharImg
            url={
              "https://cdn-lostark.game.onstove.com/uploadfiles/notice/6ea307f6d8414e7c9bb89c2dbe124578.png"
            }
          />
          <BattlePowerText>
            <div>실 전투력: 1500000</div>
            <div style={{ fontSize: "35px", marginBottom: "5px" }}>⇩</div>
            <div>목표 전투력: 20000000</div>
          </BattlePowerText>
          <CharInfoText>
            <div>@아브렐슈드</div>
            <div style={{ fontWeight: "bold" }}>끄구마</div>
            <div>스카우터 Lv.1631.33</div>
          </CharInfoText>
        </CharImgWrapper>

        <div
          style={{
            borderTop: "2px solid #666",
            borderBottom: "2px solid #666",
          }}
        >
          <GridWrapper>
            <BorderBox bottom={1} right={1}>
              추천
            </BorderBox>
            <BorderBox bottom={1} right={1}>
              예상 골드 소모량
            </BorderBox>
            <BorderBox bottom={1}>예상 전투력 상승치</BorderBox>
          </GridWrapper>
          {GoldData.map((d, i) => {
            return (
              <GridWrapper key={i}>
                <BorderBox right={1}>{d.a}</BorderBox>
                <BorderBox right={1}>{d.b}</BorderBox>
                <BorderBox>{d.c}</BorderBox>
              </GridWrapper>
            );
          })}
        </div>

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
      </GoldContainer>
    </>
  );
}

const GoldContainer = styled.div`
  width: 65vw;
  border: 2px solid #666;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  background-color: #1f1e1f;
  color: #c2bec2;
`;

const CharImgWrapper = styled.div`
  width: 100%;
  background-color: rgb(21, 24, 29);
  position: relative;
`;

const CharImg = styled.div`
  width: 80%;
  padding-top: 33%;

  background-position: -70% 100%;
  background-repeat: no-repeat;
  background-image: url("https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/information/class/img_detail_scouter.png?800ede5850a71499df67");
  background-size: 80% 112%;
`;

const BattlePowerText = styled.div`
  position: absolute;

  top: 5%;
  right: 5%;

  font-size: 25px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const CharInfoText = styled.div`
  position: absolute;

  bottom: 5%;
  right: 5%;

  font-size: 20px;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: end;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 25px;
  font-weight: 500;
`;

const BorderBox = styled.div`
  padding: 10px 0;
  ${(props) => {
    if (props.right) {
      return css`
        border-right: 2px solid #666;
      `;
    }
  }}
  ${(props) => {
    if (props.bottom) {
      return css`
        border-bottom: 2px solid #666;
      `;
    }
  }}
`;

const FlexWrap = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Tab = styled.div`
  cursor: pointer;
  flex: 1;
  padding: 15px 0;
  margin: 0px;
  background-color: ${(props) => (props.isActive ? "#1f1e1f" : "#524f52")};
  color: ${(props) => (props.isActive ? "white" : "#8a888a")};
  text-align: center;
  border-top: 2px solid #524f52;

  &:hover {
    background-color: ${(props) => (props.isActive ? "#1f1e1f" : "#bbb")};
  }
`;

const ResultArea = styled.div`
  color: #c2bec2;
  /* padding: 10px; */
`;
