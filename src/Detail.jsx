import './App.css';
import {useState} from 'react';
import { useParams } from 'react-router-dom';

export const Detail =(props) =>{
    let [likecnt, likecntchk] = useState(0);
    let {pid, ln} = useParams();
    if(pid > ln) pid =0;
    return(
        <div className='MainImgDiv'>
            <div className='imgBox'>
                <div className='imgCon' alt={"이미지"+pid} style={{backgroundImage:'url('+process.env.PUBLIC_URL + '/img/jp' + pid + '.png'}} />
            </div>
            <h4>상품{pid}</h4>
            <p>상품{pid} 설명</p>
            <p className='lkcnt' onClick={()=> likecntchk(++likecnt)}>좋아요 {likecnt}</p>
        </div>
    );
}