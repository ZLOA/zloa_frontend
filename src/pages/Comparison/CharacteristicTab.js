import React from 'react';
import styled from 'styled-components';

/**
 * 특성/각인 탭
 */

const CharacteristicTab = () => {
  return(
      <CharContainer>
        <StatsContainer>
          <StatRow>
            <StatItem>58,354</StatItem>
            <StatItem middle>공격력</StatItem>
            <StatItem reverse>61,606</StatItem>
          </StatRow>
          <StatRow>
            <StatItem>191,926</StatItem>
            <StatItem middle>최대 생명력</StatItem>
            <StatItem reverse>202,795</StatItem>
          </StatRow>
        </StatsContainer>

        <Line/>

        <StatsContainer>
          <StatRow>
            <StatItem>636 ← 571</StatItem>
            <StatItem middle>치명</StatItem>
            <StatItem reverse>1,568 → 1,797</StatItem>
          </StatRow>
          <StatRow>
            <StatItem>1,812 ← 1,590</StatItem>
            <StatItem middle>특화</StatItem>
            <StatItem reverse>0 → 69</StatItem>
          </StatRow>
          <StatRow>
            <StatItem>64 ← 0</StatItem>
            <StatItem middle>제압</StatItem>
            <StatItem reverse>0 → 70</StatItem>
          </StatRow>
          <StatRow>
            <StatItem>61 ← 0</StatItem>
            <StatItem middle>신속</StatItem>
            <StatItem reverse>598 → 663</StatItem>
          </StatRow>
          <StatRow>
            <StatItem>66 ← 0</StatItem>
            <StatItem middle>인내</StatItem>
            <StatItem reverse>0 → 66</StatItem>
          </StatRow>
          <StatRow>
            <StatItem>60 ← 0</StatItem>
            <StatItem middle>숙련</StatItem>
            <StatItem reverse>0 → 66</StatItem>
          </StatRow>
        </StatsContainer>

        <Line/>

        <EngravingsContainer>
          <EngravingColumn>
            <EngravingContainer>
              <EngravingItem>돌격대장 Lv.3</EngravingItem>
              <EngravingImage src="#" alt="이미지"/>
            </EngravingContainer>
            <EngravingContainer>
              <EngravingItem>바리케이드 Lv.3</EngravingItem>
              <EngravingImage src="#" alt="이미지"/>
            </EngravingContainer>
            <EngravingContainer>
              <EngravingItem>아드레날린 Lv.3</EngravingItem>
              <EngravingImage src="#" alt="이미지"/>
            </EngravingContainer>
            <EngravingContainer>
              <EngravingItem>예리한둔기 Lv.3</EngravingItem>
              <EngravingImage src="#" alt="이미지"/>
            </EngravingContainer>
            <EngravingContainer>
              <EngravingItem>원한 Lv.3</EngravingItem>
              <EngravingImage src="#" alt="이미지"/>
            </EngravingContainer>
            <EngravingContainer>
              <EngravingItem>진화의유산 Lv.1</EngravingItem>
              <EngravingImage src="#" alt="이미지"/>
            </EngravingContainer>
          </EngravingColumn>

          <EngravingColumn middle>
            <div>
              각인효과
            </div>
          </EngravingColumn>

          <EngravingColumn reverse>
            <EngravingContainer  >
              <EngravingImage  src="#" alt="이미지"/>
              <EngravingItem>예리한 둔기 Lv.3</EngravingItem>
            </EngravingContainer>
            <EngravingContainer>
              <EngravingImage  src="#" alt="이미지"/>
              <EngravingItem>아드레날린 Lv.3</EngravingItem>
            </EngravingContainer>
            <EngravingContainer >
              <EngravingImage  src="#" alt="이미지"/>
              <EngravingItem>타격의 대가Lv.3</EngravingItem>
            </EngravingContainer>
            <EngravingContainer >
              <EngravingImage  src="#" alt="이미지"/>
              <EngravingItem>환류 Lv.3</EngravingItem>
            </EngravingContainer>
            <EngravingContainer >
              <EngravingImage  src="#" alt="이미지"/>
              <EngravingItem>원한 Lv.3</EngravingItem>
            </EngravingContainer>
            <EngravingContainer >
              <EngravingImage  src="#" alt="이미지"/>
              <EngravingItem>에테르포식자 Lv.1</EngravingItem>
            </EngravingContainer>
          </EngravingColumn>
        </EngravingsContainer>
      </CharContainer>
    )
};

export default CharacteristicTab;

const CharContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #1f1e1f;
`;

// 스탯 큰 컨테
const StatsContainer = styled.div`
  margin-top: 10px;
  width: 50vw;
`;

const StatRow = styled.div`
  display: flex;
`;

const StatItem = styled.div`
  flex: 1;
  text-align: ${({ middle, reverse }) => (middle ? 'center' : (reverse ? 'left' : 'right'))};

  margin: ${({ middle, reverse }) => (middle ? '0 0 5px 0' : (reverse ? '0 0 0 10px' : '0 10px 0 0'))};

  align-items: ${({ middle }) => (middle ? 'center' : 'flex-start')};
  background-color: ${({ middle }) => (middle ? '#403d37' : 'transparent')};
  max-width: ${({ middle}) => (middle ? '180px' : 'none')};
`;

const Line = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
  margin: 10px 0;
`;

const EngravingContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ reverse }) => (reverse ? '0 0 0 10px' : '0 10px 0 0')};
  text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
`;

const EngravingItem = styled.div`
  margin: 1px;
`;

const EngravingImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

// 각인 큰 컨
const EngravingsContainer = styled.div`
  margin-top: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80vw;
`;

const EngravingColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: ${({ middle, reverse }) => (middle ? 'center' : (reverse ? 'left' : 'right'))};

  justify-content: ${({ middle }) => (middle ? 'center' : 'flex-start')};
  align-items: ${({ middle, reverse }) => (middle ? 'center' : (reverse ? 'flex-start' : 'flex-end'))};
  background-color: ${({ middle }) => (middle ? '#403d37' : 'transparent')};
  max-width: ${({ middle}) => (middle ? '180px' : 'none')};
  
`;