import React, { useState } from 'react';
import './food.css';

const foods = [
  {
    foodimg: 'src/assets/img/ramen.png', 
    foodtitle: 'Ramen',
    info: 'Ramen is a Japanese noodle soup dish featuring wheat noodles in a flavorful broth, often with toppings like sliced pork, seaweed, green onions, and boiled eggs, providing a savory, comforting meal.',
    country: 'Japanese',
  },
  {
    foodimg: 'src/assets/img/Pizza.jpg', 
    foodtitle: 'Pizza',
    info: 'Pizza is a popular Italian dish consisting of a round, flat dough base topped with tomato sauce, cheese, and various ingredients, baked until crispy and melty.',
    country: 'Italian',
  },
  {
    foodimg: 'src/assets/img/sushi.png', 
    foodtitle: 'Sushi',
    info: 'Sushi is a Japanese dish of vinegared rice topped with various savory ingredients, traditionally seafood such as fish, shellfish, and vegetables.',
    country: 'Japanese',
  },
  {
    foodimg: 'src/assets/img/tomyumkung.jpg', 
    foodtitle: 'Tom Yum Kung',
    info: 'Tomyumkung is a hot and sour Thai soup traditionally prepared with shrimp, lemongrass, kaffir lime leaves, galangal, chilies, fish sauce, lime juice, and mushrooms. It is known for its vibrant flavors and aromatic broth.',
    country: 'Thai',
  },
  {
    foodimg: 'src/assets/img/spaghetti.png', 
    foodtitle: 'Spaghetti',
    info: 'Spaghetti is a long, thin type of pasta made from durum wheat flour. It is a versatile ingredient commonly served with tomato-based sauces, meatballs, vegetables, or seafood.',
    country: 'Italian',
  },
];

const Food = () => {
  const [filteredFoods, setFilteredFoods] = useState(foods);

  const filterFoodsByCountry = (country) => {
    if (country === 'All') {
      setFilteredFoods(foods);
    } else {
      const filtered = foods.filter(food => food.country === country);
      setFilteredFoods(filtered);
    }
  };

  return (
    <div className="content">
      <div className="filter">
        <p onClick={() => filterFoodsByCountry('Thai')}>Thai</p>
        <p onClick={() => filterFoodsByCountry('Italian')}>Italy</p>
        <p onClick={() => filterFoodsByCountry('Japanese')}>Japan</p>
        <p onClick={() => filterFoodsByCountry('All')}>All</p>
      </div>
      <div className="app-grid">
        {filteredFoods.map((food) => (
          <div className="container" key={food.foodtitle}>
            <div className="foodimg">
              <img src={food.foodimg} alt={food.foodtitle} />
            </div>
            <div className="foodtitle">
              <p>{food.foodtitle}</p>
            </div>
            <div className="info">
              <p>{food.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
