import styled from "styled-components";

const charData = {
  main: [
    {
      a: "공격력",
      b: 92563,
    },
    {
      a: "최대 생명력",
      b: 199544,
    },
  ],
  stat: [
    {
      a: "치명",
      b: 614,
      c: 680,
    },
    {
      a: "특화",
      b: 1618,
      c: 1822,
    },
    {
      a: "신속",
      b: 0,
      c: 60,
    },
    {
      a: "제압",
      b: 0,
      c: 55,
    },
    {
      a: "인내",
      b: 0,
      c: 54,
    },
    {
      a: "숙련",
      b: 0,
      c: 67,
    },
  ],
  engraving: [
    {
      Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_71.png",
      Name: "원한 Lv. 3",
    },
    {
      Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_03_40.png",
      Name: "예리한 둔기 Lv. 3",
    },
    {
      Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_170.png",
      Name: "바리케이드 Lv. 3",
    },
    {
      Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_210.png",
      Name: "돌격대장 Lv. 3",
    },
    {
      Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_235.png",
      Name: "아드레날린 Lv. 3",
    },
    {
      Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_217.png",
      Name: "진화의 유산 Lv. 1",
    },
  ],
};

const EngravingData = [
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_71.png",
    Name: "원한 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_03_40.png",
    Name: "예리한 둔기 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_170.png",
    Name: "바리케이드 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_210.png",
    Name: "돌격대장 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_217.png",
    Name: "진화의 유산 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_235.png",
    Name: "아드레날린 Lv. 2",
  },
];

export default function GoldCharacteristicTab() {
  return (
    <Container>
      <LeftContainer>
        {charData.main.map((d, i) => {
          return (
            <GridWrapper key={i}>
              <LabelDiv>{d.a}</LabelDiv>
              <div>{d.b}</div>
            </GridWrapper>
          );
        })}
        <BorderLine />
        {charData.stat.map((d, i) => {
          return (
            <GridWrapper key={i}>
              <LabelDiv>{d.a}</LabelDiv>
              <div>{`${d.b} ▶ ${d.c}`}</div>
            </GridWrapper>
          );
        })}
        <BorderLine />

        <GridWrapper>
          <EngravingLabel>각인 효과</EngravingLabel>
          <div>
            {charData.engraving.map((d, i) => {
              return (
                <EngravingWrapper key={i}>
                  <EngravingImg url={d.Icon} />
                  <div>{d.Name}</div>
                </EngravingWrapper>
              );
            })}
          </div>
        </GridWrapper>
      </LeftContainer>

      <MiddleContainer>
        <LabelDiv style={{ margin: "10px" }}>추천 목표 각인</LabelDiv>
        {EngravingData.map((d, i) => {
          return (
            <MiddleEngravingWrapper key={i}>
              <MiddleEngravingImg url={d.Icon} />
              <div>{d.Name}</div>
            </MiddleEngravingWrapper>
          );
        })}
        <SearchBtn>검색</SearchBtn>
        <SearchText>
          추천 각인에 해당하는 장신구를 검색하고
          <br /> 싶으시면 눌러주세요.
        </SearchText>
      </MiddleContainer>
      <></>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 2px solid #524f52;
  padding: 10px 0;
`;

const BorderLine = styled.div`
  border-bottom: 2px solid #524f52;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* padding: 5px 0; */
  font-size: 15px;
  font-weight: 500;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 10px;
`;

const LabelDiv = styled.div`
  background-color: #403d37;
  padding: 10px 0;
`;

const EngravingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const EngravingImg = styled.div`
  border-radius: 100%;

  width: 15%;
  padding-top: 15%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const EngravingLabel = styled.div`
  background-color: #403d37;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-right: 2px solid #524f52;
  text-align: center;
`;

const MiddleEngravingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  margin-left: 2vw;
  padding: 5px;
`;

const MiddleEngravingImg = styled.div`
  border-radius: 100%;

  width: 11%;
  padding-top: 11%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const SearchBtn = styled.div`
  margin: 10px auto;
  margin-top: 30px;
  padding: 10px 0;
  width: 70%;
  border-radius: 5px;
  border: 2px solid #524f52;
  cursor: pointer;

  &:hover {
    background-color: #403d37;
  }
`;
const SearchText = styled.div`
  line-height: 1.5;
  margin-bottom: 20px;
`;
