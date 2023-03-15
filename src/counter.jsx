import {useState} from 'react'

function Counter() {
  const [number, setNumber] = useState(0);
  // 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
  const onIncrease = () =>{
    setNumber(prevNum => prevNum+1); 
    // setNumber(number+1)
  }
  const onDecrease = () =>{
    setNumber(prevNum => prevNum-1); 
    // setNumber(number-1)
  }
  return (
    <div >
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
