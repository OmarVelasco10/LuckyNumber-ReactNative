import React, {Fragment, useState} from 'react';
import {
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

  const onClick = () => {
    luckyNumber(nombre, edad);
  };
  return (
    <Fragment>
      <View style={style.containerMain}>
        <Text style={style.title}>Lucky Number</Text>
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
            onChangeText={age => setEdad(parseInt(age, 10))}
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
    borderRadius: 10,
  },
  Button: {
    backgroundColor: 'green',
    padding: 2.5,
    width: 200,
    height: 30,
    borderRadius: 500,
    marginTop: 15,
  },
  ButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    color: 'green',
  },
});
export default App;
