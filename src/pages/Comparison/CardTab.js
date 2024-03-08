import React from 'react';
import styled, {css} from 'styled-components';

/**
 * 카드 탭
 */


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

const CardEffectData = [
  {
    a: "세상을 구하는 빛 2세트",
    b: "암속성 피해 감소 +10.00%"
  },
  {
    a: "세상을 구하는 빛 4세트",
    b: "암속성 피해 감소 +10.00%"
  },
  {
    a: "세상을 구하는 빛 6세트",
    b: "암속성 피해 감소 +10.00%"
  },
  {
    a: "세상을 구하는 빛 6세트(12각성합계)",
    b: "공격 속성을 성속성으로 변환"
  },
  {
    a: "세상을 구하는 빛 6세트(18각성합계)",
    b: "성속성 피해 +7.00%"
  },
  {
    a: "세상을 구하는 빛 6세트(30각성합계)",
    b: "성속성 피해 +8.00%"
  }
];


const CardTab = () => {
  return(
    <CardTabContainer>
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
                <CardText>{d.a}</CardText>
              </div>
            );
          })}
       </CardContainer>
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
                <CardText>{d.a}</CardText>
              </div>
            );
          })}
       </CardContainer>

       <CardEffect>
        {CardEffectData.map((d, i) => {
          return (
            <EffectText>
              <TextEnd green={1}>
                {d.a}
              </TextEnd>
              <TextEnd>
                {d.b}
              </TextEnd>
            </EffectText>
          );
        })

        }
       </CardEffect>
       <CardEffect>
       {CardEffectData.map((d, i) => {
          return (
            <EffectText>
              <TextEnd green={1} start={1}>
                {d.a}
              </TextEnd>
              <TextEnd start={1}>
                {d.b}
              </TextEnd>
            </EffectText>
          );
        })

        }
       </CardEffect>

    </CardTabContainer>
  )
};

export default CardTab;

const CardContainer = styled.div`
  margin-top: 20px;
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

const CardText = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 8px;
`;

const CardTabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

`;

const CardEffect = styled.div`
  font-size: 20px;
`;

const TextEnd = styled.div`
  display: flex;
  justify-content: flex-end;

  ${(props) => {
  if (props.start) {
    return css`
      justify-content: flex-start;
    `;
  }
}}


  ${(props) => {
  if (props.green) {
    return css`
      color: #498001;
    `;
  } else {
    return css`
      color:  white;
    `;
  }
}}
`;

const EffectText = styled.div`
  margin: 0px 0px 20px 0px;
`;