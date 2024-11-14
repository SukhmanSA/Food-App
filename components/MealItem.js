import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Details from "./meal-detail";

export default function MealItem({ title,
    imageUrl,
    duration,
    complexity,
    affordability,
    id
}) {

    const navigation = useNavigation()

    function onPressHandler() {
        navigation.navigate("MealsDetail",{
            mealId: id
        })
    }


    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                onPress={onPressHandler}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.titleFont}>{title}</Text>
                </View>
                <Details 
                duration={duration} 
                complexity={complexity}
                affordability={affordability}
                />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({

    image: {
        width: "100%",
        height: 200
    },

    titleFont: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        margin: 8
    },

    mealItem: {
        margin: 6,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "white",
        elevation: 4
    }
})