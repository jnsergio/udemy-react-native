import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Alert
} from 'react-native';

const App = () => {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#eaeaea"
    }
  });

  const gerarNumeroRandomico = ()=> {
      Alert.alert("Olha ai seu número!", `Seu numero é ${Math.floor(Math.random()*1000)}`)
  };
  
  return (
    <View style={style.container}>
      <Button title="Gerar novo número" onPress={gerarNumeroRandomico} />
    </View>
  );
};

export default App;