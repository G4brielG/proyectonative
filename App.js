import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './src/assets/styles/style';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}


