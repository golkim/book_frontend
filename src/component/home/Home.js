import React from 'react';
import styled from 'styled-components';

//아래 props와 class에 있는 props는 다르다...
const StyledDeleteBtn = styled.button`
  color: ${(props) => (props.v.username === 'ssar' ? 'blue' : 'red')};
`;

const StyledDeleteBtn2 = styled(StyledDeleteBtn)`
  background-color: brown;
`;

//class방식
const Home = (props) => {
  //구조분할 할당
  const { boards, setBoards, user, setUser } = props;
  console.log('boards: ', boards);
  console.log('user: ', user);

  return (
    <div>
      <h1>홈{user.username}</h1>
      <StyledDeleteBtn2 v={user}>상속받은 버튼</StyledDeleteBtn2>
      <StyledDeleteBtn
        v={user}
        onClick={() => setUser({ ...user, username: '쌀2' })}
      >
        사용자이름변경
      </StyledDeleteBtn>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((n) => (
        <h3 key={n.id}>
          제목 : {n.title} 내용 : {n.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
