import {View,Text, Pressable, StyleSheet,Image,Platform} from 'react-native';
import {useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({title,imageUrl,duration,complexity,affordability,id}){

    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate("MealDetail", { mealId:id });
    }

    return(
        <View style = { styles.mealItem}>
            <Pressable 
                android_ripple = {{color:'#ccc'}} 
                style = {( {pressed} ) => [ pressed ? styles.buttonPressed : null]}
                onPress ={selectMealItemHandler}
                >

                <View style = { styles.innerContainer }>

                    <View>
                        <Image source = {{uri:imageUrl }} style = { styles.image} />
                        <Text style = { styles.title }>{title}</Text>
                    </View>

                     <MealDetails duration={duration} affordability={affordability} complexity={complexity} ></MealDetails>
                </View>

            </Pressable>
        </View>
    );
    
}

export default MealItem;

styles = StyleSheet.create({

    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:'hidden',
        //android
        elevation: 4,
        //ios
        shadowColor:'black',
        backgroundColor:'white',
        shadowOpacity:0.25,
        shadowRadius:8,
        shadowOffset:{width:0,height:2},

        overflow: Platform.OS ==="android " ? "hidden" : 'visible',
    },

    innerContainer:{
        borderRadius:8,
        overflow:'hidden',
    },

    buttonPressed:{
        opacity:0.5,
    },

    image:{
        width:'100%',
        height:200,
    },

    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
        margin:8,
    },



})