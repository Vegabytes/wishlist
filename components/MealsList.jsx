import React from 'react';



const meals = [
    {name: 'Salad', veggie: true},
    {name: 'Hamburger', veggie: false}
];
/* const MealsList = () => 
(
    <ul>
        {meals.map(({name})=><li key={name}>{name}</li>)}
    </ul>
); */

/* const MealsList = () => 
(
    <ul>
        {meals.map(({name, veggie})=>
            veggie ? <li key={name}>{name}</li>
            : null)}
    </ul>
); */
const MealsList = () => 
(
    <ul>
        {meals.filter(({veggie})=>veggie)
               .map(({name})=><li key={name}>{name}</li>)}
    </ul>
);


export default MealsList;