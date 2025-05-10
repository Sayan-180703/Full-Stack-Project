//components/DishesMenu.js

import React, { useContext } from 'react';
import DishCard from './DishCard';
import { RestaurantContext } from '../contexts/RestaurantContext';

const DishesMenu = () => {
    const { selectedRestaurant } = useContext(RestaurantContext);

    return (
        <div>
            <h1>Menu</h1>
            {selectedRestaurant && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {selectedRestaurant.menu.map((dish) => (
                        <DishCard key={dish.name} dish={dish} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default DishesMenu;

