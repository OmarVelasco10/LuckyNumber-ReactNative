/* eslint-disable prettier/prettier */
import {Alert} from 'react-native';
/* eslint-disable prettier/prettier */
export function luckyNumber(nombre, edad) {
    let suma = 0;
    let numSuerte = 0;
    let resultado = 0;
    let Auxiliar = 0;

    if (nombre === '' && edad === 0 ){
        Alert.alert('Plase fill all fields');
        return;
    }
    if (nombre === '') {
        Alert.alert('Please enter your name ');
        return;
      }
      if (edad === 0 || edad >= 120) {
        Alert.alert('Please enter a number between 1 and 120');
        return;
      }
      if (edad > 0 && edad < 10) {
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
}
