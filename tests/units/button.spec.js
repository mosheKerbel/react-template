import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import Button from '../../src/Button/Button';
import ButtonTestkit from '../../src/Button/Button.testkit';


let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe.only('Test Button', () => {
  test('should write to console after clicking', () => {
    ReactDOM.render(<App/>, container);
    const buttonTeskit = ButtonTestkit({container, dataHook: 'btn1'});
    expect(buttonTeskit.exists()).toEqual(true);
    const p = container.querySelector('p');
    console.log(p.textContent);
    buttonTeskit.click();
    console.log(p.textContent);
    // let buttonDriver = ButtonDriver({element: button});
    // buttonDriver.click();
    // button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    // console.log(container.getDOMNode());
    // expect(label.textContent).toEqual('Number of clicks 1');
  });
});
