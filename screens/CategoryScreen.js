import { FlatList, View, Text, StyleSheet } from "react-native";
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from "../components/CategoryGrid";

export default function CategoryScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function onPressHandler(){
            navigation.navigate("MealsOverview",{
                categoryId:itemData.item.id,
                categoryTitle: itemData.item.title
            })
        }
    
        return( <CategoryGrid
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={onPressHandler}
        />
    )
    
    }


    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
    />
}

const styles = StyleSheet.create({

})