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

export default function CharProfile() {
  console.log(Array(6));
  console.log(Array(6).fill(0));
  return (
    <>
      <EquipContainer>
        <EquipWrapper>
          {EquipData.map((d, i) => {
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
                    <EquipText3Left>{d.c}</EquipText3Left>
                    <EquipText3Right>{d.d}</EquipText3Right>
                    <EquipText3Right>{d.e}</EquipText3Right>
                  </EquipText3>
                </EquipText>
              </EquipItem>
            );
          })}
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
  border: 1px solid white;
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
  left: 1%;
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
