import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const EquipData = [
  {
    a: "3단계",
    b: "+19 차오른 몽환의 환각 모자",
    c: "환각 Lv.3",
    d: "공격력 Lv.2",
    e: "달인(질서) Lv.4",
    f: "91",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_160.png",
  },
  {
    a: "3단계",
    b: "+19 차오른 몽환의 환각 모자",
    c: "환각 Lv.3",
    d: "공격력 Lv.2",
    e: "달인(질서) Lv.4",
    f: "91",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_160.png",
  },
  {
    a: "3단계",
    b: "+19 차오른 몽환의 환각 모자",
    c: "환각 Lv.3",
    d: "공격력 Lv.2",
    e: "달인(질서) Lv.4",
    f: "91",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_160.png",
  },
  {
    a: "3단계",
    b: "+19 차오른 몽환의 환각 모자",
    c: "환각 Lv.3",
    d: "공격력 Lv.2",
    e: "달인(질서) Lv.4",
    f: "91",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_160.png",
  },
  {
    a: "3단계",
    b: "+19 차오른 몽환의 환각 모자",
    c: "환각 Lv.3",
    d: "공격력 Lv.2",
    e: "달인(질서) Lv.4",
    f: "91",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_160.png",
  },
  {
    a: "3단계",
    b: "+19 차오른 몽환의 환각 모자",
    c: "환각 Lv.3",
    d: "공격력 Lv.2",
    e: "달인(질서) Lv.4",
    f: "91",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/sc_item/sc_item_160.png",
  },
];

const AccessoryData = [
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
  {
    a: "참혹한 쇠락의 귀걸이",
    b: "특화 299",
    c: "돌격대장 5",
    d: "원한 3",
    e: "공격력 감소 2",
    f: "98",
    g: "https://cdn-lostark.game.onstove.com/efui_iconatlas/acc/acc_113.png",
  },
];

const EquipEngravingData = [
  {
    a: "예리한 둔기",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_03_40.png",
    c: 12,
  },
  {
    a: "바리케이드",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_170.png",
    c: 12,
  },
];

const GemData = [
  {
    a: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_55.png",
    b: 10,
  },
  {
    a: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_55.png",
    b: 10,
  },
  {
    a: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_55.png",
    b: 10,
  },
];

const StatData = [61201, 58830, 2371, 194292];

const StatBattleData = [
  {
    a: "치명",
    b: 637,
  },
  {
    a: "특화",
    b: 1821,
  },
  {
    a: "신속",
    b: 61,
  },
  {
    a: "제압",
    b: 64,
  },
  {
    a: "인내",
    b: 66,
  },
  {
    a: "숙련",
    b: 60,
  },
];

const EngravingData = [
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_71.png",
    Name: "원한 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/achieve/achieve_03_40.png",
    Name: "예리한 둔기 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_170.png",
    Name: "바리케이드 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/buff/buff_210.png",
    Name: "돌격대장 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_235.png",
    Name: "아드레날린 Lv. 3",
  },
  {
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/ability/ability_217.png",
    Name: "진화의 유산 Lv. 1",
  },
];

const CardData = [
  {
    a: "카멘",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_01_4.png",
    c: 5,
  },
  {
    a: "카멘",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_01_4.png",
    c: 2,
  },
  {
    a: "카멘",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_01_4.png",
    c: 3,
  },
  {
    a: "카멘",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_01_4.png",
    c: 5,
  },
  {
    a: "카멘",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_01_4.png",
    c: 1,
  },
  {
    a: "카멘",
    b: "https://cdn-lostark.game.onstove.com/efui_iconatlas/card_legend/card_legend_01_4.png",
    c: 5,
  },
];

export default function CharProfile({ equip, gem, stat, engraving, card }) {

  const [equipData, setEquipData] = useState([]);
  const [accData, setAccData] = useState([]);

  useEffect(() => {
    if (equip) {
      const newEquip = [...equip];
      
      const parseEData = newEquip.map((item)=>{
        if(item.Tooltip){
          const parsedTooltip = JSON.parse(item.Tooltip);
          return { ...item, Tooltip: parsedTooltip }
        }else{
          return item;
        }
      })
      
      const eData = parseEData.filter(
        (item) =>
          item.Type === "투구" ||
          item.Type === "상의" ||
          item.Type === "하의" ||
          item.Type === "장갑" ||
          item.Type === "어깨" ||
          item.Type === "무기"
      );
      const aData = parseEData?.filter(
        (item) =>
          item.Type === "목걸이" ||
          item.Type === "귀걸이" ||
          item.Type === "반지"
      );

      setEquipData(eData);
      setAccData(aData);
      console.log(eData);
      console.log(aData);
    }
  }, [equip]);
  return (
    <>
      <EquipContainer>
        <EquipWrapper>
          {equipData?.map((d, i) => {
            return (
              <EquipItem key={i}>
                <EquipImgWrapper>
                  <EquipImg url={d.Icon} />
                  <EquipImgText>91</EquipImgText>
                </EquipImgWrapper>
                <EquipText>
                  <div>2단계</div>
                  {/* 초월 o/x를 EquipText에 파라미터로 보내주고 1fr*3 or 1fr*2, 위 div에 {초월o?? }도 걸어주고*/}
                  <div>{d.Name}</div>
                  <EquipText3>
                  <EquipText3Left>환각 Lv.3</EquipText3Left>
                    {/* <EquipText3Left>{d.c}</EquipText3Left>
                    <EquipText3Right>{d.d}</EquipText3Right>
                    <EquipText3Right>{d.e}</EquipText3Right> */}
                  </EquipText3>
                </EquipText>
              </EquipItem>
            );
          })}
          <EquipEngravingWrapper>
            {EquipEngravingData.map((d, i) => {
              return (
                <EquipEngravingItemWrapper key={i}>
                  <EquipEngravingItemImg url={d.b} />
                  <div>
                    <div>{d.a}</div>
                    <div>활성포인트 +{d.c}</div>
                  </div>
                </EquipEngravingItemWrapper>
              );
            })}
          </EquipEngravingWrapper>
        </EquipWrapper>
        <EquipWrapper>
          {AccessoryData.map((d, i) => {
            return (
              <EquipItem key={i}>
                <EquipImgWrapper>
                  <EquipImg url={d.g} />
                  <EquipImgText>{d.f}</EquipImgText>
                </EquipImgWrapper>
                <EquipText>
                  <div>{d.a}</div>
                  <div>{d.b}</div>
                  <EquipText3>
                    <EquipText3Right>{d.c}</EquipText3Right>
                    <EquipText3Right ancient={1}>{d.d}</EquipText3Right>
                    <EquipText3Right red={1}>{d.e}</EquipText3Right>
                  </EquipText3>
                </EquipText>
              </EquipItem>
            );
          })}
        </EquipWrapper>
      </EquipContainer>

      <GemContainer>
        {GemData.map((d, i) => {
          return (
            <GemWrapper key={i}>
              <GemItem url={d.a}></GemItem>
              <GemLevel>{d.b}</GemLevel>
            </GemWrapper>
          );
        })}
      </GemContainer>

      <StatContainer>
        <StatInnerContainer>
          <BetweenWrapper>
            <EquipText3Right>기본 특성</EquipText3Right>
          </BetweenWrapper>
          <StatInnerWrapper>
            <BetweenWrapper>
              <StatText gray={1}>공격력</StatText>
              <StatText bold={1}>{StatData[0]}</StatText>
            </BetweenWrapper>
            <BetweenWrapper>
              <StatText gray={1} size={1}>
                {" "}
                ㄴ 기본
              </StatText>
              <StatText bold={1} size={1}>
                {StatData[1]}
              </StatText>
            </BetweenWrapper>
            <BetweenWrapper>
              <StatText gray={1} size={1}>
                {" "}
                ㄴ 효과
              </StatText>
              <StatText bold={1} size={1}>
                {StatData[2]}
              </StatText>
            </BetweenWrapper>
            <BetweenWrapper>
              <StatText gray={1}>최대 생명력</StatText>
              <StatText bold={1}>{StatData[3]}</StatText>
            </BetweenWrapper>
          </StatInnerWrapper>
          <div style={{ marginTop: "20px" }} />

          <BetweenWrapper>
            <EquipText3Right>전투 특성</EquipText3Right>
          </BetweenWrapper>
          <StatBattleWrapper>
            {StatBattleData.map((d, i) => {
              return (
                <BetweenWrapper>
                  <StatText gray={1}>{d.a}</StatText>
                  <StatText bold={1}>{d.b}</StatText>
                </BetweenWrapper>
              );
            })}
          </StatBattleWrapper>
        </StatInnerContainer>

        <StatInnerContainer>
          <BetweenWrapper>
            <EquipText3Right>각인</EquipText3Right>
            <div>333331</div>
          </BetweenWrapper>

          {EngravingData.map((d, i) => {
            return (
              <StatEngravingWrapper key={i}>
                <StatEngravingImg url={d.Icon} />
                <div>{d.Name}</div>
              </StatEngravingWrapper>
            );
          })}
        </StatInnerContainer>
      </StatContainer>

      <CardContainer>
        {CardData.map((d, i) => {
          return (
            <div key={i}>
              <CardWrapper>
                <CardImg url={d.b}></CardImg>
                <CardAwakeWrapper>
                  {Array(d.c) //배열 선언
                    .fill() //배열 초기화
                    .map((_, i) => {
                      return <CardAwakeImgOn key={i} />;
                    })}
                  {Array(5 - d.c)
                    .fill()
                    .map((_, i) => {
                      return <CardAwakeImgOff key={i} />;
                    })}
                </CardAwakeWrapper>
              </CardWrapper>
              <CartText>{d.a}</CartText>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
}

const EquipContainer = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
`;
const EquipWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  gap: 10px;
`;

const EquipItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 5px;
`;

const EquipImgWrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  text-align: center;
`;
const EquipImg = styled.div`
  width: 100%;
  padding-top: 100%;
  border-radius: 5px 5px 0 0;
  background-color: #dcc999;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const EquipImgText = styled.div`
  background-color: purple;
  color: white;
  font-size: 15px;
  font-weight: bolc;
  border-radius: 0 0 5px 5px;
`;

const EquipText = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  font-size: 15px;
`;

const EquipText3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 13px;
  font-weight: bold;
`;

const EquipText3Left = styled.div`
  border: 1px solid #e5e7eb;
  background-color: #e5e7eb;
  border-radius: 1px;
  padding: 4px 7px;
  color: black;
`;

const EquipText3Right = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  padding: 4px 7px;

  ${(props) => {
    if (props.red) {
      return css`
        color: red;
      `;
    }
  }}
`;

const EquipEngravingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  font-size: 13px;
  padding: 5px 5px;
`;

const EquipEngravingItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

const EquipEngravingItemImg = styled.div`
  border-radius: 100%;

  width: 30%;
  padding-top: 30%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

// const AccessoryItem = styled.div`
//   border: 1px solid black;
// `;

const GemContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  gap: 7px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
`;

const GemWrapper = styled.div`
  position: relative;
`;
const GemItem = styled.div`
  border: 1px solid white;
  border-radius: 10px;

  width: 100%;
  padding-top: 100%;
  background-color: #a24006;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const GemLevel = styled.div`
  position: absolute;
  bottom: 1px;
  right: -1px;
  border: 2px solid white;
  border-radius: 3px;
  background-color: black;
  color: white;

  font-size: 15px;
`;

const StatContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;

const StatInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border: 2px solid #e5e7eb;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`;

const StatInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin-left: 10px;
`;

const BetweenWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StatText = styled.div`
  ${(props) => {
    if (props.gray) {
      return css`
        color: gray;
      `;
    }
  }}

  ${(props) => {
    if (props.size) {
      return css`
        font-size: 14px;
      `;
    }
  }}

${(props) => {
    if (props.bold) {
      return css`
        font-weight: bold;
      `;
    }
  }}
`;

const StatBattleWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 50px;
  margin-left: 10px;
`;

const StatEngravingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  margin-left: 10px;
`;

const StatEngravingImg = styled.div`
  border-radius: 100%;

  width: 8%;
  padding-top: 8%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const CardContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 7px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
`;

const CardWrapper = styled.div`
  position: relative;
`;

const CardImg = styled.div`
  border-radius: 10px;

  width: 100%;
  padding-top: 145%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const CardAwakeWrapper = styled.div`
  position: absolute;
  width: 92%;
  padding: 5%;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CardAwakeImgOn = styled.div`
  width: 100%;
  padding-top: 150%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url("/img/gem_active_0.png");
  background-size: cover;
`;

const CardAwakeImgOff = styled.div`
  width: 100%;
  padding-top: 150%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url("/img/gem_active_1.png");
  background-size: cover;
`;

const CartText = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 8px;
`;
