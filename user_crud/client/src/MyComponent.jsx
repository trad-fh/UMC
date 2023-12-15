import React, { useState, useEffect } from 'react';

export default function MyComponent({ someProp }) {
  const [count, setCount] = useState(0);

  const doSomething = () => {
    console.log(`Prop: ${someProp}, Count: ${count}`);
  };

  useEffect(() => {
    console.log('Effect 실행');
    doSomething();
  }, [doSomething, count, someProp]); 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => doSomething()}>Do Something</button>
    </div>
  );
}
