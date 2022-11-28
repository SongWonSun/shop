import './App.css';
import {useState} from 'react';
import $ from 'jquery';
import {useNavigate} from 'react-router-dom';


// export const Items = (props) => {
//     let[likecnt, likecntchk] = useState(0); //0 은  false와 같음
//     let divStyle = {backgroundImage: 'url('+process.env.PUBLIC_URL + '/img/jp'+props.ord+'.png)'};

//     return(
//         <div className='col-lg-3' onClick={(e) => {
//             let x = e.pageX;
//             const y = e.pageY;
//             console.log(`x축: ${x}, y축: ${y}`);
//             $('.modBox').show();
//             $('.modBox').css({top: y+'px', left: x+'px'});
//             $('.modBox h3').text('상품 '+props.ord);
//             $('.modBox p').text('상품 '+props.ord+' 설명');
//         }}>
//             <div className='imgBox'>
//                 <div className='imgCon' alt={"이미지"+props.ord} style={divStyle}/>
//                 <h4>상품{props.ord}</h4>
//                 <p>상품{props.ord} 설명</p>
//                 <p className='lkcnt' onClick={() => likecntchk(++likecnt)}>좋아요 {likecnt}</p>
//             </div>
//         </div>
//     );
// }

// export const Items = (props) => {
//     let[likecnt, likecntchk] = useState(0); //0 은  false와 같음
//     let mstyle = {backgroundImage: 'url('+process.env.PUBLIC_URL + '/img/jp'+props.ord+'.png)'};
//     return(
//         <div className='col-lg-3'>
//             <div className='imgBox'>
//             <div className='imgCon' alt={"이미지" +props.ord} style={mstyle} onClick={(e) => {
//                 window.location.href='/detail'
//             // let x = e.pageX;
//             // const y = e.pageY;
//             // console.log(`x축: ${x}, y축: ${y}`);
//             // $('.modBox').show();
//             // $('.modBox').css({top: y+'px', left: x+'px'});
//             // $('.modBox h3').text('상품 '+props.ord);
//             // $('.modBox p').text('상품 '+props.ord+' 설명');
//         }} />
//                 <h4>상품{props.ord}</h4>
//                 <p>상품{props.ord} 설명</p>
//                 <p className='lkcnt' onClick={() => likecntchk(++likecnt)}>좋아요 {likecnt}</p>
//             </div>
//         </div>
//     );
// }

// export const Items = (props) =>{
//     let [likecnt, likecntchk] =useState(0);
//     let navigate =useNavigate();
//     return(
//         <div className='col-lg-3'>
//         {/* //     navigate('/detail?id='+props.ord);
//         //     //window.location.href = '/datail';
//         //     // let x = e.pageX;
//         //     // let y = e.pageY;
//         //     // console.log(`mouse가 클릭된 위치의 x축: ${x}, y축: ${y}`);
//         //     // $('.modBox').show();
//         //     // $('.modBox').css({top: y +'px', left:x +'px'});
//         //     // $('.modBox h3').text('상품 '+ props.ord);
//         //     // $('.modBox p').text('상품 '+props.ord+' 설명'); */}
//             <div className='imgBox'>
//                 <div className='imgCon' alt={"이미지"+props.ord} style={{backgroundImage:'url('+process.env.PUBLIC_URL +'/img/jp'+props.ord+'.png)'}} onClick={(e) => {
//             navigate('/detail?id='+props.ord);}} />
//             <h4>상품{props.ord}</h4>
//             <p>상품{props.ord} 설명</p>
//             <p className='lkcnt' onClick={()=> likecntchk(++likecnt)}>좋아요 {likecnt}</p>
//             </div>
//         </div>
//     );
// }

//props는 부모에서 멀 보냈다는 뜻
export const Items = (props) =>{
    let [likecnt, likecntchk] =useState(0);
    let navigate =useNavigate();
    return(
        <div className='col-lg-3'>
        {/* //     navigate('/detail?id='+props.ord);
        //     //window.location.href = '/datail';
        //     // let x = e.pageX;
        //     // let y = e.pageY;
        //     // console.log(`mouse가 클릭된 위치의 x축: ${x}, y축: ${y}`);
        //     // $('.modBox').show();
        //     // $('.modBox').css({top: y +'px', left:x +'px'});
        //     // $('.modBox h3').text('상품 '+ props.ord);
        //     // $('.modBox p').text('상품 '+props.ord+' 설명'); */}
            <div className='imgBox'>
                <div className='imgCon' alt={"이미지"+props.ord} 
                style={{backgroundImage:'url('+process.env.PUBLIC_URL +'/img/jp'+props.ord+'.png)'}} 
                onClick={(e) => {navigate('/detail/'+props.ord+'/'+props.arrlen);}} />
            <h4>상품{props.ord}</h4>
            <p>상품{props.ord} 설명</p>
            <p className='lkcnt' onClick={()=> likecntchk(++likecnt)}>좋아요 {likecnt}</p>
            </div>
        </div>
    );
}