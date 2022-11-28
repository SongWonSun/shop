import './App.css';
import $ from 'jquery';
import useState from 'react';
import {Button, Container, Navbar, Nav} from 'react-bootstrap';
import {Items} from './Items';

function App() {
  let arr = [1,2,3,4,5,6,7,8];
  // let [modal, setModal] = useState(0);
  let mstyle ={
    position: 'absolute', width:'50px',
    height: '50px', top: '10px', right:'20px',
    background: 'red', color: 'white',
    borderRadius: '8px',
    fontSize: '20pt'
  };
  return(
    <div className='App'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#cart'>Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
       <div className='container'>
         <div className='row'>
           {
            arr.map((v,i) => {
              if(v>8) v=0;
              return( <Items key={i} ord={v}/>)
            })
          }
        </div>
      </div>
      <div className='modBox' style={{display: 'none'}}>
        <div style={{width: '100%', position: 'relative'}}>
          <div style={mstyle} onClick={() => {$('.modBox').hide();}}>X</div>
        </div><br />
      <div>
        <h3>aa</h3>
        <p></p>
      </div>
      </div>
    {/* <Button variant='primary'>primary 버튼 </Button> */}
    </div>
  );
}

export default App;
