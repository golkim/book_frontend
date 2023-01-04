import { useState } from 'react';

export default function Wood() {
  let list = [1, 2, 3];

  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
    console.log('add', number);
  };

  // const [users, setUsers] = useState([{ id: 5, name: '러브' }]);
  const [users, setUsers] = useState([]);

  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '임꺽정' },
      { id: 3, name: '장보고' },
      { id: 4, name: '코스코' },
    ];
    setUsers([...sample]);
  };

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
      <div>
        숫자:{number} <button onClick={add}>더하기</button>
      </div>
      <div>
        <div>
          {users.map((u) => (
            <h1>
              {u.id}, {u.name}
            </h1>
          ))}
        </div>
        <button onClick={download}>유저다운로드</button>
      </div>
    </div>
  );
}
