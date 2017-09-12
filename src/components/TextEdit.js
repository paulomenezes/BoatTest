import React from 'React';
import { TextInput, View } from 'react-native';
import styles from './TextEdit.styles';

const TextEdit = props => {
  const { input, meta, style, ...inputProps } = props;

  const validationStyles =
    meta.touched && !meta.active
      ? !meta.error ? styles.validField : styles.invalidField
      : styles.validField;

  return (
    <View style={styles.container}>
      <View style={[style, styles.inputArea, validationStyles]}>
        <TextInput
          style={styles.input}
          placeholderTextColor="#020202"
          {...inputProps}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          onFocus={input.onFocus}
          value={input.value}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export default TextEdit;
