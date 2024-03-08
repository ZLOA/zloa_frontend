import styled from "styled-components";
import Main from "../Main/Main.js";

export default function Comparison() {
  return (
    <Container>
      <SearchContainer>
        <SearchBar placeholder="캐릭터명을 입력해주세요."></SearchBar>
        <Separator>VS</Separator>
        <SearchBar placeholder="캐릭터명을 입력해주세요."></SearchBar>
        <SearchButton>검색</SearchButton>
      </SearchContainer>

      <div>
        <span>드롭다운 추가 필요</span>
      </div>
    </Container>
  );
}

//export 있으면 다른 파일에서도 임포트 가능
const Container = styled.div`
  height: 100vh;
  width: 98vw;
  margin: auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
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
  margin-left : 25px;
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