import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('');

  const validatePhoneNumber = (number) => {
    // Regex đơn giản: Bắt đầu bằng 0, tiếp theo là 9 chữ số
    const regex = /^(0)[0-9]{9}$/;
    return regex.test(number);
  };

  const handleContinue = () => {
    if (validatePhoneNumber(phone)) {
      // 🟢 CHUYỂN MÀN HÌNH: Nếu hợp lệ thì dùng navigation.navigate
      navigation.navigate('Home');
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ (Phải có 10 số và bắt đầu bằng số 0)');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderBottomWidth: 1, borderColor: '#ccc', padding: 10, fontSize: 18, marginBottom: 30 },
  button: { backgroundColor: '#10b981', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});