import React from 'react';

export default {
  title: 'Buttons',
};//

export const BBB = () => <button onClick={()=>console.log('yo!')} data-hook={"btn1"}>Hello world</button>;

BBB.story = {
  name: 'normal',
};
