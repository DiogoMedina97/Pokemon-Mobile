import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>App desenvolvido por Diogo Medina.</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});
