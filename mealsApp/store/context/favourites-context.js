import {createContext, useState} from 'react';

export const FavouritesContext = createContext({

    ids: [],    
    addFavourite:(id) => {},
    removeFavourite:(id)=> {}

}); 

function FavouritesContextProvider({children}){

    const [favouriteMealsIds, setFavouriteMealsIds] = useState([]);

    function addFavourite(id){
        setFavouriteMealsIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavourite(id){
        setFavouriteMealsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId != id));
    }

    const value = {
        ids : favouriteMealsIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return <FavouritesContext.Provider value = {value} >{children}</FavouritesContext.Provider>

}

export default FavouritesContextProvider;
