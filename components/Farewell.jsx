import React from 'react';



const isFormal = false;

const Farewell = () => {
    if(isFormal) {
        return <span>Kind regards!</span>
    } else {
        return <span>Cheers</span>
    }
};


export default Farewell;