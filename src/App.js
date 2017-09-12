import React from 'react';
import { View, Text, Image } from 'react-native';

import { Provider } from 'react-redux';

import Form from './components/Form';
import store from './configureStore';
import styles from './App.styles.js';

const App = props => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text style={styles.intro}>
        Log-in now to view your upcoming and past flights
      </Text>
      <View style={styles.titleArea}>
        <Image
          style={styles.images}
          source={require('../assets/images/Image1.png')}
        />
        <Text style={styles.title}>Cut the queue. Check in now</Text>
        <Image
          style={styles.images}
          source={require('../assets/images/Image2.png')}
        />
      </View>
      <Text style={styles.description}>
        Check in online between 72 hours and 1 hour before departude. Head to
        the airport and get outta here. It's that simple!
      </Text>
      <Form />
    </View>
  </Provider>
);

export default App;
