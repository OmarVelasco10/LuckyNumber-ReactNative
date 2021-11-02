import React, {Fragment, useState} from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import duende from './src/img/duende.png';
import {luckyNumber} from './src/helpers';

export const App = () => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  let suma = 0;
  let numSuerte = 0;
  let resultado = 0;
  let Auxiliar = 0;

  const onClick = () => {
    if (nombre === '') {
      Alert.alert('Please enter your name ');
      return;
    }
    if (edad === 0 || edad >= 120) {
      Alert.alert('Please enter a number into 1 and 120');
      return;
    }
    if (edad > 0 && edad < 10) {
      luckyNumber(nombre, edad);
      Auxiliar = edad;

      console.log(Auxiliar);
      numSuerte = edad * 7;
      suma = 0;
      console.log(numSuerte);
      while (numSuerte > 0) {
        suma += Math.trunc(numSuerte % 10);
        numSuerte /= 10;
      }
      console.log(suma);
      resultado = 0;
      while (suma > 0) {
        resultado += Math.trunc(suma % 10);
        suma /= 10;
      }
      Alert.alert('Welcome ' + nombre + ' Your lucky number is: ' + resultado);
    } else {
      numSuerte = edad;
      suma = 0;
      console.log(numSuerte);
      while (numSuerte > 0) {
        suma += Math.trunc(numSuerte % 10);
        numSuerte /= 10;
      }
      console.log(suma);
      resultado = 0;
      while (suma > 0) {
        resultado += Math.trunc(suma % 10);
        suma /= 10;
      }
      Alert.alert('Welcome ' + nombre + ' Your lucky number is: ' + resultado);
    }
  };
  return (
    <Fragment>
      <View style={style.containerMain}>
        <View style={style.containerImg}>
          <Image source={duende} style={style.imgStyle} />
        </View>
        <View style={style.container}>
          <TextInput
            placeholder="Name"
            style={style.Input}
            onChangeText={name => setNombre(name)}
          />
          <TextInput
            keyboardType="numeric"
            placeholder="Age"
            style={style.Input}
            onChangeText={age => setEdad(age)}
          />
          <TouchableOpacity style={style.Button} onPress={onClick}>
            <Text style={style.ButtonText}>Lucky Number </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};
const style = StyleSheet.create({
  containerImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 60,
  },
  containerMain: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imgStyle: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  Input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    borderColor: 'green',
  },
  Button: {
    backgroundColor: 'green',
    padding: 0,
    width: 200,
    height: 30,
    borderRadius: 500,
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
export default App;
