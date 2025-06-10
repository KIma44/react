import { useState } from "react";

function InputState1() {
    const [ inputValue, setInputValue ] = useState("");
    const [ h1Text, setH1Text] = useState("");

    const [ inputValue1, setInputValue1 ] = useState('');
    const [ h1Text1, setH1Text1 ] = useState('');

    console.log('렌더링');

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    }
 
    const handleOnChange1 = (e) => {
        setInputValue1(e.target.value);
    }
    
    const handleClick = () => {
        setH1Text(inputValue);
        setH1Text1(inputValue1);
    }

   return <div>
        <h1>{h1Text}</h1>
        <h1>{h1Text1}</h1>
        <input type="text" onChange={handleOnChange} value={inputValue} />
        <input type="text" onChange={handleOnChange1} value={inputValue1} />
        <button onClick={handleClick} >확인</button>
    </div>
}
export default InputState1;