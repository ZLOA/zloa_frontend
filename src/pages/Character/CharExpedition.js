import styled from "styled-components";
import PossessChar from "../../conponents/molecules/PossessChar";

const ExpeditionData = [
  {
    level:60,
    
  }
]

export default function CharExpedition() {
  return (
    <>
      <div>expedition</div>
      <ExpeditionContainer>
        <PossessChar></PossessChar>
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
`
