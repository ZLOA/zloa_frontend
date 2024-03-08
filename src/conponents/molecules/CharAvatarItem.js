import styled, { css } from "styled-components";

export default function CharAvatarItem({ data }) {
  return (
    <Container>
      <AvatarImgWrapper>
        <AvatarImg url={data.Icon} grade={data.Grade} />
      </AvatarImgWrapper>
      <AvatarTextWrapper>
        <AvatarName grade={data.Grade}>{data.Name}</AvatarName>
        <div>{data.Type}</div>
      </AvatarTextWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;

  color: white;
  font-size: 14px;
`;

const AvatarImgWrapper = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
`;

const AvatarImg = styled.div`
  border-radius: 5px;
  background-color: gray;
  width: 100%;
  padding-top: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;

  ${(props) => {
    if (props.grade === "전설") {
      return css`
        background-color: #9e5f04;
      `;
    } else if (props.grade === "영웅") {
      return css`
        background-color: #480d5d;
      `;
    }
  }}
`;

const AvatarTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;

const AvatarName = styled.div`
  font-size: 16px;
  color: #8045dd;
  ${(props) => {
    if (props.grade === "전설") {
      return css`
        color: #f9ae00;
      `;
    }
  }}
`;
