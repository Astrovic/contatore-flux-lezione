import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { increment, decrement, reset } from './src/actions';
import ContatoreStore from './src/ContatoreStore';
import { Button } from 'react-native-elements';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conto: ContatoreStore.getConto() // otteniamo lo stato iniziale
    };
    this.updateStatus = this.updateStatus.bind(this);
  }
  componentDidMount() {
    ContatoreStore.addChangeListener(this.updateStatus);
  }
  updateStatus() {
    this.setState({ conto: ContatoreStore.getConto() });
  }
  comonentWillUnmount() {
    ContatoreStore.removeChangeListener(this.updateStatus);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Contatore</Text>
        <Text style={styles.conto}>Conto: {this.state.conto}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={increment}
        >
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={decrement}
        >
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={reset}
        >
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
        <Button
          raised
          icon={{ name: 'cached' }}
          title='INCREMENT'
          onPress={increment}
          style={styles.rne}
        />
        <Button
          raised
          icon={{ name: 'cached' }}
          title='DECREMENT'
          onPress={decrement}
          style={styles.rne}
        />
        <Button
          raised
          icon={{ name: 'cached' }}
          title='RESET'
          onPress={reset}
          style={styles.rne}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightcoral'
  },
  text: {
    fontSize: 20
  },
  conto: {
    margin: 20,
    fontSize: 24
  },
  rne: {
    padding: 5
  }
});

Expo.registerRootComponent(App);
