import {configureStore, createSlice} from'@reduxjs/toolkit';


//state 만들기
/*
    createSlice({
        name : 'state이름',
        initialState: '초기값
    })
*/
let user = createSlice({
    name: 'user',
    initialState : 'kim',
    reducers :{
        changeName(state){
            return 'join'+state
        },
        changeFirst(state){
            return state+1;
        }
    }
})
//변경함수 사용할 수 있도록 export하기
//actions : state에 변경 함수들을 action이라고 함.
export let {changeName, changefirst} = user.actions;

let stork = createSlice({
    name : 'stork',
    initialState : [10,50,30],
})

let prddata = createSlice({
    name : 'prddata',
    initialState : [
        {id: 1, name: '상품1', count:1},
        {id: 3, name: '상품3', count:2}
    ],
    reducers : { //state 변경 함수 만들기
        changeCntAdd(state, i){
            //i.payload state변경함수를 호출하는 곳에서 보내는 파라미터를 받을 때 사용
            state[i.payload].count +=1;
        },
        changeCntMin(state, i){

            //i.payload state변경함수를 호출하는 곳에서 보내는 파라미터를 받을 때 사용
            if(state[i.payload].count >0) state[i.payload].count -=1;
            else state[i.payload].count =0;
        }
    }
})

export let {changeCntAdd, changeCntMin} =prddata.actions;

//state 등록하기
export default configureStore({
    reducer: {
        //위에서 만든 user state를 등록함.
        //형식=> 별칭 : state객체명.reducer
        userst : user.reducer,
        storkst : stork.reducer,
        prddatast : prddata.reducer
    }
})