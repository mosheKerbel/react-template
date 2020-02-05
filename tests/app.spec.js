// Using react-test-renderer
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src/App';

describe('Counter', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<App counter={1} />);
  });
});
