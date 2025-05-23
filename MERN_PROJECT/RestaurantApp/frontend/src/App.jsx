import React, { useContext } from 'react';
import RestaurantList from './components/RestaurantList';
import DishesMenu from './components/DishesMenu';
import Cart from './components/Cart';
import { RestaurantContext } from './contexts/RestaurantContext';
import './App.css';

const App = () => {
  const { selectedRestaurant } = useContext(RestaurantContext);

  return (
    <>
      <div className="container1">
        <h1 className="header">Garden The Restaurant</h1>
        <Cart style={{position:"absolute",right:"20px",top:"20px"}} />
        <RestaurantList />
        {selectedRestaurant && <DishesMenu />}
      </div>
    </>
  );
};

export default App;
