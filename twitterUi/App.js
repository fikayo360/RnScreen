import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessageScreen from './messages/messageScreen';
import Home from './home/home';
import Home2 from './home/home2';

export default function App() {
  return (
    <>
    <Home2/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
