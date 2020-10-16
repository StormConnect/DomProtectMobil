import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Modal, Alert} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

export default function ScanQr({navigation}){
  
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [valueqr, setValueqr] = useState();
  const [valueqr1, setValueqr1] = useState();
  const [valueqr2, setValueqr2] = useState();


  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({type, data }) => {
    if (data >= 3) {
      setScanned(true);
      setModalVisible(!modalVisible)
      setValueqr(data);
    }
    else if (data >= 2 && data < 3) {
      setScanned(true);
      setModalVisible1(!modalVisible1)
      setValueqr1(data);
    }
    else{
      setScanned(true);
      setModalVisible2(!modalVisible2)
      setValueqr2(data);
      //alert(`Le type  de code :  ${type} Information11:  ${data} vert!`);
    }
    //let data = parseInt(data1) ;

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>Nous ne pouvons pas accéder a la camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor:"black"
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => { navigation.goBack()
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Votre indice de cotation est de:  { valueqr } </Text>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible1}
          onRequestClose={() => { navigation.goBack() }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView1}>
              <Text style={styles.modalText}> Votre indice de cotation est de: { valueqr1 } </Text>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible2}
          onRequestClose={() => { navigation.goBack()
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView2}>
              <Text style={styles.modalText}>Votre indice de cotation est de: { valueqr2 } </Text>
            </View>
          </View>
        </Modal>
      </View>

      {scanned && <Button title={'Lancer le Scan'} onPress={() =>{ setScanned(false)}}/>}
    </View>
    
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor:"red",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalView1: {
    margin: 20,
    borderRadius: 20,
    padding: 35,
    backgroundColor:"#FFA500",
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView2: {
    margin: 20,
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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