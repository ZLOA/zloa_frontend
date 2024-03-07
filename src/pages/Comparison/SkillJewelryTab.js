import React from "react";

import styled from "styled-components";

/**
 * 보석 탭
 */

const SkillData = [
  {
    icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/lm_skill/lm_skill_01_22.png",
    level: 12,
    name: "굉열파",
    a: ["무력 중", "부파 1"],
    tripod: [
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_1_41.png",
        name: "재빠른 손놀림",
        level: 5,
        position: 3,
      },
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_2_4.png",
        name: "파괴하는 창",
        level: 5,
        position: 1,
      },
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_3_42.png",
        name: "공파섬",
        level: 5,
        position: 1,
      },
    ],
    gem: [
      {
        name: "10멸",
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_55.png",
      },
      {
        name: "10홍",
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_65.png",
      },
    ],
    rune: "질풍",
    runeIcon:
      "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_7_194.png",
  },
  {
    icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/lm_skill/lm_skill_01_22.png",
    level: 12,
    name: "굉열파",
    a: ["무력 중", "부파 1"],
    tripod: [
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_1_41.png",
        name: "재빠른 손놀림",
        level: 5,
        position: 3,
      },
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_2_4.png",
        name: "파괴하는 창",
        level: 5,
        position: 1,
      },
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_3_42.png",
        name: "공파섬",
        level: 5,
        position: 1,
      },
    ],
    gem: [
      {
        name: "10멸",
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_55.png",
      },
      {
        name: "10홍",
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_65.png",
      },
    ],
    rune: "질풍",
    runeIcon:
      "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_7_194.png",
  },
  {
    icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/lm_skill/lm_skill_01_22.png",
    level: 12,
    name: "굉열파",
    a: ["무력 중", "부파 1"],
    tripod: [
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_1_41.png",
        name: "재빠른 손놀림",
        level: 5,
        position: 3,
      },
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_2_4.png",
        name: "파괴하는 창",
        level: 5,
        position: 1,
      },
      {
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/tripod_tier/tripod_tier_3_42.png",
        name: "공파섬",
        level: 5,
        position: 1,
      },
    ],
    gem: [
      {
        name: "10멸",
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_55.png",
      },
      {
        name: "10홍",
        icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_9_65.png",
      },
    ],
    rune: "질풍",
    runeIcon:
      "https://cdn-lostark.game.onstove.com/efui_iconatlas/use/use_7_194.png",
  },
];

const SkillJewelryTab = () => {
  return (
    <>
      <div>skill</div>
      <SkillGrid>
        <SkillContainer>
          {SkillData.map((d, i) => {
            return (
              <SkillItemWrapper key={i}>
                <SkillProfileWrapper>
                  <SkillProfileImg url={d.icon} />
                  <div>
                    <SkillProfileTextWrapper>
                      <div>{d.level}레벨</div>
                      <FlexWrapper>
                        {d.a.map((data, index) => {
                          return (
                            <SkillProfileTextRight key={index}>
                              {data}
                            </SkillProfileTextRight>
                          );
                        })}
                      </FlexWrapper>
                    </SkillProfileTextWrapper>
                    <div>{d.name}</div>
                  </div>
                </SkillProfileWrapper>

                <TripodWrapper>
                  {d.tripod.map((data, index) => {
                    return (
                      <TripodItemWrapper key={index}>
                        <TripodItemImgWrapper>
                          <TripodItemImg url={data.icon} />
                          <TripodItemImgLevel>
                            {data.position}
                          </TripodItemImgLevel>
                        </TripodItemImgWrapper>
                        <TripodItemTextWrapper>
                          <div>{data.name}</div>
                          <div>Lv.{data.level}</div>
                        </TripodItemTextWrapper>
                      </TripodItemWrapper>
                    );
                  })}
                </TripodWrapper>

                <GemRuneWrapper>
                  <GemWrapper>
                    {d.gem.map((data, index) => {
                      return (
                        <GemItemWrapper key={index}>
                          <GemItemImg url={data.icon} />
                          <div>{data.name}</div>
                        </GemItemWrapper>
                      );
                    })}
                  </GemWrapper>

                  <RuneWrapper>
                    <RuneImg url={d.runeIcon} />
                    <div>{d.rune}</div>
                  </RuneWrapper>
                </GemRuneWrapper>
              </SkillItemWrapper>
            );
          })}
        </SkillContainer>
        <SkillContainer>
          {SkillData.map((d, i) => {
            return (
              <SkillItemWrapper key={i}>
                <SkillProfileWrapper>
                  <SkillProfileImg url={d.icon} />
                  <div>
                    <SkillProfileTextWrapper>
                      <div>{d.level}레벨</div>
                      <FlexWrapper>
                        {d.a.map((data, index) => {
                          return (
                            <SkillProfileTextRight key={index}>
                              {data}
                            </SkillProfileTextRight>
                          );
                        })}
                      </FlexWrapper>
                    </SkillProfileTextWrapper>
                    <div>{d.name}</div>
                  </div>
                </SkillProfileWrapper>

                <TripodWrapper>
                  {d.tripod.map((data, index) => {
                    return (
                      <TripodItemWrapper key={index}>
                        <TripodItemImgWrapper>
                          <TripodItemImg url={data.icon} />
                          <TripodItemImgLevel>
                            {data.position}
                          </TripodItemImgLevel>
                        </TripodItemImgWrapper>
                        <TripodItemTextWrapper>
                          <div>{data.name}</div>
                          <div>Lv.{data.level}</div>
                        </TripodItemTextWrapper>
                      </TripodItemWrapper>
                    );
                  })}
                </TripodWrapper>

                <GemRuneWrapper>
                  <GemWrapper>
                    {d.gem.map((data, index) => {
                      return (
                        <GemItemWrapper key={index}>
                          <GemItemImg url={data.icon} />
                          <div>{data.name}</div>
                        </GemItemWrapper>
                      );
                    })}
                  </GemWrapper>

                  <RuneWrapper>
                    <RuneImg url={d.runeIcon} />
                    <div>{d.rune}</div>
                  </RuneWrapper>
                </GemRuneWrapper>
              </SkillItemWrapper>
            );
          })}
        </SkillContainer>
      </SkillGrid>
    </>
  );
};

export default SkillJewelryTab;

const SkillContainer = styled.div`
  padding: 10px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  font-size: 11px;
`;
const SkillItemWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 10fr 1fr 24fr 4fr; */
  grid-template-columns: 2fr 5fr 1fr;
`;

const SkillProfileWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 5px;
  justify-content: center;
  padding-right: 5px;
`;

const SkillProfileImg = styled.div`
  border-radius: 3px;

  width: 100%;
  padding-top: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const SkillProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SkillProfileTextRight = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 50px;
  padding: 4px 7px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const TripodWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 10px;
  border-left: 1px solid #e5e7eb;
`;

const TripodItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5px;
  align-items: center;
`;

const TripodItemImgWrapper = styled.div`
  position: relative;
`;

const TripodItemImg = styled.div`
  border-radius: 100%;

  width: 70%;
  padding-top: 70%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const TripodItemImgLevel = styled.div`
  position: absolute;
  bottom: -2px;
  right: 10px;
  border: 2px solid white;
  border-radius: 3px;
  background-color: black;
  color: white;
  padding: 0 2px;
  font-size: 12px;
`;

const TripodItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const GemRuneWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 5px;
`;

const GemWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  /* justify-content: center; */
  /* align-items: center; */
`;
const GemItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const GemItemImg = styled.div`
  border-radius: 100%;

  width: 30%;
  padding-top: 30%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const RuneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RuneImg = styled.div`
  border-radius: 100%;

  width: 75%;
  padding-top: 75%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
