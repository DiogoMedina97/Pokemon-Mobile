import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

type DetailScreenRouteParams = {
  route: {
    params: { name: string, abilities: string[] },
  },
}

export default function DetailsScreen({ route }: DetailScreenRouteParams) {
  const { name, abilities } = route.params;

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Abilities - {name}</Text>

      {abilities.map((ability, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Text>{ability}</Text>
          </Card.Content>
        </Card>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
});
