import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Chào mừng bạn đến với Trang chủ! 🎉</Text>
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcome: { fontSize: 20, fontWeight: '500', marginBottom: 20 }
});