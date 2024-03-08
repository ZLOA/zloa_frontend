import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Nav from "../../layout/Nav.js";

export default function Comparison() {
  const [charData, setCharData] = useState("");
  const [charCompData, setCharCompData] = useState("");

  const navigate = useNavigate();

  const goToResult = () => {
    navigate("/comparison/result", {
      state: { char: charData, charComp: charCompData },
    });
  };

  const handleOnChange = (data) => {
    setCharData(data);
  };

  const handleOnCompChange = (data) => {
    setCharCompData(data);
  };

  return (
    <>
      <Nav />
      <Container>
        <SearchContainer>
          <SearchBar
            placeholder="캐릭터명을 입력해주세요."
            onChange={(e) => handleOnChange(e.target.value)}
          ></SearchBar>
          <Separator>VS</Separator>
          <SearchBar
            placeholder="캐릭터명을 입력해주세요."
            onChange={(e) => handleOnCompChange(e.target.value)}
          ></SearchBar>
          <SearchButton onClick={goToResult}>검색</SearchButton>
        </SearchContainer>

        <div>
          <span>드롭다운 추가 필요</span>
        </div>
      </Container>
    </>
  );
}

//export 있으면 다른 파일에서도 임포트 가능
const Container = styled.div`
  height: 80vh;
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
