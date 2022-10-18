/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import BestButton from '../components/BestButton.JS';

 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';


 test('renders correctly', () => {
   renderer.create(<BestButton />);
 });
