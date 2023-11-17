import {Text,View,Image,StyleSheet,ScrollView} from 'react-native';
import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

function MealDetailScreen({route}) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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