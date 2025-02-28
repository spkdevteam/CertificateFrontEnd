import React from 'react';

const SPKNumberInput = ({ value,name, className, onChange, onErrorExist }) => {
    return (

        
            <input
                type="number"
                value={value}
                onChange={(e)=>onChange(e)}
                name = {name}
                className={`${className} outline-none w-full focus:outline-0 focus:outline-blue-600 rounded-md`}
                placeholder="Enter your username"
                // onBlur={() => onErrorExist('Username')}
            />
            
        
    );
};
export default SPKNumberInput;