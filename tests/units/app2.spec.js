import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';


let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Test App', () => {
  test('should render', () => {
    ReactDOM.render(<App/>, container);
    const label = container.querySelector('p');
    expect(label.textContent).toEqual('Number of clicks 0');
    const button = container.querySelector('button');

    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    console.log(container.getDOMNode());
    expect(label.textContent).toEqual('Number of clicks 1');
  });
});
