import React from 'React';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './TextEdit.styles';

const TextEditIcon = props => {
  const { input, meta, style, ...inputProps } = props;

  const validationStyles =
    meta.touched && !meta.active
      ? !meta.error ? styles.validField : styles.invalidField
      : styles.validField;

  return (
    <View>
      <View style={[styles.inputArea, styles.inputIconArea, validationStyles]}>
        <Icon name="map-marker" size={20} color="#020202" style={styles.icon} />
        <TextInput
          {...inputProps}
          style={styles.input}
          placeholderTextColor="#020202"
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

export default TextEditIcon;
