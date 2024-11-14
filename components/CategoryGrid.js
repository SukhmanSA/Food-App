import { Pressable, Text, View, StyleSheet} from "react-native";

export default function CategoryGrid({ title, color, onPress }) {
  return <View style={[styles.gridItem,{backgroundColor:color}]}>
    <Pressable onPress={onPress} style={styles.btn} android_ripple={{color:"#ccc"}}>
      <View style={styles.innerContainer}>
        <Text style={styles.btn}>{title}</Text>
      </View>
    </Pressable>
  </View>
}

const styles = StyleSheet.create({
    gridItem:{
      flex:1,
      margin:16,
      height:150,
      borderRadius:8,
      elevation:30,
      overflow:"hidden"
    },

    btn:{ flex:1 },

    innerContainer:{
      flex:1,
      padding:16,
      justifyContent:"center",
      alignItems:"center",
      marginTop:50
    },

    font:{
      fontWeight:"bold",
      fontSize:18,
      marginTop:50
    }
})