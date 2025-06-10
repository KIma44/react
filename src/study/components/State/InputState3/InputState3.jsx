import { useState } from "react";

function InputState3() {
    const studentInputValueEmpy = {
        name: "",
        age: "",
        address: "",
    }

    const [ studentInputValue, setStudentInputValue ] = useState(studentInputValueEmpy);


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setStudentInputValue(pre => ({...pre, [name]: value}));
    }
    
    return <div>
        <h1>{studentInputValue.name}</h1>
        <h1>{studentInputValue.age}</h1>
        <h1>{studentInputValue.address}</h1>
        <input type="text" name="name" value={studentInputValue.name} onChange={handleOnChange}/>
        <input type="text" name="age" value={studentInputValue.age} onChange={handleOnChange}/>
        <input type="text" name="address" value={studentInputValue.address} onChange={handleOnChange}/>

        <button onClick={() => setStudentInputValue(studentInputValueEmpy)}>리셋</button>
    </div>
}
export default InputState3;