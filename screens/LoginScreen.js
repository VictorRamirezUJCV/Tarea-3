import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Correo electrónico" />
      <TextInput placeholder="Teléfono" />
      <Button title="Continuar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
