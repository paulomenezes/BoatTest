import 'react-native';
import React from 'react';
import { reduxForm } from 'redux-form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Form, { required, minLength, length6, alphaNumeric } from '../form.js';

import renderer from 'react-test-renderer';

jest.mock('../TextEdit', () => 'TextEdit');
jest.mock('../TextEditIcon', () => 'TextEditIcon');

const store = createStore(() => ({}));
const Decorated = reduxForm({ form: 'form' })(Form);

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Decorated />
    </Provider>
  );

  expect(tree).toMatchSnapshot();
});

describe('validations', () => {
  it('Required validation', () => {
    expect(required('KY5VHA')).toBeFalsy();
    expect(required('Smith')).toBeFalsy();
    expect(required('SIN')).toBeFalsy();
    expect(required(null)).toBeTruthy();
    expect(required(undefined)).toBeTruthy();
    expect(required('')).toBeTruthy();
  });

  it('Minimum length validation', () => {
    expect(minLength(3)('A')).toBeTruthy();
    expect(minLength(3)('AB')).toBeTruthy();
    expect(minLength(3)('ABC')).toBeFalsy();

    expect(minLength(2)('A')).toBeTruthy();
    expect(minLength(2)('AB')).toBeFalsy();
    expect(minLength(2)('ABC')).toBeFalsy();
  });

  it('Character with length 6', () => {
    expect(length6('AAAAA')).toBeTruthy();
    expect(length6('AAAAAA')).toBeFalsy();
  });

  it('Character must be alphanumeric', () => {
    expect(alphaNumeric('ABC')).toBeFalsy();
    expect(alphaNumeric('ABC#')).toBeTruthy();
  });
});
