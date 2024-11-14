import { Image, Text, View, StyleSheet, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data'
import Details from '../components/meal-detail'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

export default function MealDetail({ route, navigation }) {

    const id = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === id)

    function onPressHandler(){
        navigation.navigate("MealsCategory")
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={onPressHandler}/>
            }
        })
    },[navigation,onPressHandler])

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <Details
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {selectedMeal.ingredients.map((ingredient) => (
                <View key={ingredient} style={styles.listItem}>
                    <Text style={styles.listText}>{ingredient}</Text>
                </View>
            ))}
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Steps</Text>
            </View>
            {selectedMeal.steps.map((step) => (
                <View key={step} style={styles.listItem}>
                    <Text style={styles.listText}>{step}</Text>
                </View>
            ))}
           </View> 
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    image: {
        width: "90%",
        height: 250,
        marginLeft:20,
        marginVertical:15,
        borderWidth:5,
        borderColor:"#351401"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "white"
    },

    detailText: {
        color: "#fff"
    },

    subtitle: {
        color: "#e2b497",
        fontSize: 18,
        margin: 4,
        fontWeight: 'bold',
        textAlign: "center"
    },

    subtitleContainer: {
        padding: 6,
        borderBottomColor: "#e2b497",
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4
    },

    listItem: {
        borderRadius: 6,
        paddingHorizontal: 6,
        paddingVertical: 4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:"#e2b497"
    },

    listText:{
        textAlign:"center",
        color:"#351401"
    },

    listContainer:{
        width:"80%"
    },

    listOuterContainer:{
        alignItems:"center"
    }
})
