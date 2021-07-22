import React from 'react';

const partOfTheDay = 'morning';
/* const HelloPlanet = () => {
    switch(partOfTheDay) {
        case 'morning':
            return <span>Good morning</span>
        case 'afternoon':
            return <span>Good afternoon</span>
        case 'night':
            return <span>Good night</span>
        default: return 'Cheers!';        
    }
}; */

const HelloPlanet = () => 
    (partOfTheDay === 'morning' && <span>Good morning</span>)||
    (partOfTheDay === 'evening' && <span>Good evening</span>)||
    (partOfTheDay === 'night' && <span>Good night</span>)||
    'Cheers!';

export default HelloPlanet;