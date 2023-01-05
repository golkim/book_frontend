import React, { useEffect, useState } from 'react';
import Home from '../component/home/Home';

const HomePage = () => {
  //http 요청(fetch, axios(다운로드))
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState({});

  //빈배열 한번만 실행
  useEffect(() => {
    // 다운로드 가정
    let data = [
      { id: 1, title: '제목1', content: '내용1' },
      { id: 2, title: '제목2', content: '내용2' },
      { id: 3, title: '제목3', content: '내용3' },
    ];
    //다운로드일 경우 처음에는 data에 빈데이타가 들어간다.
    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []);
  return (
    <div>
      <Home
        boards={boards}
        setBoards={setBoards}
        user={user}
        setUser={setUser}
      />
    </div>
  );
};

export default HomePage;
