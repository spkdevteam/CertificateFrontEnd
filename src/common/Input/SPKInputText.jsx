import React from 'react';

const SPKInputText = ({ value,name, className, onChange,placeHolder, onErrorExist }) => {
    return (
        
            <input
                type="text"
                value={value}
                onChange={(e)=>onChange(e)}
                name = {name}
                className={`${className} outline-none  focus:outline-0  focus:outline-blue-600 rounded-md uppercase`}
                placeholder={placeHolder}
                // onBlur={() => onErrorExist('Username')}
            />
            
        
    );
};
export default SPKInputText;