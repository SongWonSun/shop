import React, {useRef, useEffect} from 'react';
import { useState } from 'react';

function Field(){
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(()=>{
        count.current= count.current +1;
    })

    const inputRef = useRef(null);

    function handleFocus(){
        inputRef.current.disabled = false; //비활성화처리를 풀어라
        inputRef.current.focus();
    }
    function handleReset(){
        // inputRef.current.disabled = true; //비활성화처리 해라
        // inputRef.current.value = "";
        count.current = 0;
        setInputValue.current.value="";
    }
    return(
        <>
            <input disabled type="text" ref={inputRef} />
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>{count.current}</h1>
            <button onClick={handleFocus}>활성화</button>
            <button onClick={handleReset}>초기화</button>
        </>
    );
}
export default Field;