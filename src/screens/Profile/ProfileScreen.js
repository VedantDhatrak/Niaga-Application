import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const MenuItem = ({ icon, title, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={24} color="#333" />
      <Text style={styles.menuText}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color="#333" />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../../assets/background.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Profile Circle */}
      <View style={styles.profileCircle}>
        <Ionicons name="person" size={80} color="#fff" />
      </View>

      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.menuSection}>
            <MenuItem 
              icon="person-outline" 
              title="Profile" 
              onPress={() => {}} 
            />
            <MenuItem 
              icon="cart-outline" 
              title="Orders" 
              onPress={() => {}} 
            />
            <MenuItem 
              icon="card-outline" 
              title="Transactions" 
              onPress={() => {}} 
            />
            <MenuItem 
              icon="help-circle-outline" 
              title="Help" 
              onPress={() => {}} 
            />
          </View>

          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={() => navigation.navigate('Welcome')}
          >
            <Text style={styles.logoutText}>LOG OUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  profileCircle: {
    width: 150,
    height: 150,
    backgroundColor: '#000',
    borderRadius: 75,
    position: 'absolute',
    top: 10,
    alignSelf: 'center',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFE3C1',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 80,
    paddingTop: 100,
  },
  menuSection: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#FF3C00',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProfileScreen;
