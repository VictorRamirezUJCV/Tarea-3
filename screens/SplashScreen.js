import React from "react";
import { StyleSheet, View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Colors } from "./constants";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
        translucent
      />
      <Image
        source={{ uri: 'https://www.freepnglogos.com/uploads/starbucks-logo-png-picture-8.png' }}
        resizeMode="contain"
        style={styles.image}
      />
      <Text>StarBucks App</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Ir a Inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SplashScreen;

