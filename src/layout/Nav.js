import styled from "styled-components";
import { useNavigate } from "react-router-dom";


export default function Nav() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  const goToCharacter = () => {
    navigate("/character/profile");
  };

  return (
    <NavContainer>
      <NavWrap>
        <NavLeft>
          <div style={{ marginLeft: "25px" }} onClick={goToMain}>ZLOA</div>
        </NavLeft>
        <NavCenter>
          <NavItemContainer>
            <NavItem>공지사항</NavItem>
            <NavItem onClick={goToCharacter}>캐릭터 정보</NavItem>
            <NavItem>전투력 비교</NavItem>
            <NavItem>스펙업 골드 조회</NavItem>
            <NavItem>도구</NavItem>
          </NavItemContainer>
          <NavSearchContainer>
            <NavSearchWrapper>
              <div style={{ fontSize: "18px", textAlign: "center" }}>🔍</div>
              <NavSearchBar type="text" placeholder="캐릭터명을 입력하세요" />
              <div />
              </NavSearchWrapper>
          </NavSearchContainer>
        </NavCenter>
        <div></div>
      </NavWrap>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  /* border-bottom: 1px solid #ececec; */
  /* height: 35px; */

  text-align: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #1f1e1f;
  color: white;
`;
const NavWrap = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  align-items: center;
`;

const NavLeft = styled.div`
  font-size: 35px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
`;

const NavCenter = styled.div`
  height: 66px;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavItemContainer = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
`;

const NavItem = styled.div`
  /* border: 1px solid green; */
  font-size: 16px;
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #524f52;
  }
`;

const NavSearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavSearchWrapper = styled.div`
  /* width: 90%; */
  height: 60%;
  border-radius: 5px;
  background-color: white;
  padding-left: 10px;
  /* box-shadow: 2px 2px 5px 1px #888888; */
  border: 1px solid #666;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  /* justify-content: center; */
  align-items: center;
  gap: 3px;
`;

const NavSearchBar = styled.input`
  height: 80%;
  font-size: 14px;
  border: none;
  transition: border 0.3s;
  &:focus {
    outline: none;
  }
`;
