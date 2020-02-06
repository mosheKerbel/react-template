import React, {useState} from "react";
const App = () => {

  const [clicksNum, setClicksNum] = useState(0);

  return (
    <div>
      <h1>This is a React app</h1>
      <button data-hook={'btn1'} onClick={()=> setClicksNum(clicksNum+1)}>first button</button>
      <p>Number of clicks {clicksNum}</p>
    </div>
  );
};
export default App;
