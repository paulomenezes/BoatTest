import 'react-native';
import React from 'react';
import TextEditIcon from '../TextEditIcon.js';

import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

it('renders correctly', () => {
  const props = {
    meta: {
      touched: false,
      active: false,
      error: undefined
    },
    input: {}
  };
  const tree = renderer.create(<TextEditIcon {...props} />);

  expect(tree).toMatchSnapshot();
});

it('Gray border when not touched', () => {
  const props = {
    meta: {
      touched: false,
      active: true,
      error: undefined
    },
    input: {}
  };

  const renderer = new ShallowRenderer();
  renderer.render(<TextEditIcon {...props} />);

  const fieldBorder = renderer.getRenderOutput().props.children.props.style[2]
    .borderColor;

  expect(fieldBorder).toBe('#CFCFCF');
});

it('Gray border when is valid', () => {
  const props = {
    meta: {
      touched: true,
      active: false,
      error: undefined
    },
    input: {}
  };

  const renderer = new ShallowRenderer();
  renderer.render(<TextEditIcon {...props} />);

  const fieldBorder = renderer.getRenderOutput().props.children.props.style[2]
    .borderColor;

  expect(fieldBorder).toBe('#CFCFCF');
});

it('Gray border when invalid', () => {
  const props = {
    meta: {
      touched: true,
      active: false,
      error: true
    },
    input: {}
  };

  const renderer = new ShallowRenderer();
  renderer.render(<TextEditIcon {...props} />);

  const fieldBorder = renderer.getRenderOutput().props.children.props.style[2]
    .borderColor;

  expect(fieldBorder).toBe('#D75452');
});
