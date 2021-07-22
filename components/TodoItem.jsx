import React, { useState } from 'react';

const TodoItem = ({label, defChk}) => {
    const [checked, setChecked] = useState(defChk);

    return (
        <p onClick={() => setChecked(!checked)}>
            {checked ? 'OK' : 'X'} {label}
        </p>   
    )

};




export default TodoItem;