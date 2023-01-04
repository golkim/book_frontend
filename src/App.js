import './App.css';
// import Sub from './Sub';
// import Wood from './Wood';
// import TuseMemo from './TuseMemo';
import TuseRef from './TuseRef';

// JSX if 사용 불가 대신 삼항연산자 사용 가능(조건 ? 값:값)
// 조건부 렌더링 &&후에  true이면 실행
function App() {
  console.log('APP실행됨===========');
  return (
    <div className="App">
      {/* <h1>안녕하세요...</h1> */}
      {/* <Wood /> */}
      {/* <Sub /> */}
      {/* <TuseMemo /> */}
      <TuseRef />
    </div>
  );
}

export default App;
