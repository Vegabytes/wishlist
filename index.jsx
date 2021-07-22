import React from 'react';
import ReactDOM  from 'react-dom';
import Prueba from './components/prueba';
import Farewell from './components/Farewell';
import Exclamate from './components/Exclamate';
import HelloPlanet from './components/HelloPlanet';
import MealsList from './components/MealsList';
import Header from './components/Header';
import App from './src/App';
const string = "Curso React Principiantes";
import TodoItem from './components/TodoItem';
import TodoItemClass from './components/TodoItemClass';
import Search from './components/Search';
ReactDOM.render(
    //<h1>My wishlist</h1>,
    // <Prueba/>,
    //<Farewell/>,
    //<Exclamate/>,
    //<HelloPlanet/>,
    //<Header/>,
    <App/>,
    //<TodoItem label="Learn React" defChk={true}/>,
    //<Search/>,
    document.getElementById('root')  
);