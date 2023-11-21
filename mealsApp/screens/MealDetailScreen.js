import {Text,View,Image,StyleSheet,ScrollView} from 'react-native';
import {useLayoutEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import IconButton from '../components/IconButton';
import {MEALS} from '../data/dummy-data';
import List from '../components/MealDetail/List';
// import {FavouritesContext} from '../store/context/favourites-context';
import {addFavourite,removeFavourite} from '../store/redux/favourites';

function MealDetailScreen({route,navigation}) {

    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();


    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);  

    const mealIsFavourite = favouriteMealsIds.includes(mealId);

    function changeFavouriteStatusHandler(){
        if(mealIsFavourite){
            // favouriteMealsCtx.removeFavourite(mealId);
            dispatch(removeFavourite({id: mealId}));
            console.log("removed from favourites");
        }else{
            // favouriteMealsCtx.addFavourite(mealId);
            dispatch(addFavourite({id:mealId}));
            console.log("added to favoutites");
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                    icon={mealIsFavourite ? 'star': 'star-outline' } 
                    color="white" 
                    onPress={changeFavouriteStatusHandler} />;
               }
        })
      },[navigation,changeFavouriteStatusHandler]);

    return(
        <ScrollView style={styles.rootContainer}>
            <Image source = {{uri: selectedMeal.imageUrl}} style={styles.image} />
            <Text style = {styles.title}>{selectedMeal.title}</Text>

            <MealDetails 
                duration={selectedMeal.duration} 
                complexity={selectedMeal.complexity} 
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText} >                  
            </MealDetails>

            <View style={styles.listOuterContainer}>
                <View style = {styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data = {selectedMeal.ingredients}></List>

                    <Subtitle>Steps</Subtitle>
                    <List data = { selectedMeal.steps}></List>
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32,
    },

    image:{
        width:"100%", //100% of the available width
        height:350,
    },

    title:{
        fontWeight:'bold',
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:'white',
    },

    detailText:{
        color:'white',
    },

    listOuterContainer:{
        alignItems:'center',
    },

    listContainer:{
        width:'80%',
    }
 


});