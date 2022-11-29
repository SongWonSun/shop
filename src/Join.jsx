import axios from 'axios';
import $ from 'jquery';

function Join(){
    return(
        <div>
            <h3>회원가입</h3>
            아이디 : <input type="text" id = 'userId' /><br />
            비번 : <input type="text" id = 'password' /><br />
            이름 : <input type="text" id= 'name' /><br />
            권한 : <input type="text" id='auth' placeholder='super 또는 noraml' /><br />
            <button onClick={()=> {
                const obj = {
                    url : 'http://localhost:8090/member/join',
                    method : 'POST',
                    headers:{
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json;charset=UTF-8'
                    },
                    data: {
                        'userId' : $('#userId').val(),
                        'password' : $('#password').val(),
                        'name' :$('#name').val(),
                        'auth' : $('#auth').val()
                    }
                };
                if($('#userId').val() !='' && $('#password').val() !='' && $('#name').val() != '' && $('#auth').val() !=''){
                    axios(obj).then(res =>{
                        console.log(res);
                        if(res.data = 'ok'){
                            alert('회원가입이 되었습니다.');
                            $('#userId').val('');
                            $('#password').val('');
                            $('#name').val('');
                            $('#auth').val('');
                        }
                    })
                } else{
                    alert('모두 입력해주세요.');
                }
            }}>확인
            </button>
        </div>
    );
}

export default Join;