import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MessageScreen from './messages/messageScreen';

export default function App() {
  return (
    <>
    <MessageScreen/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
