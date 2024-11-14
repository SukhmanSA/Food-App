import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from './screens/CategoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetail from './screens/MealDetail';

  const Stack = createNativeStackNavigator()

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      contentStyle: {backgroundColor:"#312318"},
      headerStyle: {backgroundColor:"#231209"},
      headerTintColor:"#fff",
        headerTitleAlign:"center"
    }}>
      <Stack.Screen
       name='MealsCategory' 
       component={CategoryScreen}
       options={{
        title:"All Categories"
      }}
       />
      <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}/>
      <Stack.Screen name='MealsDetail' component={MealDetail}/>
    </Stack.Navigator>
  </NavigationContainer>)
}

