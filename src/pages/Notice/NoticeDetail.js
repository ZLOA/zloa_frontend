import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";

const NoticeDetail = () => {
  const { noticeId } = useParams(1);
  const [notice, setNotice] = useState(null);

  const [prevNoticeId, setPrevNoticeId] = useState(null);
  const [nextNoticeId, setNextNoticeId] = useState(null);

  const [similarNoticeList, setSimilarNoticeList] = useState([]);


  const goToBack = () => {
    console.log('목록으로 돌아가기');
  }

  const goToNext = () => {
    console.log('다음 게시물로 들아가기');
  }

  const goToPrev = () => {
    console.log('이전 게시물로 들아가기');
  }
  // 가짜 더미 데이터 일단 만들었3
  // 여기 자리에 데이터 넣으면 끝나3
  // 그리고 카테고리별로 color 색깔 다르게 css 추가해주세요
  useEffect(() => {
    const dummyData = {
      id: noticeId,
      category: "공지",
      title: `공지사항 제목입니다. ${noticeId}`,
      content: `이것은 ${noticeId}번째 공지사항의 내용입니다.`,
      date: "2023-03-07",
      views: Math.floor(Math.random() * 100),
      replys: Math.floor(Math.random() * 100),
    };

    setNotice(dummyData);

    setSimilarNoticeList([
      {
        id: 1,
        category: "공지",
        title: "유사한 제목 1",
        date: "2023-03-07",
        views: 50,
        replys: 20,
      },
      {
        id: 2,
        category: "공지",
        title: "유사한 제목 2",
        date: "2023-03-07",
        views: 40,
        replys: 15,
      },
    ]);

    setPrevNoticeId(noticeId - 1);
    setNextNoticeId(noticeId + 1);
  }, [noticeId]);

  if (!notice) {
    return (
      <LoadingContainer>로딩중입니다.. 잠시만 기다려주세요</LoadingContainer>
    );
  }

  return (
    <BoardContainer>
      <NoticeColumn>
        <BigTitle>공지사항</BigTitle>
      </NoticeColumn>
      <NoticeColumn>
        <TitleFlex>
          <CategoryContainer>
            <Category>{notice.category}</Category>
          </CategoryContainer>
          <Title>{notice.title}</Title>
          <Date>{notice.date}</Date>
          <Views>👁️ {notice.views}</Views>
        </TitleFlex>
      </NoticeColumn>

      <NoticeColumn>
        <ContentContainer>
          <ContentItem>
            [점검 시간]
            <ContentPre>{notice.content}</ContentPre>
          </ContentItem>
          <ContentItem>
            [점검 내용]
            <ContentPre>{notice.content}</ContentPre>
          </ContentItem>
          <ContentItem>
            [주의사항]
            <ContentPre>{notice.content}</ContentPre>
          </ContentItem>
        </ContentContainer>
        <Replys>🌱 {notice.replys}</Replys>
      </NoticeColumn>

      <NoticeColumn>
        <ClickEventObject>
            <GoToBack onClick={goToBack}>≡</GoToBack>
            <GoToNextPost>
                <GoNext onClick={goToNext}>∧</GoNext>
                <GoPrev onClick={goToPrev}>∨</GoPrev>
            </GoToNextPost>
        </ClickEventObject>

      </NoticeColumn>

      <NoticeColumn>
        <SimilarPostLinks>
          {similarNoticeList.map((similarNotice) => (
            <NoticeItem key={similarNotice.id}>
              <CategoryContainer>
                <Category>{similarNotice.category}</Category>
              </CategoryContainer>
              <TitleText>{similarNotice.title}</TitleText>
              <Date>{similarNotice.date}</Date>
              <Views>👁️ {similarNotice.views}</Views>
              <SimReplys>🌱 {similarNotice.replys}</SimReplys>
            </NoticeItem>
          ))}
        </SimilarPostLinks>
      </NoticeColumn>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  background-color: #1f1e1f;
  color: white;
  padding: 20px;
  text-align: left;
`;

const NoticeColumn = styled.div`
  margin: 0;
  border-bottom: 3px solid #8522a3;
`;

const BigTitle = styled.h4`
  margin-bottom: 20px;
  margin-left: 30px;
  font-size: 50px;
  text-align: left;
`;

const Title = styled.div`
  margin-bottom: 10px;
  margin-left: 5px;
  font-size: 25px;
  text-align: left;
  font-weight: bold;
`;

const TitleFlex = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr 1fr 1fr;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CategoryContainer = styled.div`
  justify-content: center;
  margin: auto;
`;

const ContentPre = styled.pre`
  margin-left: 30px;
  padding: 20px;
  border-left: 1px white solid;
`;

const ContentItem = styled.div`
  margin: 10px;
  margin-bottom: 25px;
  padding: 15px;
`;

const Category = styled.div`
  font-weight: bold;
  color: #fff;
  border-radius: 20px;
  border: solid 1px #dce2f7;
`;

const Date = styled.div`
  color: #ccc;
  margin-top: 5px;
`;

const Views = styled.div`
  color: #bbb;
  margin-top: 5px;
  text-align: center;
`;

const Replys = styled.div`
  display: inline-block;
  color: #bbb;
  margin: 5px 5px 15px 25px;
  padding: 10px 50px 10px 15px;
  border-radius: 5px;
  border: solid 1px #dce2f7;
`;

const LoadingContainer = styled.div`
  color: white;
  text-align: center;
  margin-top: 50px;
`;

const ContentContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const SimilarPostLinks = styled.div`
  margin-top: 20px;
`;

const NoticeItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 7fr 1fr 1fr 1fr;
  font-size: 14px;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-top: 1px solid #fff;
`;

const TitleText = styled.div`
margin: auto;
  margin-left: 5px;
  font-size: 18px;
  text-align: left;
  font-weight: bold;
`;

const SimReplys = styled.div`
  display: inline-block;
  color: #bbb;
  border-radius: 5px;
  border: solid 1px #dce2f7;
`;

const ClickEventObject = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const GoToBack = styled.div`
    display: inline-block;
    border: 1px solid #dce2f7;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px 10px 40px 10px;
    padding: 10px 15px 10px 15px;
`;

const GoToNextPost = styled.div`
    margin: 10px;
`;

const GoNext = styled.div`
    display: inline-block;
    border: 1px solid #dce2f7;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    padding: 10px 15px 10px 15px;
`;

const GoPrev = styled.div`
    display: inline-block;
    border: 1px solid #dce2f7;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
    padding: 10px 15px 10px 15px;
`;
export default NoticeDetail;
