import React, {useEffect, useState} from 'react';

// class ComLife extends React.Component{
//     constructor(){
//         super();
//         this.state = {age: 20}
//         alert('컴포넌트 생성');
//     }
//     componentDidMount(){alert('컴포넌트 생성');}
//     componentDidUpdate(){alert('컴포넌트 갱신');}
//     componentWillUnmount(){alert('컴포넌트 소멸');}


//     render(){
//         return(
//             <div>
//                 홍길동의 나이는 {this.state.age}세 입니다.<br />
//                 <button onClick={() => this.setState({age: this.state.age+1})}>나이변경</button>
//             </div>
//         );
//     }
// }

//useEffect() mount,update 시 실행됨
/*
    useEffect()코드는 html렌더링 후에 동작됨.
    따라서 오래걸리는 연산작업이나 서버에서 데이터를 가져오는 작업, 타이머를 장착하는 작업등을 기술할때 사용한다.
    html의 rendering 기능이 아닌 다른 부가 작업에 대한 기능을 수행하는 함수라하여 Side Effect에서 따온 명침임.
*/

function ComLife(){
    let [age, ageChk] = useState(20);
    let [at, alertchk] = useState(true);

    useEffect(() =>{
        let timer = setTimeout(() =>{alertchk(false)}, 5000);
        //return이 붙으면 생성,갱신,소멸 시 모두 적용됨

        return() => {
            alert('생성, 갱신');
            clearTimeout(timer);
        }
    }, []);

    /*
    1. 재랜더링(생성, 갱신 시) 마다 코드를 실행하고 싶은 경우
    useEffect(() => {});

    2. mount(생성)시 1회만 코드를 실행하고 싶은 겨우
    useEffect(() =>{},[]);

    3. 생성, 갱신, 소멸 시 코드를 실행하고 싶은 경우
    useEffect(() => {
        return() => {
            실행코드...;
        }
    }, []); =>한번만 실행해라
    */

    return(
        <div>
            홍길동님의 나이는 {age}세 입니다.<br />
            {
                at === true ? <button onClick={()=> ageChk(++age)}>나이변경</button> : null
            }
        </div>
    );
    
}

export default ComLife;



