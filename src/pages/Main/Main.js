import axios from "axios";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import { useState } from "react";

export default function Main() {
  const [searchData, setSearchData] = useState("");
  const [, setResponseData] = useState("");

  const handleOnChangeSearchBar = (data) => {
    setSearchData(data);
  };

  const serverApi = axios.create({
    baseURL: 'http://localhost:5812/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const fetchData = async () => {
    console.log(`zloaApi/character/api/data?id=${searchData}`);
    try {
      const response = await serverApi.get(
        `zloaApi/character/api/data?id=${searchData}`
      );
  
      setResponseData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <Container>
        <BigLogo>ZLOA</BigLogo>
        <SearchBarContainer>
          <div style={{ fontSize: "30px", textAlign: "center" }} onClick={fetchData}>🔍</div>
          <SearchBar
            type="text"
            placeholder="캐릭터명을 입력하세요"
            onChange={(e) => handleOnChangeSearchBar(e.target.value)}
          />
          <div />
        </SearchBarContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  width: 98vw;
  height: 60vh;
  margin: auto;
  text-align: center;
`;
const BigLogo = styled.div`
  margin-top: 20vh;
  font-size: 150px;
  font-weight: bold;
`;

const SearchBarContainer = styled.div`
  margin: auto;
  margin-top: 5vh;
  width: 35vw;
  height: 6vh;
  border-radius: 200px;
  /* box-shadow: 2px 2px 5px 1px #888888; */
  background-color: white;
  border: 1px solid #666;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  /* justify-content: center; */
  align-items: center;
`;

const SearchBar = styled.input`
  height: 5vh;
  font-size: 25px;
  border: none;
  transition: border 0.3s;
  &:focus {
    outline: none;
  }
`;