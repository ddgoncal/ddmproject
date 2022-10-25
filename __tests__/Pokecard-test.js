/**
 * @format
 */

import 'react-native';
import React from 'react';
import Pokecard from '../components/Pokecard';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const renderPoke = renderer.create(<Pokecard name="Tentativa" />);
  const render = renderPoke.root;

  expect(render.findByProps({className: 'titlo'}).props.children).toBe(
    'Tentativa',
  );
});
