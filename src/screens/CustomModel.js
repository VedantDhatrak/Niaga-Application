import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomModelRequestScreen = () => {
  const [modelName, setModelName] = useState('');
  const [description, setDescription] = useState('');
  const [modelType, setModelType] = useState('');
  const [format, setFormat] = useState('');
  const [detailLevel, setDetailLevel] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!modelName || !description || !modelType || !format || !detailLevel) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
        position: 'top',
        visibilityTime: 5000,
      });
      return;
    }

    // Simulate API call or pass to backend
    Toast.show({
      type: 'success',
      text1: 'Request Submitted Successfully!',
      text2: 'Our designers will contact you shortly.',
      position: 'top',
      visibilityTime: 6000,
    });

    // Clear form
    setModelName('');
    setDescription('');
    setModelType('');
    setFormat('');
    setDetailLevel('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Custom 3D Model Request</Text>

      <Text style={styles.label}>Model Name</Text>
      <TextInput
        style={styles.input}
        value={modelName}
        onChangeText={setModelName}
        placeholder="e.g., Futuristic Car"
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, { height: 120 }]}
        value={description}
        onChangeText={setDescription}
        placeholder="Describe your custom model in detail..."
        multiline
      />

      <Text style={styles.label}>Model Type</Text>
      <TextInput
        style={styles.input}
        value={modelType}
        onChangeText={setModelType}
        placeholder="e.g., Character, Architecture, Vehicle"
      />

      <Text style={styles.label}>Preferred Format</Text>
      <TextInput
        style={styles.input}
        value={format}
        onChangeText={setFormat}
        placeholder="e.g., .obj, .fbx, .stl"
      />

      <Text style={styles.label}>Level of Detail</Text>
      <TextInput
        style={styles.input}
        value={detailLevel}
        onChangeText={setDetailLevel}
        placeholder="Low / Medium / High Poly"
      />

      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Main')} >
        <Ionicons name="send" size={20} color="#fff" />
        <Text style={styles.submitText}>Submit Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CustomModelRequestScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    marginTop: 10,
    fontWeight: '600',
    color: '#444',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 16,
  },
});
