import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Frases do dia</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: "#48BBEC",
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 3,
    borderRadius: 8
  },
  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default App;