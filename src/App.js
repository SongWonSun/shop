import './App.css';
// import $ from 'jquery';
// import useState from 'react';
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import { Routes, Route} from 'react-router-dom';
// import {Items} from './Items';
import Main from './Main';

function App() {
  return(
  <div className='App'>
    {/* 메뉴바 */}
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='/'>ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/cart'>Cart</Nav.Link>
            <Nav.Link href='/detail'>Detail</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/detail' element={<div>상세페이지임</div>}/>
      <Route path='/cart' element={<div>장바구니 페이지 임</div>}/>
    </Routes>
  </div>
  );
}

export default App;
