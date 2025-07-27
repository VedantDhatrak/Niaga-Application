import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { useNavigation } from '@react-navigation/native';
import { formatCurrency } from '../utils/currency';
import { formatDate } from '../utils/date';
import { getOrders } from '../services/orderService';

const OrdersScreen = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const data = await getOrders();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderSkeletonItem = () => (
    <SkeletonPlaceholder>
      <View style={styles.skeletonContainer}>
        <View style={styles.skeletonHeader}>
          <View style={styles.skeletonOrderNumber} />
          <View style={styles.skeletonDate} />
        </View>
        <View style={styles.skeletonContent}>
          <View style={styles.skeletonImage} />
          <View style={styles.skeletonDetails}>
            <View style={styles.skeletonTitle} />
            <View style={styles.skeletonPrice} />
          </View>
        </View>
        <View style={styles.skeletonFooter}>
          <View style={styles.skeletonStatus} />
          <View style={styles.skeletonTotal} />
        </View>
      </View>
    </SkeletonPlaceholder>
  );

  const renderOrderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.orderContainer}
      onPress={() => navigation.navigate('OrderDetail', { orderId: item.id })}
    >
      <View style={styles.orderHeader}>
        <Text style={styles.orderNumber}>Order #{item.id}</Text>
        <Text style={styles.orderDate}>{formatDate(item.createdAt)}</Text>
      </View>
      <View style={styles.orderContent}>
        <View style={styles.productImage}>
          <LinearGradient
            colors={['#f0f0f0', '#e0e0e0']}
            style={styles.imageGradient}
          >
            <Ionicons name="image-outline" size={24} color="#999" />
          </LinearGradient>
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.productName} numberOfLines={2}>
            {item.productName}
          </Text>
          <Text style={styles.productPrice}>
            {formatCurrency(item.totalAmount)}
          </Text>
        </View>
      </View>
      <View style={styles.orderFooter}>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <Text style={styles.totalAmount}>
          Total: {formatCurrency(item.totalAmount)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return '#FFA500';
      case 'processing':
        return '#1E90FF';
      case 'completed':
        return '#32CD32';
      case 'cancelled':
        return '#FF0000';
      default:
        return '#808080';
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3]}
          renderItem={renderSkeletonItem}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="receipt-outline" size={48} color="#999" />
            <Text style={styles.emptyText}>No orders found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContainer: {
    padding: 16,
  },
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
  },
  orderContent: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
    overflow: 'hidden',
  },
  imageGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  // Skeleton styles
  skeletonContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  skeletonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  skeletonOrderNumber: {
    width: 120,
    height: 16,
    borderRadius: 4,
  },
  skeletonDate: {
    width: 80,
    height: 16,
    borderRadius: 4,
  },
  skeletonContent: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  skeletonImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  skeletonDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  skeletonTitle: {
    width: '80%',
    height: 16,
    borderRadius: 4,
    marginBottom: 8,
  },
  skeletonPrice: {
    width: '40%',
    height: 16,
    borderRadius: 4,
  },
  skeletonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  skeletonStatus: {
    width: 80,
    height: 24,
    borderRadius: 12,
  },
  skeletonTotal: {
    width: 100,
    height: 20,
    borderRadius: 4,
  },
});

export default OrdersScreen; 