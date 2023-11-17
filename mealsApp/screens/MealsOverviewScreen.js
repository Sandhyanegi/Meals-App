import {View,StyleSheet, FlatList} from 'react-native';
import {useLayoutEffect} from 'react';
// import {useRoute} from '@react-navigation/native'
import { MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useRoute } from '@react-navigation/native';
import Category from '../models/category';

function MealsOverviewScreen({route, navigation}){

    // const catId = useRoute().params.categoryId;
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;  //if catId is not present then indexOf() will return -1
                                                        //checking indexOf(catId) in CategoryIds
    });

    function renderMealItem(itemData){
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title : item.title,
            imageUrl:item.imageUrl,
            affordability:item.affordability,
            complexity:item.complexity,
            duration:item.duration,
        }
        return <MealItem {...mealItemProps} />
    }

    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((Category) => Category.id === catId).title;

      navigation.setOptions({title:categoryTitle})

    }, [catId, navigation]);

    return (
        <View style = {styles.conatiner}>
            <FlatList
                data = { displayedMeals }
                keyExtractor = {(item) => item.id }
                renderItem = {renderMealItem}
            />
        </View>

    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({

    conatiner:{
        flex:1,
        padding:10,
    }

})