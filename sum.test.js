const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(5);
});

import React from 'react';
import sum from './sum';
import { shallow } from 'enzyme';

it('renders', () => {
  const wrapper = shallow(<Calculator />);
  expect(wrapper.find('div').text()).toEqual('TODO NEXT');
});