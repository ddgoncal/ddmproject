/**
 * @format
 */

import 'react-native';
import React from 'react';
import BestButton from '../components/BestButton.JS';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Text } from 'react-native';


test('renders correctly', () => {
  const render = renderer.create(<BestButton texto="teste" />);
  const renderr = render.root;

  expect(renderr.findByType(Text).props.children).toBe('teste');
});
