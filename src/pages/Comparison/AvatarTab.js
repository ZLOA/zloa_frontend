import React from "react";
import styled from "styled-components";
/**
 * 아바타 탭
 * 리버스 해결, 전압 유무 데이터 확인, 색깔데이터 처리
 */

const AvatarTitles = [
  "무기",
  "머리",
  "상의",
  "하의",
  "덧입기무기",
  "덧입기머리",
  "덧입기상의",
  "덧입기하의",
  "얼굴1",
  "얼굴2",
  "악기",
  "나침반",
  "부적",
  "문장",
];

const characterData = [
  {
    avatar: [
      { type: "무기", name: "자비로운 도약의 서브 머신건", image: "#" },
      { type: "머리", name: "자비로운 도약 머리", image: "#" },
      { type: "상의", name: "자비로운 도약 상의", image: "#" },
      { type: "하의", name: "자비로운 하의", image: "#" },
      {
        type: "덧입기무기",
        name: "3주년 추억 서브 머신건(이벤트)",
        image: "#",
      },
      { type: "덧입기머리", name: "순진한 토토 후드 모자", image: "#" },
      { type: "덧입기상의", name: "순진한 토토 후드 점퍼", image: "#" },
      { type: "덧입기하의", name: "3주년 추억 하의(이벤트)", image: "#" },
      { type: "얼굴1", name: "고혹적인 고딕 메이크업(귀속)", image: "#" },
      { type: "얼굴2", name: "3주년 추억 얼굴2(이벤트)", image: "#" },
      { type: "악기", name: "별무리 악기", image: "#" },
      { type: "나침반", name: "특제 순은 나침반", image: "#" },
      { type: "부적", name: "영롱한 보석 부적", image: "#" },
      { type: "문장", name: "문장", image: "#" },
    ],
  },
  // 두번째 캐릭(인덱스로 구분)
  {
    avatar: [
      { type: "무기", name: "자비로운 도약의 서브 머신건", image: "#" },
      { type: "머리", name: "자비로운 도약 머리", image: "#" },
      { type: "상의", name: "자비로운 도약 상의", image: "#" },
      { type: "하의", name: "자비로운 하의", image: "#" },
      {
        type: "덧입기무기",
        name: "3주년 추억 서브 머신건(이벤트)",
        image: "#",
      },
      { type: "덧입기머리", name: "순진한 토토 후드 모자", image: "#" },
      { type: "덧입기상의", name: "순진한 토토 후드 점퍼", image: "#" },
      { type: "덧입기하의", name: "3주년 추억 하의(이벤트)", image: "#" },
      { type: "얼굴1", name: "고혹적인 고딕 메이크업(귀속)", image: "#" },
      { type: "얼굴2", name: "3주년 추억 얼굴2(이벤트)", image: "#" },
      { type: "악기", name: "별무리 악기", image: "#" },
      { type: "나침반", name: "특제 순은 나침반", image: "#" },
      { type: "부적", name: "영롱한 보석 부적", image: "#" },
      { type: "문장", name: "문장", image: "#" },
    ],
  },
];

const AvatarTab = () => {
  const renderAvatarItems = (data, reverse) => {
    return (
      <AvatarColumn key={0} reverse={reverse}>
        {data.avatar.map((item, index) => (
          <AvatarContainer key={index} reverse={reverse}>
            <AvatarItem>{item.name}</AvatarItem>
            <AvatarImage src={item.image} alt={item.type}></AvatarImage>
          </AvatarContainer>
        ))}
      </AvatarColumn>
    );
  };

  const renderAvatarTitles = (data) => {
    return (
      <AvatarColumn middle>
        {data.map((name, index) => (
          <AvatarTitle>{name}</AvatarTitle>
        ))}
      </AvatarColumn>
    );
  };

  return (
    <AvatarBigContainer>
      <AvatarsContainer>
        {renderAvatarItems(characterData[0], false)}
        {renderAvatarTitles(AvatarTitles)}
        {renderAvatarItems(characterData[1], true)}
      </AvatarsContainer>
    </AvatarBigContainer>
  );
};

export default AvatarTab;

const AvatarBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #1f1e1f;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ reverse }) => (reverse ? "0 0 0 10px" : "0 10px 0 0")};
  text-align: ${({ reverse }) => (reverse ? "left" : "right")};
`;

const AvatarItem = styled.div`
  margin: 5px;
  height: 60px;
`;

const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

// 각인 큰 컨
const AvatarsContainer = styled.div`
  margin-top: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90vw;
`;

const AvatarColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: ${({ middle, reverse }) =>
    middle ? "center" : reverse ? "left" : "right"};

  justify-content: "flex-start";
  align-items: ${({ middle, reverse }) =>
    middle ? "center" : reverse ? "flex-start" : "flex-end"};
  background-color: "transparent";
  max-width: ${({ middle }) => (middle ? "180px" : "none")};
`;

const AvatarTitle = styled.div`
  background-color: #403d37;
  margin: 8px 0;
  width: 100px;
  height: 54px;
`;

