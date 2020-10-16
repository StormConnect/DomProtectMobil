import React, { useState } from "react";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";


const ModalLang = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const [lang, setLang] = useState(true);
  var radio_props = [
    {label: 'Français', value: 0 },
    {label: 'Anglais', value: 1 }
  ]

  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}  onRequestClose={() => {  }} >
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Selectionner la Langue</Text>
                <View>
                    <RadioForm
                     radio_props={radio_props}
                     style={{marginTop:0}}
                     initial={0}
                     onPress={(value) => {setLang({value:value})}}
                    />
                </View>
            <TouchableHighlight onPress={() => {setModalVisible(!modalVisible); }} >
              <Text style={styles.textStyle}>Fermer</Text>
            </TouchableHighlight>
          </View>
      </Modal>

      <TouchableHighlight  onPress={() => {setModalVisible(true); }}>
        <Text style={styles.text}>Langue</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
    
  text:{
    margin:10,
    fontSize:15,
    color:"grey",
    fontWeight:"bold"
  },  

  modalView: {
    marginLeft:15,
    marginRight:10,
    backgroundColor: "white",
    borderRadius: 5,
    height:160,
    shadowColor: "#000",
    padding:10,
    marginTop: 250,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  textStyle: {
    color: "#165BC0",
    fontWeight: "bold",
    marginTop:10,
    marginLeft:6,
    marginLeft:250,
  },
  modalText: {
    marginBottom: 15,
    fontWeight:"bold",
    fontSize:16,
  }
});

export default ModalLang;
