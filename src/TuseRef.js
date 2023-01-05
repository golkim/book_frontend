import React, { createRef, useRef, useState } from 'react';
import styled from 'styled-components';
// useRef( 디자인)
//  dom을 변경할때 사용

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: pick cornflowerblue;
  background-color: rebeccapurple;
`;

function TuseRef(props) {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: 'kim' },
    { id: 2, name: 'choi' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <Title>sdoifjosjdfosdjfo</Title>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';
          myRefs[1].current.style.backgroundColor = 'red';
        }}
      >
        색변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
}

export default TuseRef;
