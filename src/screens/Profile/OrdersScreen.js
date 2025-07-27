import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,
    Alert,
    Animated
} from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { ordersApi } from '../../services/api';

const SkeletonLoader = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animation = Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        animation.start();
        return () => animation.stop();
    }, []);

    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 0.7],
    });

    return (
        <Animated.View style={[styles.skeletonCard, { opacity }]}>
            <View style={styles.skeletonHeader}>
                <View>
                    <View style={styles.skeletonText} />
                    <View style={[styles.skeletonText, { width: 100, marginTop: 8 }]} />
                </View>
                <View style={styles.skeletonBadge} />
            </View>
            <View style={styles.skeletonItems}>
                {[1, 2].map((_, index) => (
                    <View key={index} style={styles.skeletonProductItem}>
                        <View style={styles.skeletonImage} />
                        <View style={styles.skeletonProductInfo}>
                            <View style={styles.skeletonText} />
                            <View style={[styles.skeletonText, { width: '60%', marginTop: 8 }]} />
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.skeletonFooter}>
                <View style={styles.skeletonText} />
                <View style={styles.skeletonButton} />
            </View>
        </Animated.View>
    );
};

const OrdersScreen = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('all');
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {
        try {
            setLoading(true);
            const response = await ordersApi.getAll();
            setOrders(response.data);
        } catch (error) {
            console.error('Load orders error:', error.response?.data || error.message);
            Alert.alert('Error', 'Failed to load orders');
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'delivered':
                return '#4CAF50';
            case 'processing':
                return '#2196F3';
            case 'cancelled':
                return '#F44336';
            default:
                return '#666';
        }
    };

    const getStatusText = (status) => {
        return status.charAt(0).toUpperCase() + status.slice(1);
    };

    const filteredOrders = orders.filter(order => {
        if (activeTab === 'all') return true;
        return order.status === activeTab;
    });

    const renderOrderItem = ({ item }) => (
        <TouchableOpacity 
            style={styles.orderCard}
            onPress={() => navigation.navigate('OrderDetail', { order: item })}
        >
            <View style={styles.orderHeader}>
                <View>
                    <Text style={styles.orderNumber}>Order #{item._id.slice(-6)}</Text>
                    <Text style={styles.orderDate}>
                        {new Date(item.createdAt).toLocaleDateString()}
                    </Text>
                </View>
                <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(item.status)}20` }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                        {getStatusText(item.status)}
                    </Text>
                </View>
            </View>

            <View style={styles.itemsContainer}>
                {item.items.map((orderItem) => (
                    <View key={orderItem._id} style={styles.productItem}>
                        <Image 
                            source={{ uri: orderItem.product.image }} 
                            style={styles.productImage} 
                        />
                        <Text style={styles.productName}>{orderItem.product.name}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.orderFooter}>
                <Text style={styles.totalText}>Total: ${item.totalAmount.toFixed(2)}</Text>
                <TouchableOpacity style={styles.detailsButton}>
                    <Text style={styles.detailsButtonText}>View Details</Text>
                    <Feather name="chevron-right" size={16} color="#FE320A" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Feather name="arrow-left" size={24} color="#222" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Your Orders</Text>
                <View style={styles.backButton} />
            </View>

            {/* Tabs */}
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'all' && styles.activeTab]}
                    onPress={() => setActiveTab('all')}
                >
                    <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'processing' && styles.activeTab]}
                    onPress={() => setActiveTab('processing')}
                >
                    <Text style={[styles.tabText, activeTab === 'processing' && styles.activeTabText]}>Processing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'delivered' && styles.activeTab]}
                    onPress={() => setActiveTab('delivered')}
                >
                    <Text style={[styles.tabText, activeTab === 'delivered' && styles.activeTabText]}>Delivered</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'cancelled' && styles.activeTab]}
                    onPress={() => setActiveTab('cancelled')}
                >
                    <Text style={[styles.tabText, activeTab === 'cancelled' && styles.activeTabText]}>Cancelled</Text>
                </TouchableOpacity>
            </View>

            {/* Orders List */}
            {loading ? (
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={() => <SkeletonLoader />}
                    keyExtractor={(_, index) => index.toString()}
                    contentContainerStyle={styles.ordersList}
                />
            ) : filteredOrders.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No orders found</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredOrders}
                    renderItem={renderOrderItem}
                    keyExtractor={item => item._id}
                    contentContainerStyle={styles.ordersList}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#222',
    },
    backButton: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    tab: {
        flex: 1,
        paddingVertical: 8,
        alignItems: 'center',
        borderRadius: 20,
    },
    activeTab: {
        backgroundColor: '#FE320A',
    },
    tabText: {
        fontSize: 14,
        color: '#666',
    },
    activeTabText: {
        color: '#fff',
        fontWeight: '500',
    },
    ordersList: {
        padding: 20,
    },
    orderCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    skeletonCard: {
        backgroundColor: '#f0f0f0',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
    },
    skeletonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    skeletonText: {
        height: 16,
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        width: 120,
    },
    skeletonBadge: {
        width: 80,
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
    },
    skeletonItems: {
        marginBottom: 15,
    },
    skeletonProductItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    skeletonImage: {
        width: 50,
        height: 50,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginRight: 10,
    },
    skeletonProductInfo: {
        flex: 1,
    },
    skeletonFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 15,
    },
    skeletonButton: {
        width: 100,
        height: 30,
        backgroundColor: '#e0e0e0',
        borderRadius: 15,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    orderNumber: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    orderDate: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '500',
    },
    itemsContainer: {
        marginBottom: 15,
    },
    productItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    productImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    productName: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    orderFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 15,
    },
    totalText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsButtonText: {
        fontSize: 14,
        color: '#FE320A',
        marginRight: 4,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#666',
    },
});

export default OrdersScreen; 