import {useLayoutEffect} from 'react';

import { MEALS, CATEGORIES} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen({route, navigation}){

    // const catId = useRoute().params.categoryId;
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;  //if catId is not present then indexOf() will return -1
                                                        //checking indexOf(catId) in CategoryIds
    });    

    useLayoutEffect(() => {
      const categoryTitle = CATEGORIES.find((Category) => Category.id === catId).title;

      navigation.setOptions({title:categoryTitle})

    }, [catId, navigation]);

    return <MealsList items = {displayedMeals} />
}

export default MealsOverviewScreen;

