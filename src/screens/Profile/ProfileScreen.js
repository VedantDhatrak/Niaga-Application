import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const DEFAULT_AVATAR = 'https://ui-avatars.com/api/?name=User&background=FE320A&color=fff&size=128';

const ProfileScreen = ({ navigation }) => {
    const { userInfo, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigation.navigate('Welcome');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}>
            {/* Profile Image with Edit Icon */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{ uri: DEFAULT_AVATAR }}
                    style={styles.avatar}
                />
                <TouchableOpacity style={styles.editIcon}>
                    <Feather name="edit" size={20} color="#fff" />
                </TouchableOpacity>
            </View>
            {/* Name */}
            <Text style={styles.name}>{userInfo?.name || 'User'}</Text>
            {/* Email */}
            <View style={styles.emailBox}>
                <Text style={styles.emailText}>{userInfo?.email}</Text>
            </View>

            {/* Card with menu options */}
            <View style={styles.card}>
                <MenuItem icon={<Feather name="edit-2" size={20} color="#FE320A" />} label="Edit Profile" onPress={() => {}} />
                <MenuItem icon={<Feather name="lock" size={20} color="#FE320A" />} label="Add Pin" onPress={() => {}} />
                <MenuItem icon={<Feather name="settings" size={20} color="#FE320A" />} label="Settings" onPress={() => {}} />
                <MenuItem icon={<Feather name="user-plus" size={20} color="#FE320A" />} label="Invite a friend" onPress={() => {}} />
                <View style={styles.divider} />
                <MenuItem icon={<MaterialIcons name="logout" size={20} color="#FE320A" />} label="Logout" onPress={handleLogout} isLogout />
            </View>
        </ScrollView>
    );
};

const MenuItem = ({ icon, label, onPress, isLogout }) => (
    <TouchableOpacity style={[styles.menuItem, isLogout && styles.logoutItem]} onPress={onPress}>
        <View style={styles.menuIcon}>{icon}</View>
        <Text style={[styles.menuLabel, isLogout && styles.logoutLabel]}>{label}</Text>
        <Ionicons name="chevron-forward" size={20} color={isLogout ? '#FE320A' : '#B0B0B0'} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFE3C1',
    },
    avatarContainer: {
        marginTop: 40,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#eee',
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 10,
        backgroundColor: '#FE320A',
        borderRadius: 16,
        padding: 6,
        borderWidth: 2,
        borderColor: '#fff',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#222',
        marginTop: 10,
        marginBottom: 4,
        textAlign: 'center',
    },
    emailBox: {
        backgroundColor: '#EAF1FB',
        borderRadius: 10,
        paddingVertical: 6,
        paddingHorizontal: 18,
        alignSelf: 'center',
        marginBottom: 18,
    },
    emailText: {
        color: '#3A3A3A',
        fontSize: 15,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 18,
        width: '90%',
        paddingVertical: 8,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 8,
        elevation: 2,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 18,
    },
    menuIcon: {
        marginRight: 16,
    },
    menuLabel: {
        flex: 1,
        fontSize: 16,
        color: '#222',
    },
    divider: {
        height: 1,
        backgroundColor: '#F0F0F0',
        marginHorizontal: 18,
    },
    logoutItem: {
        marginTop: 2,
    },
    logoutLabel: {
        color: '#FE320A',
        fontWeight: 'bold',
    },
});

export default ProfileScreen;
