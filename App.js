import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } 
from 'react-native';


export default function App() {
  const [ModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text>Show Modal</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={ModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is Modal...</Text>
            <TouchableOpacity onPress={closeModal}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>

      
      

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 40,
    borderRadius: 10,
  },
});