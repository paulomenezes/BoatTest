import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('../components/Form', () => 'Form');

it('renders correctly', () => {
  const tree = renderer.create(<App />);

  expect(tree).toMatchSnapshot();
});
