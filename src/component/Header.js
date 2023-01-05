import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
  background-color: ${(props) => props.backColor};
`;

const Header = () => {
  return (
    <>
      {/* <HeaderList backColor="orange"> */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              홈
            </Link>
            <Link to="/login/10" className="nav-link">
              로그인
            </Link>
            {/* <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/login/10">로그인</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      {/* </HeaderList> */}
    </>
  );
};

export default Header;
