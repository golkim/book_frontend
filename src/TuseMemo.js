import React, { useMemo, useState } from 'react';

function TuseMemo() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState(' 합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((n) => (sum = sum + n));
    console.log('sum함수 실행됨:', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
      <div>
        {' '}
        {str} {addResult}
      </div>
      <div>
        <button
          onClick={() => {
            setList([...list, 5]);
          }}
        >
          리스트에 값 추가
        </button>
        <button
          onClick={() => {
            setStr('안녕');
          }}
        >
          문자변경
        </button>
      </div>
    </div>
  );
}

export default TuseMemo;
