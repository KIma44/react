import { useState } from "react";

/**
 * input 3개를 만든다.(productName, price, stock)
 * 
 * 확인 버튼을 누르면 table에 추가한다.
 */
function InputState4() {
    const [ products, setProducts ] = useState([]); // 배열
    const inputValueEmpty = {
        productName: '',
        price: '',
        stock: '',
    }
    const [ inputValue, setInputValue ] = useState(inputValueEmpty);    // 객체

    const handleOnChange = e => {
        const [ name, value ] = e.target.value;
        setInputValue(s => ({...s, [name]: value,}));
        // setInputValue({
        //     ...inputValue,
        //     [e.target.name]: e.target.value,
        // })
    }


    const handleOnClick = e => {
    //   setProducts([...products, inputValue]);
    setProducts((prev) => [...prev, inputValue]);
      setInputValue(inputValueEmpty);
    }


    return <div>
       <div>
    <label htmlFor="">상품명</label>
        <input type="text" name="productName" value={inputValue.productName} onChange={handleOnChange}/>
       </div>
       <div>
        <label htmlFor="">가격</label>
        <input type="text" name="price" value={inputValue.price} onChange={handleOnChange}/>
       </div>
       <div>
        <label htmlFor="">수량</label>
        <input type="text" name="stock" value={inputValue.stock} onChange={handleOnChange}/>
       </div>
     <div>
        <button onClick={handleOnClick} >확인</button>
     </div>
     <table>
        <thead>
            <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
            </tr>
        </thead>
        <tbody>
            {
                products.map((product, index) => (<tr key={index}>
                    
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                </tr>))
            }
        </tbody>
     </table>
    </div>
}
export default InputState4;