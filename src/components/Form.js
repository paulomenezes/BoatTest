import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { reduxForm, Field } from 'redux-form';

import styles from './Form.styles';
import TextEdit from './TextEdit';
import TextEditIcon from './TextEditIcon';

export const required = value => (value ? undefined : true);
export const minLength = min => value =>
  value && value.length < min ? true : undefined;
export const length6 = value =>
  value && value.length !== 6 ? true : undefined;
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? true : undefined;
const minLength2 = minLength(2);
const minLength3 = minLength(3);

const Form = props => (
  <View style={styles.container}>
    <View style={styles.fieldRow}>
      <Field
        style={styles.inputLeft}
        name="bookingReference"
        component={TextEdit}
        placeholder="Booking Reference"
        validate={[required, alphaNumeric, length6]}
      />
      <Field
        style={styles.inputRight}
        name="lastName"
        component={TextEdit}
        placeholder="Last name"
        validate={[required, minLength2]}
      />
    </View>
    <View style={styles.input}>
      <Field
        name="departing"
        component={TextEditIcon}
        placeholder="Departing"
        validate={[required, minLength3]}
      />
    </View>
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonShadow}>
        <Text style={styles.buttonText}>Find booking</Text>
      </View>
    </TouchableOpacity>
  </View>
);

export default reduxForm({ form: 'form' })(Form);
