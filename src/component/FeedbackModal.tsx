import React, {useState, useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
function FeedbackModal({show = false, setShow}) {
  // const [modalVisible, setModalVisible] = useState(show);

  // useEffect(() => {
  //   setModalVisible(show);
  // }, [show]);
  // console.log('show', show);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert('Modal has been close');
          setShow(!show);
        }}>
        {/* <Text style={styles.closeModal} onPress={() => setShow(!show)}>
          Close
        </Text> */}
        <View style={styles.closeModal}>
          <Ionicons
            name="close-outline"
            size={30}
            onPress={() => setShow(!show)}
          />
        </View>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Give your feedback</Text>
          <View style={{width: '100%'}}>
            <TextInput editable maxLength={40} style={styles.input} />
          </View>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setShow(!show)}>
            <Text style={styles.textStyle}>Submit</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

export default FeedbackModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  closeModal: {
    marginTop: '40%',
    paddingHorizontal: 20,
    textAlign: 'right',
    alignItems: 'flex-end',
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    width: '100%',
    height: 40,
    margin: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
