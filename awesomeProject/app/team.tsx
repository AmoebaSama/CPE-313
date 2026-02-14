import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function Team() {
  const teamMembers = [
    "Calabines",
    "Ayden",
    "Jarrick",
    "J."
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Team Members</Text>
      {teamMembers.map((member, index) => (
        <Text key={index} style={styles.name}>{member}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    marginVertical: 5,
  },
});
