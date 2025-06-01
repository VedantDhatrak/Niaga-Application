import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Switch,
    Alert,
} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [locationServices, setLocationServices] = useState(true);
    const [biometricAuth, setBiometricAuth] = useState(false);

    const handleClearCache = () => {
        Alert.alert(
            'Clear Cache',
            'Are you sure you want to clear the app cache?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Clear',
                    onPress: () => {
                        // TODO: Implement cache clearing
                        Alert.alert('Success', 'Cache cleared successfully');
                    },
                },
            ]
        );
    };

    const handleLogout = () => {
        Alert.alert(
            'Logout',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: () => {
                        // TODO: Implement logout
                        navigation.navigate('Welcome');
                    },
                },
            ]
        );
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Feather name="arrow-left" size={24} color="#222" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Settings</Text>
                <View style={styles.backButton} />
            </View>

            {/* Account Settings */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Account Settings</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="language" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Language</Text>
                        </View>
                        <View style={styles.settingRight}>
                            <Text style={styles.settingValue}>English</Text>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="currency-exchange" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Currency</Text>
                        </View>
                        <View style={styles.settingRight}>
                            <Text style={styles.settingValue}>USD</Text>
                            <Feather name="chevron-right" size={20} color="#666" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Preferences */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Preferences</Text>
                <View style={styles.card}>
                    <View style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="notifications" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Push Notifications</Text>
                        </View>
                        <Switch
                            value={notifications}
                            onValueChange={setNotifications}
                            trackColor={{ false: '#E0E0E0', true: '#FFB4A4' }}
                            thumbColor={notifications ? '#FE320A' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="dark-mode" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Dark Mode</Text>
                        </View>
                        <Switch
                            value={darkMode}
                            onValueChange={setDarkMode}
                            trackColor={{ false: '#E0E0E0', true: '#FFB4A4' }}
                            thumbColor={darkMode ? '#FE320A' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="location-on" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Location Services</Text>
                        </View>
                        <Switch
                            value={locationServices}
                            onValueChange={setLocationServices}
                            trackColor={{ false: '#E0E0E0', true: '#FFB4A4' }}
                            thumbColor={locationServices ? '#FE320A' : '#f4f3f4'}
                        />
                    </View>

                    <View style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="fingerprint" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Biometric Authentication</Text>
                        </View>
                        <Switch
                            value={biometricAuth}
                            onValueChange={setBiometricAuth}
                            trackColor={{ false: '#E0E0E0', true: '#FFB4A4' }}
                            thumbColor={biometricAuth ? '#FE320A' : '#f4f3f4'}
                        />
                    </View>
                </View>
            </View>

            {/* Other Settings */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Other</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.settingItem} onPress={handleClearCache}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="cleaning-services" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>Clear Cache</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.settingItem}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="info" size={24} color="#FE320A" />
                            <Text style={styles.settingText}>About</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
                        <View style={styles.settingLeft}>
                            <MaterialIcons name="logout" size={24} color="#FE320A" />
                            <Text style={[styles.settingText, styles.logoutText]}>Logout</Text>
                        </View>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE3C1',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 20,
    },
    backButton: {
        padding: 8,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
    section: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingText: {
        fontSize: 16,
        color: '#222',
        marginLeft: 15,
    },
    settingValue: {
        fontSize: 16,
        color: '#666',
        marginRight: 10,
    },
    logoutText: {
        color: '#FE320A',
        fontWeight: 'bold',
    },
});

export default SettingsScreen; 