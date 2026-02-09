import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Team Members:</Text>
      <Text style={styles.name}>• Calabines</Text>
      <Text style={styles.name}>• Ayden Jarrick</Text>
      <Text style={styles.name}>• Jantoc</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 26,
    marginVertical: 8,
  },
});
