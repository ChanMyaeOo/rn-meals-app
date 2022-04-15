import { createContext, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
    const [favouriteMealIds, setFavouriteMealIds] = useState([]);

    const addFavouriteMeal = (id) => {
        setFavouriteMealIds((currentFavMealIds) => [...currentFavMealIds, id]);
    };

    const removeFavouriteMeal = (id) => {
        setFavouriteMealIds((currentFavMealIds) =>
            currentFavMealIds.filter((mealId) => mealId !== id)
        );
    };

    const value = {
        ids: favouriteMealIds,
        addFavouriteMeal: addFavouriteMeal,
        removeFavouriteMeal: removeFavouriteMeal,
    };
    return (
        <FavouritesContext.Provider value={value}>
            {children}
        </FavouritesContext.Provider>
    );
};

export default FavouritesContextProvider;
