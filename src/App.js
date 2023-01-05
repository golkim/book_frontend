import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/Footer';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Button } from 'react-bootstrap';

// JSX if 사용 불가 대신 삼항연산자 사용 가능(조건 ? 값:값)
// 조건부 렌더링 &&후에  true이면 실행
function App() {
  console.log('APP실행됨===========');
  return (
    <div>
      <Button variant="outline-primary">멋지다</Button>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<HomePage />} />
        <Route path="/login/:id" exact={true} element={<LoginPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
