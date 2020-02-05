import React from 'react';
import {Button} from '@storybook/react/demo';

export default {
  title: 'Buttons',
};//

export const BBB = () => <Button>Hello world</Button>;

BBB.story = {
  name: 'normal',
};
