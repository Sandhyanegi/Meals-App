import {View,StyleSheet, FlatList} from 'react-native';
import MealItem from './MealItem';

function MealsList({items}){


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

    return(
        <View style = {styles.conatiner}>
        <FlatList
            data = {items}
            keyExtractor = {(item) => item.id }
            renderItem = {renderMealItem}
        />
        </View>
    );
}

export default MealsList;

const styles = StyleSheet.create({

    conatiner:{
        flex:1,
        padding:10,
    }

})