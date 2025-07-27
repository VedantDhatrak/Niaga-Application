import Toast from 'react-native-toast-message';

export const showToast = (type, title, message) => {
  Toast.show({
    type: type, // 'success' | 'error' | 'info'
    text1: title,
    text2: message,
    position: 'top',
    visibilityTime: 5000,
    autoHide: true,
    topOffset: 50,
    bottomOffset: 40,
    onShow: () => {},
    onHide: () => {},
    onPress: () => {},
    props: {
      style: {
        backgroundColor: type === 'success' ? '#4CAF50' : type === 'error' ? '#FF3C00' : '#2196F3',
      },
    },
  });
};

export const showSuccessToast = (message) => {
  showToast('success', 'Success', message);
};

export const showErrorToast = (message) => {
  showToast('error', 'Error', message);
};

export const showInfoToast = (message) => {
  showToast('info', 'Info', message);
}; 