import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const tabs = ["특성/각인", "장비", "카드", "아바타", "보석", "스킬"];
const tabData = {
  "특성/각인": (
    <div>
      <h2>특성/각인 탭</h2>
      <p>내용이 들어갈 자리입니다.</p>
      <p>컴포넌트도 넣을 수 있습니다 ㅎㅎㅎ</p>
    </div>
  ),
  장비: (
    <div>
      <h2>장비 탭</h2>
      <p>내용이 들어갈 자리입니다.</p>
      <p>컴포넌트도 넣을 수 있습니다 ㅎㅎㅎ</p>
    </div>
  ),
  카드: (
    <div>
      <h2>카드 탭</h2>
      <p>내용이 들어갈 자리입니다.</p>
      <p>컴포넌트도 넣을 수 있습니다 ㅎㅎㅎ</p>
    </div>
  ),
  아바타: (
    <div>
      <h2>아바타 탭</h2>
      <p>내용이 들어갈 자리입니다.</p>
      <p>컴포넌트도 넣을 수 있습니다 ㅎㅎㅎ</p>
    </div>
  ),
  보석: (
    <div>
      <h2>보석 탭</h2>
      <p>내용이 들어갈 자리입니다.</p>
      <p>컴포넌트도 넣을 수 있습니다 ㅎㅎㅎ</p>
    </div>
  ),
  스킬: (
    <div>
      <h2>스킬 탭</h2>
      <p>내용이 들어갈 자리입니다.</p>
      <p>컴포넌트도 넣을 수 있습니다 ㅎㅎㅎ</p>
    </div>
  ),
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
`;
