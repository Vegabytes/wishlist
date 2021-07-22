import React from 'react';


const exclamate = true;
const isFormal = false;

/* const Exclamate = () => (
    <span>
        Cheers{exclamate && <strong>!!</strong>}
    </span>
); */

const Exclamate = () => (
    <div>
        {isFormal ? 'Kind regards' : 'Cheers'}
    </div>
);
export default Exclamate;