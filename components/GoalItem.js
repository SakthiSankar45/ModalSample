import { StyleSheet, View, Text, Pressable} from "react-native";

function GoalItem(itemList) {

    return(
        <Pressable android_ripple={{color: 'red'}} onPress={itemList.onDeleteItem.bind(this, itemList.id)} style = {({pressed}) => 
            pressed && styles.pressedItem }>

            <View style = {styles.goalItems}>
                <Text style={StyleSheet.create({color: 'black'})}>{itemList.text} </Text>
             </View>
        </Pressable>
    )
}

export default GoalItem;

const styles = StyleSheet.create({

    goalItems:{
        margin: 10,
        borderRadius: 6,
        padding: 30,
        backgroundColor: 'lightgrey'
      },
      pressedItem:{
        opacity: 0.5
      }
});