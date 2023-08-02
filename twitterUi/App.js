import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessageScreen from './messages/messageScreen';
import Home from './home/home';

export default function App() {
  return (
    <>
    <Home/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
