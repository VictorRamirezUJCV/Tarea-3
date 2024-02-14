import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const OTPScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Código OTP" />
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

export default OTPScreen;

