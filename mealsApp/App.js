import {createDrawerNavigator} from '@react-navigation/drawer';
import { StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {Ionicons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';

import MealsOverviewScreen from './screens/MealsOverviewScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
// import FavouritesContextProvider from './store/context/favourites-context';
import {store} from './store/redux/store'; 

const Stack = createNativeStackNavigator();
const Drawer =createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator 
                screenOptions = {{
                  headerStyle: {backgroundColor:'#351401'},
                  headerTintColor:'white',
                  sceneContainerStyle: {backgroundColor: '#3f2f25'},

                  drawerContentStyle:{backgroundColor:'#351401'} ,
                  drawerInactiveTintColor:'white',
                  drawerActiveTintColor: '#351401',
                  drawerActiveBackgroundColor: '#e4baa1'
              
              }}
          >

            <Drawer.Screen 
              name="Categories" 
              component={CategoriesScreen} 
              options={{
                title:'All Categories',
                drawerIcon: ({color,size}) => ( <Ionicons name="list"  color={color} size={size} /> ),
                }} 
            />

            <Drawer.Screen 
              name="Favourites" 
              component={FavouriteScreen} 
              options={{
                drawerIcon: ({color,size}) => ( <Ionicons name="star"  color={color} size={size} /> ),
                }} 
            />
         </Drawer.Navigator>;

}

export default function App() {
  return (
    <>
      <StatusBar style = 'light'/>
      {/* <FavouritesContextProvider> */}
      <Provider store = {store}>
        <NavigationContainer>
          <Stack.Navigator 
              screenOptions = {{
                headerStyle: {backgroundColor:'#351401'},
                headerTintColor:'white',
                contentStyle: {backgroundColor: '#3f2f25'}
              }}>

            <Stack.Screen                           //1
              name="Drawer" 
              component={DrawerNavigator} 
              options = {{
                headerShown:false,            
              }} 
            />

            <Stack.Screen                           //2
              name="Meals Overview" 
              component={MealsOverviewScreen} 
            />

            <Stack.Screen                             //3
              name="MealDetail" 
              component={MealDetailScreen}
              options={{title:'About the Meal'}}
            />

          </Stack.Navigator>
          
        </NavigationContainer>
        </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
 
});
