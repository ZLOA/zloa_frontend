import styled from "styled-components";

const ClassImgData = [
  {
    name: "창술사",
    icon: "lancemaster",
  },
  {
    name: "블레이드",
    icon: "blade",
  },
  {
    name: "바드",
    icon: "bard",
  },
  {
    name: "소울이터",
    icon: "souleater",
  },
  {
    name: "소서리스",
    icon: "sorceress",
  },
];
export default function PossessChar({
  level,
  className,
  name,
  itemLevel,
  guild,
}) {
  return (
    <Container>
      <LevelColor/>
      <CharImgWrapper>
        <CharImg
          url={`https://cdn.korlark.com/lostark/avatars/${
            ClassImgData.find((item) => item.name === className).icon
          }.png`}
        />
      </CharImgWrapper>
      <CharTextWrapper>
        <div>
          Lv.{level} {className}
        </div>
        <div>{name}</div>
        <BetweenWrapper>
          <div>{itemLevel}</div>
          <div>{guild}</div>
        </BetweenWrapper>
      </CharTextWrapper>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 5px;

  display: grid;
  grid-template-columns: 1fr 12fr 48fr;
`;

const LevelColor = styled.div`
    background-color: orange;
    border-radius: 5px 0 0 5px;
`
const CharImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 10px;
`;

const CharImg = styled.div`
  border-radius: 100%;

  width: 100%;
  padding-top: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const CharTextWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  padding: 10px;
  gap: 10px;
`;

const BetweenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
