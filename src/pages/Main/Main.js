import styled from "styled-components";

export default function Main() {
  return (
    <Container>
      <BigLogo>ZLOA</BigLogo>
      <SearchBarContainer>
        <div style={{fontSize:'30px', textAlign:'center'}}>🔍</div>
        <SearchBar type="text" placeholder="캐릭터명을 입력하세요"/>
        <div/>
      </SearchBarContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 98vw;
  margin: auto;
  text-align: center;
`
const BigLogo = styled.div`
  margin-top: 20vh;
  font-size: 150px;
  font-weight: bold;
`

const SearchBarContainer = styled.div`
  margin: auto;
  margin-top: 5vh;
  width: 35vw;
  height: 6vh;
  border-radius: 60000px;
  box-shadow: 2px 2px 5px 1px #888888;
  border: 1px solid #666;
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  /* justify-content: center; */
  align-items: center;
`

const SearchBar = styled.input`
  height: 5vh;
  font-size: 25px;
  border:none;
  transition: border 0.3s;
  &:focus {
    outline: none;
  }
`
