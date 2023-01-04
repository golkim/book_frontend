import React, { useEffect, useState } from 'react';

function Sub() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState(5);

  // useEffect 실행시점:
  //1. sub 함수가 처음 실행될때
  //2. 상태변수가 변경될때
  //3. 의존리스트 관리를 할수 있다.
  useEffect(() => {
    console.log('useEffect 실행됨===========');
  }, [data]);
  return (
    <div>
      <h1>Num: {num}</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        더하기
      </button>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        검색
      </button>
    </div>
  );
}

export default Sub;
