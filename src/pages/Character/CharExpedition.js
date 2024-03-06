import styled from "styled-components";
import PossessChar from "../../conponents/molecules/PossessChar";

const ExpeditionData = [
  {
    level: 60,
    className: "창술사",
    name: "졸업싫어요",
    itemLevel: 1630.33,
    guild: "6덕"
  },
  {
    level: 60,
    className: "블레이드",
    name: "집에가고파",
    itemLevel: 1600.33,
    guild: "6덕"
  },
  {
    level: 60,
    className: "바드",
    name: "졸업싫어요",
    itemLevel: 1630.33,
    guild: "6덕"
  },
  {
    level: 60,
    className: "소울이터",
    name: "졸업싫어요",
    itemLevel: 1630.33,
    guild: "6덕"
  },
  {
    level: 60,
    className: "소서리스",
    name: "졸업싫어요",
    itemLevel: 1630.33,
    guild: "6덕"
  },
];

export default function CharExpedition() {
  return (
    <>
      <div>expedition</div>
      <ExpeditionContainer>
        {ExpeditionData.map((d, i) => {
          return (
            <PossessChar
              key={i}
              level={d.level}
              className={d.className}
              name={d.name}
              itemLevel={d.itemLevel}
              guild={d.guild}
            />
          );
        })}
      </ExpeditionContainer>
    </>
  );
}

const ExpeditionContainer = styled.div`
  padding: 10px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  font-size: 15px;
`;
