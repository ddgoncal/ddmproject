/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Pokecard from '../components/Pokecard';

 // Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

 it('renders correctly', () => {
   renderer.create(<Pokecard />);
 });
