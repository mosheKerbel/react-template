import ReactTestUtils from 'react-dom/test-utils';

const buttonDriver = ({element}) => {
  return {
    exists: () => !!element,
    click: () => {
      try {
        console.log('hello');
        ReactTestUtils.Simulate.click(element);
        console.log('hello');
      } catch (e) {
        element.simulate('click');
      }
    },
  };
};

export default buttonDriver;
