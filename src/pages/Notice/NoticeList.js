import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


const NoticeList = () => {
  const [noticeList, setNoticeList] = useState([]);
  
  const [currentPage, setCurrentPage] = useState(1);

  const { noticeId } = useParams();


  // 가짜 더미 데이터 일단 만들었3
  // 여기 자리에 데이터 넣으면 끝나3
  // 그리고 카테고리별로 color 색깔 다르게 css 추가해주세요
  useEffect(() => {
    const dummyData = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      category: '공지',
      title: `공지사항 제목 ${index + 1}`,
      date: '2023-03-07',
      views: Math.floor(Math.random() * 100),
      replys: Math.floor(Math.random() * 100)
    }));

    setNoticeList(dummyData);
  }, []);


  // 페이징 처리
  const movePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // 이전페이지 이동
  const movePrevPage = () => {
    if (currentPage > 1) {
      movePageChange(currentPage - 1);
    }
  };

   // 다음페이지 이동

  const moveNextPage = () => {
    if (currentPage < 10) {
      movePageChange(currentPage + 1);
    }
  };

  const moveNoticeDetailClick = (noticeId) => {
     console.log('Wait Next Time... plz')
  }


  return (
    <BoardContainer>
      <Title>공지사항</Title>
      {noticeList.slice((currentPage - 1) * 10, currentPage * 10).map((notice) => (
        <NoticeItem key={notice.id} onClick={() => moveNoticeDetailClick(notice.id)}>
          <div>
            <Category>{notice.category}</Category>
          </div>
          <TitleText>{notice.title}</TitleText>
          <Date>{notice.date}</Date>
          <Views>👁️  {notice.views}</Views>
          <Replys>🌱  {notice.replys}</Replys>
        </NoticeItem>
      ))}

<PageNavigation>
        <PageMoveButton onClick={movePrevPage}>이전 페이지</PageMoveButton>
        <PageButtonContainer>
          {[...Array(10).keys()].map((page) => (
            <PageButton key={page + 1} onClick={() => movePageChange(page + 1)}>
              {page + 1}
            </PageButton>
          ))}
        </PageButtonContainer>
        <PageMoveButton onClick={moveNextPage}>다음 페이지</PageMoveButton>
      </PageNavigation>
    </BoardContainer>
  );
};

const BoardContainer = styled.div`
  background-color: #1f1e1f;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h4`
  margin-bottom: 20px;
  margin-left: 30px;
  font-size: 50px;
  text-align: left;
`;

const NoticeItem = styled.div`
  background-color: #1f1e1f;
  border-bottom: 1px solid #dce2f7;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
`;

const Category = styled.div`
  font-weight: bold;
  color: #fff;
  border-radius: 20px;
  border: solid 1px #dce2f7;
`;

const TitleText = styled.div`
  margin-top: 10px;
  margin-left: 22px;
  font-size: 18px;
  color: #fff;
  text-align: left;
  
`;

const Date = styled.div`
  color: #ccc;
  margin-top: 5px;
`;

const Views = styled.div`
  color: #bbb;
  margin-top: 5px;
`;

const Replys = styled.div`
    color: #bbb;
    margin-top: 5px;
    border-radius: 20px;
    border: solid 1px #dce2f7;
`;


// 페이징 처리

const PageNavigation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PageButton = styled.button`
  margin: 0px;
  padding: 8px 12px;
  background-color: #1f1e1f;
  color: white;
  border: 1px solid #dce2f7;
  cursor: pointer;

  &:hover {
    background-color: #dce2f7;
    color: #1f1e1f;
  }
`;

const PageMoveButton = styled.button`
  margin: 0px;
  padding: 5px 12px;
  background-color: #1f1e1f;
  color: white;
  border: 1px solid #dce2f7;
  cursor: pointer;

  &:hover {
    background-color: #dce2f7;
    color: #1f1e1f;
  }
`;


export default NoticeList;
