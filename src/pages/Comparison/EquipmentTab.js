import React from 'react';
import styled from 'styled-components';

/**
 * 장비 탭
 * api 작업 시에는 맵 형식으로 만들어에서 반복 ㅇㅇ
 */



const equipmentTitles = ['무기', '투구', '어깨', '상의', '하의', '장갑', '목걸이', '귀걸이1', '귀걸이2', '반지1', '반지2', '팔찌', '어빌리티스톤']

const characterData = [
  {
    equipment : [
      { type: '무기', name: '+23 차오른 몽환의 환각 서브 머신건', image: '#'},
      { type: '투구', name: '+19 차오른 몽환의 환각 모자', image: '#' },
      { type: '어깨', name: '+19 차오른 몽환의 환각 견갑', image: '#' },
      { type: '상의', name: '+19 차오른 몽환의 환각 상의', image: '#' },
      { type: '하의', name: '+20 차오른 몽환의 환각 하의', image: '#' },
      { type: '장갑', name: '+20 차오른 몽환의 환각 장갑', image: '#' }
    ],
    accessories : [
      { name: '거룩한 수호자의 목걸이[ 치명, 신속 ]', engraving:['아드레날린 +5', '에테르 포식자 +3', '공격속도 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'}
    ],
    bracelet : { name: '찬란한 영웅의 팔찌', option: ['민첩', '체력', '치명', '특화', '순환'], image: '#'},
    stone : { name: '준엄한 비상의 돌 ||[체력]', engraving: ['돌격대장 +7', '원한 +7', '공격속도 감소 +3'], image: '#'}
  },
  // 두번째 캐릭(인덱스로 구분)
  {
    equipment : [
      { type: '무기', name: '+23 차오른 몽환의 악몽 스태프', image: '#'},
      { type: '투구', name: '+19 차오른 몽환의 악몽 모자', image: '#' },
      { type: '어깨', name: '+19 차오른 몽환의 악몽 견갑', image: '#' },
      { type: '상의', name: '+19 차오른 몽환의 악몽 상의', image: '#' },
      { type: '하의', name: '+20 차오른 몽환의 악몽 하의', image: '#' },
      { type: '장갑', name: '+20 차오른 몽환의 악몽 장갑', image: '#' }
    ],
    accessories : [
      { name: '거룩한 수호자의 목걸이[ 치명, 신속 ]', engraving:['아드레날린 +5', '에테르 포식자 +3', '공격속도 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'},
      { name: '참혹한 쇠락의 귀걸이[ 특화 ]', engraving:['돌격대장 +5', '원한 +3', '공격력 감소 +2'], image: '#'}
    ],
    bracelet : { name: '찬란한 영웅의 팔찌', option: ['민첩', '체력', '치명', '특화', '순환'], image: '#'},
    stone : { name: '준엄한 비상의 돌 ||[체력]', engraving: ['돌격대장 +7', '원한 +7', '공격속도 감소 +3'], image: '#'}
  }
];



const EquipmentTab = () => {
  const renderEquipmentItems = (data, reverse) => {
    return (
      <EquipmentColumn key={0} reverse={reverse}>
        {data.equipment.map((item, index) => (
          <EquipmentContainer key={index} reverse={reverse}>
            <EquipmentItem>{item.name}</EquipmentItem>
            <EquipmentImage src={item.image} alt={item.type}></EquipmentImage>
          </EquipmentContainer>
        ))}

        {data.accessories.map((accessory, index) => (
          <EquipmentContainer key={index} reverse={reverse}>
            <EquipmentItem>
              <EquipmentName>{accessory.name}</EquipmentName>            
              {accessory.engraving &&
                accessory.engraving.map((engraving, engravingIndex) => (
                  <EquipmentEngraving key={engravingIndex}>
                    {engraving}
                  </EquipmentEngraving>
                ))}
            </EquipmentItem>
            <EquipmentImage
              src={accessory.image}
              alt="악세서리"
            ></EquipmentImage>
          </EquipmentContainer>
        ))}
        
        <EquipmentContainer reverse={reverse}>
          <EquipmentItem>
            <EquipmentName>{data.bracelet.name}</EquipmentName>
              {data.bracelet.option &&
                data.bracelet.option.map((option, optionIndex) => (
                  <EquipmentEngraving key={optionIndex}>
                    {option}
                  </EquipmentEngraving>
                ))}
            </EquipmentItem>
            <EquipmentImage
              src={data.bracelet.image}
              alt="팔찌"
          ></EquipmentImage>
        </EquipmentContainer>

        <EquipmentContainer reverse={reverse}>
          <EquipmentItem>
            <EquipmentName>{data.stone.name}</EquipmentName>
              {data.stone.engraving &&
                data.stone.engraving.map((engraving, engravingIndex) => (
                  <EquipmentEngraving key={engravingIndex}>
                    {engraving}
                  </EquipmentEngraving>
                ))}
            </EquipmentItem>
            <EquipmentImage
              src={data.stone.image}
              alt="어빌리티스톤"
          ></EquipmentImage>
        </EquipmentContainer>
        
      </EquipmentColumn>
    );};

  const renderEquipmentTitles = (data) => {
    return (
      <EquipmentColumn middle>
        {data.map((name, index) =>(
            <EquipmentTitle>{name}</EquipmentTitle>
        ))}
      </EquipmentColumn>
    )
  }


  return (
    <EquipmentBigContainer>
      <EquipmentsContainer>
        {renderEquipmentItems(characterData[0], false)}
        {renderEquipmentTitles(equipmentTitles)}
        {renderEquipmentItems(characterData[1], true)}
      </EquipmentsContainer>
    </EquipmentBigContainer>
  );
};

export default EquipmentTab;

const EquipmentBigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  background-color: #1f1e1f;
`;

const EquipmentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ reverse }) => (reverse ? '0 0 0 10px' : '0 10px 0 0')};
  text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
`;

const EquipmentItem = styled.div`
  margin: 5px;
  height: 60px;
`;

const EquipmentImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
`;

// 각인 큰 컨
const EquipmentsContainer = styled.div`
  margin-top: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90vw;
`;

const EquipmentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: ${({ middle, reverse }) => (middle ? 'center' : (reverse ? 'left' : 'right'))};

  justify-content: 'flex-start';
  align-items: ${({ middle, reverse }) => (middle ? 'center' : (reverse ? 'flex-start' : 'flex-end'))};
  background-color: 'transparent';
  max-width: ${({ middle}) => (middle ? '180px' : 'none')}; 
`;

const EquipmentTitle = styled.div`
  background-color: #403d37;
  margin: 8px 0;
  width: 100px;
  height: 54px;
`;

const EquipmentEngraving = styled.span`
  font-size: 13px;
`;

const EquipmentName = styled.h4`
  margin: 5px 0px 5px 1px;
  text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
`;