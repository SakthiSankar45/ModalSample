import { StyleSheet, View, TextInput, Button, Modal, Image} from "react-native";
import { useState } from 'react';

function GoalInput(items) {

    const [txtFieldText, setTextFieldText] = useState('');

    function txtFieldAction(enteredText){

        setTextFieldText(enteredText);
    }

    function onButtonAction(){

        items.onAddGoal(txtFieldText);
        setTextFieldText('');
    }

    return(
      <Modal visible={items.visible} animationType="slide">
         <View style = {styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/goal.png')}/>
          <TextInput style={styles.textInput} placeholder='Set Your Goal!..' onChangeText={txtFieldAction} value={txtFieldText}></TextInput>
          <View style = {styles.buttonContainer}> 
            <View style = {styles.buttonItem}> 
              <Button title='Add Goal' onPress={onButtonAction}/>
            </View>
            <View style = {styles.buttonItem}> 
              <Button title="Cancel" onPress={items.onCancel}/>
            </View>
          </View>
        </View>
      </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({

    inputContainer:{
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
          padding: 8
      },
      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      },
      buttonItem:{
        width: 100,
        marginHorizontal: 8,
      }
});