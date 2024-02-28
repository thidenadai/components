import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import { styles } from './src/styles/stylesheets';
import Corpo from './src/components/corpo';
import Rodape from './src/components/rodape';

export default function App() {
  return (
    <View style={styles.container}>
     
      <StatusBar style="auto" />
      <Header />
      <Corpo />
      <Rodape />
      <StyleSheet></StyleSheet>
    </View>
  );
}
