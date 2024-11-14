import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect } from "react";


export default function MealsOverviewScreen({ route, navigation }) {

    const catId = route.params.categoryId

    const displayedItems = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    const catTitle = route.params.categoryTitle

    useEffect(()=>{
        navigation.setOptions({
            title:catTitle
        })
    },[catTitle])

    
    function renderMealItem(itemData){
        return(
        <MealItem 
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        id={itemData.item.id}
        />
    )
    }

  return (
    <View style={styles.container}>
        <FlatList 
        data={displayedItems}
        keyExtractor={(item)=> item.id}
        renderItem={renderMealItem}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:16
    }

})