import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Linking,
} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';

const HelpSupportScreen = ({ navigation }) => {
    const handleContactSupport = () => {
        Linking.openURL('mailto:support@niaga.com');
    };

    const handleCallSupport = () => {
        Linking.openURL('tel:+1234567890');
    };

    const handleWhatsApp = () => {
        Linking.openURL('https://wa.me/1234567890');
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Feather name="arrow-left" size={24} color="#222" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Help & Support</Text>
                <View style={styles.backButton} />
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Feather name="search" size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search for help"
                    placeholderTextColor="#666"
                />
            </View>

            {/* Quick Actions */}
            <View style={styles.quickActionsContainer}>
                <Text style={styles.sectionTitle}>Quick Actions</Text>
                <View style={styles.quickActionsGrid}>
                    <TouchableOpacity style={styles.quickActionItem} onPress={handleContactSupport}>
                        <View style={styles.quickActionIcon}>
                            <MaterialIcons name="email" size={24} color="#FE320A" />
                        </View>
                        <Text style={styles.quickActionText}>Email Support</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quickActionItem} onPress={handleCallSupport}>
                        <View style={styles.quickActionIcon}>
                            <MaterialIcons name="phone" size={24} color="#FE320A" />
                        </View>
                        <Text style={styles.quickActionText}>Call Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quickActionItem} onPress={handleWhatsApp}>
                        <View style={styles.quickActionIcon}>
                            <MaterialIcons name="chat" size={24} color="#FE320A" />
                        </View>
                        <Text style={styles.quickActionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.quickActionItem}>
                        <View style={styles.quickActionIcon}>
                            <MaterialIcons name="help-outline" size={24} color="#FE320A" />
                        </View>
                        <Text style={styles.quickActionText}>FAQs</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Common Issues */}
            <View style={styles.commonIssuesContainer}>
                <Text style={styles.sectionTitle}>Common Issues</Text>
                <View style={styles.issuesList}>
                    <TouchableOpacity style={styles.issueItem}>
                        <Text style={styles.issueText}>How to track my order?</Text>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.issueItem}>
                        <Text style={styles.issueText}>Return & Refund Policy</Text>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.issueItem}>
                        <Text style={styles.issueText}>Payment Methods</Text>
                        <Feather name="chevron-right" size={20} color="#666" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.issueItem}>
                        <Text style={styles.issueText}>Shipping Information</Text>
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
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        marginBottom: 20,
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 50,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#222',
    },
    quickActionsContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 15,
    },
    quickActionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    quickActionItem: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    quickActionIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF0F0',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    quickActionText: {
        fontSize: 14,
        color: '#222',
        fontWeight: '500',
    },
    commonIssuesContainer: {
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    issuesList: {
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
    },
    issueItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    issueText: {
        fontSize: 16,
        color: '#222',
    },
});

export default HelpSupportScreen; 