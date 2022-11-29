import {Table} from 'react-bootstrap';
import {Container} from './StyleCss';
import {useSelector, useDispatch} from 'react-redux';
import {changeCntAdd, changeCntMin} from './store';

function Cart(){
    let a = useSelector((st) => {return st});
    let b = useSelector((st) => st.storkst);
    let c = useSelector((st) => st.prddatast);
    // console.log(a);
    // console.log(a.userst);
    // console.log(b);

    //store에 요청을 보내주는 기능을 처리함
    let dispatch = useDispatch();
    return(
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>번호</th><th>상품명</th><th>수량</th><th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        c.map((v, i)=> {
                            return(
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.count}</td>
                                    <td>
                                        <button onClick={()=>{
                                            dispatch(changeCntMin(i))
                                        }}>-</button>&nbsp;&nbsp;
                                        <button onClick={()=>{
                                            dispatch(changeCntAdd(i))
                                        }}>+</button>
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}

export default Cart;