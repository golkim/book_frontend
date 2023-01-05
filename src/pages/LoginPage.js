import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Login from '../component/login/Login';

const LoginPage = () => {
  let params = useParams();

  console.log(params.id);
  console.log(params);

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
