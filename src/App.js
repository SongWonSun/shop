import './App.css';
// eslint-disable-next-line no-unused-vars
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
// import {useState} from 'react';
// eslint-disable-next-line no-unused-vars
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import {Detail} from './Detail';
import {Items} from './Items';
// import Main from './Main';

// function App() {
//   let arr = [1,2,3,4,5,6,7,8];
//   let [modal, setModal] = useState(0);
//   let mstyle ={
//     position: 'absolute', width:'50px',
//     height: '50px', top: '10px', right:'20px',
//     background: 'red', color: 'white',
//     borderRadius: '8px',
//     fontSize: '20pt'
//   };
//   return(
//     <div className='App'>
//       {/* 메뉴바 */}
//       <Navbar bg='light' expand='lg'>
//         <Container>
//           <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav'/>
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto'>
//               <Nav.Link href='#home'>Home</Nav.Link>
//               <Nav.Link href='#cart'>Cart</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       {/*  메인이미지 */}
//       <div className='main-bg'></div>
//       <div className='container'>
//         <div className='row'>
//           {
//             arr.map((v,i) => {
//               if(v>8) v=0;
//               return( <Items key={i} ord={v}/>)
//             })
//           }
//         </div>
//       </div>
//       <div className='modBox' style={{display: 'none'}}>
//         <div style={{width: '100%', position: 'relative'}}>
//           <div style={mstyle} onClick={() => {$('.modBox').hide();}}>X</div>
//         </div><br />
//       <div>
//         <h3>aa</h3>
//         <p></p>
//       </div>
//       </div>
//     {/* <Button variant='primary'>primary 버튼 </Button> */}
//     </div>
//   );
// }

// function App(){
//   return(
//   <div className='App'>
//     {/* 메뉴바 */}
//     <Navbar bg='light' expand='lg'>
//       <Container>
//         <Navbar.Brand href='/'>ShoeShop</Navbar.Brand>
//         <Navbar.Toggle aria-controls='basic-navbar-nav'/>
//         <Navbar.Collapse id='basic-navbar-nav'>
//           <Nav className='me-auto'>
//             <Nav.Link href='/'>Home</Nav.Link>
//             <Nav.Link href='/cart'>Cart</Nav.Link>
//             <Nav.Link href='/detail'>Detail</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     <Routes>
//       <Route path='/' element={<Main />} />
//       <Route path='/detail' element={<div>상세페이지 임</div>} />
//       <Route path='/cart' element={<div>장바구니 페이지 임</div>} />
//     </Routes>
//     {/* <Button variant='primary'>primary 버튼 */}
//     </div>
//     );
// }

// function App(){
//   let navigate = useNavigate();
//   return(
//     <div className='App'>
//       {/* 메뉴바 */}
//       <Navbar bg='light' expand='lg'>
//         <Container>
//           <Navbar.Brand href='/'>Shop</Navbar.Brand>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='me-auto'>
//               <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
//               <Nav.Link onClick={()=> navigate('/cart')}>Cart</Nav.Link>
//               <Nav.Link onClick={()=> navigate('/detail')}>Detail</Nav.Link>
//               <Nav.Link onClick={()=> navigate('/about')}>회사정보</Nav.Link>
//               <Nav.Link onClick={()=> navigate('/about/member')}>사원정보</Nav.Link>
//               <Nav.Link onClick={()=> navigate('/about/loc')}>회사위치</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <Routes>
//         <Route path='/' element={<Main />} />
//         <Route path='/detail' element={<div>상세페이지 임</div>} />
//         <Route path='/cart' element={<div>장바구니 페이지 임</div>} />
//         {/* 일반 라우터 표현*/}
//         {/* <Route path=”/about” element={<About />} 
//             <Route path=“/about/member” element={<Member />}
//             <Route path=”/about/loc” element={<Loc />} /> */}

//         {/* nested(중첩) 라우터 표현 */}
//         <Route path='/about' element={<About />}>
//           <Route path='member' element={<Member />}  />
//           <Route path='loc' element={<Loc />} />
//         </Route>
//         {/* 404에러페이지 만들기 */}
//         <Route path="*" element={<div>에러코드: 404<br />없는 페이지입니다.<br /></div>} />
//       </Routes>
//       {/* <Button variant='primary'>primary 버튼</Button> */}
      
//     </div>
//   );
// }
// function About(){
//   return(
//     <>
//       <div>회사정보 페이지</div>
//       <Outlet></Outlet>
//     </>
//   );
// }
// function Member(){
//   return(<div>사원정보 페이지</div>);
// }
// function Loc(){
//   return(<div>회사위치 페이지</div>);
// }


function App(){
  let navigate = useNavigate();
  let arr = [1,2,3,4,5,6,7,8];
  return(
    <div className='App'>
      {/* 메뉴바 */}
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link onClick={()=> navigate('/')}>Home</Nav.Link>
              <Nav.Link onClick={()=> navigate('/cart')}>Cart</Nav.Link>
              <Nav.Link onClick={()=> navigate('/about')}>회사정보</Nav.Link>
              <Nav.Link onClick={()=> navigate('/about/member')}>사원정보</Nav.Link>
              <Nav.Link onClick={()=> navigate('/about/loc')}>회사위치</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={
        <>
            {/* 메인이미지 */}
            <div className="main-bg"></div>
          <div className="container">
            <div className="row">
              {
                arr.map((v, i) => {
                if (v > arr.length) v = 0;
                return (
                <Items key={i} ord={v} arrlen={arr.length} />
                )
              })
              }
            </div>
          </div>
        </>
        } />
        <Route path='/detail/:pid/:ln' element={<Detail />} />
        <Route path='/cart' element={<div>장바구니 페이지 임</div>} />
        {/* 일반 라우터 표현*/}
        {/* <Route path='/about' element={<About />} 
            <Route path='/about/member' element={<Member />}
            <Route path='/about/loc' element={<Loc />} /> */}

        {/* nested(중첩) 라우터 표현 */}
        <Route path='/about' element={<About />}>
          <Route path='member' element={<Member />}  />
          <Route path='loc' element={<Loc />} />
        </Route>
        {/* 404에러페이지 만들기 */}
        <Route path="*" element={<div>에러코드: 404<br />없는 페이지입니다.<br /></div>} />
      </Routes>
      {/* <Button variant='primary'>primary 버튼</Button> */}
      
    </div>
  );
}
function About(){
  return(
    <>
      <div>회사정보 페이지</div>
      <Outlet></Outlet>
    </>
  );
}
function Member(){
  return(<div>사원정보 페이지</div>);
}
function Loc(){
  return(<div>회사위치 페이지</div>);
}

export default App;
