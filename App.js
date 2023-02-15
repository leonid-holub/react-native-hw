import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LoginScreen } from './Screens/LoginScreen';
import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen />
      {/* <RegistrationScreen /> */}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(52, 52, 52, 0.8)",
  },
});