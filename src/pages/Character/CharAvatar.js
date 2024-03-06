import styled from "styled-components";
import CharAvatarItem from "../../conponents/molecules/CharAvatarItem";
import CharAvatarItemRight from "../../conponents/molecules/CharAvatarItemRight";

//덧입기와 순서, 없는 데이터 undefined?는 백에서 정제.
const AvatarData = [
  {
    Type: "무기 아바타",
    Name: "자비로운 도약의 서브 머신건",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4556.png",
    Grade: "전설",
  },
  {
    Type: "무기 덧입기",
    Name: "3주년 추억 서브 머신건 (이벤트)",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4787.png",
    Grade: "영웅",
  },
  {
    Type: "상의 아바타",
    Name: "자비로운 도약 상의",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4551.png",
    Grade: "전설",
  },
  {
    Type: "상의 덧입기",
    Name: "순진한 토토 후드 점퍼",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/normal_avatar/normal_avatar_37.png",
    Grade: "영웅",
  },
  {
    Type: "하의 아바타",
    Name: "자비로운 도약 하의",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4552.png",
    Grade: "전설",
  },
  {
    Type: "하의 덧입기",
    Name: "3주년 추억 하의 (이벤트)",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4775.png",
    Grade: "영웅",
  },
];

const AvatarDataRight = [
  {
    Type: "머리 아바타",
    Name: "자비로운 도약 머리",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4550.png",
    Grade: "전설",
  },
  {
    Type: "머리 덧입기",
    Name: "순진한 토토 후드 모자",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/normal_avatar/normal_avatar_39.png",
    Grade: "영웅",
  },
  {
    Type: "얼굴1 아바타",
    Name: "고혹적인 고딕 메이크업 (귀속)",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_6052.png",
    Grade: "영웅",
  },
  {
    Type: "얼굴2 아바타",
    Name: "3주년 추억 얼굴2 (이벤트)",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_4776.png",
    Grade: "영웅",
  },
  {
    Type: "변신 스킨",
    Name: "레거시 슈트 - W",
    Icon: "https://cdn-lostark.game.onstove.com/efui_iconatlas/shop_icon/shop_icon_7569.png",
    Grade: "영웅",
  },
  {
    Type: "악기 아바타",
    Name: undefined,
    Icon: undefined,
    Grade: undefined,
  },
  {
    Type: "발자국 아바타",
    Name: undefined,
    Icon: undefined,
    Grade: undefined,
  },
];

export default function CharAvatar() {
  return (
    <>
      <div>avatar</div>
      <AvatarContainer>
        <LeftWrapper>
          {Array(3)
            .fill()
            .map((_, i) => {
              let a = i * 2;
              let b = i * 2 + 1;
              return (
                <LeftItemWrapper key={i}>
                  <CharAvatarItem data={AvatarData[a]} />
                  <CharAvatarItem data={AvatarData[b]} />
                </LeftItemWrapper>
              );
            })}
        </LeftWrapper>
        <div />
        <RightWrapper>
          {AvatarDataRight.map((d, i) => {
            return( <>
            {i==2 && <div style={{marginTop:'30px'}}/>}
            <CharAvatarItemRight key={i} data={d} /></>);
          })}
        </RightWrapper>
      </AvatarContainer>
    </>
  );
}

const AvatarContainer = styled.div`
  border-radius: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  padding: 50px 20px;
  background-color: rgb(21, 24, 29);

  background-position: 47% 50%;
  background-repeat: no-repeat;
  background-image: url("https://img.lostark.co.kr/armory/8/efcfda75f82080bf5ddef0a4767de8aea4d37214f7fc30623bd351f437f86c86.png?v=20240227112717");
  background-size: 60% 84%;
`;

const LeftWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 40px;
`;

const LeftItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
