import React, { useState } from 'react';
import InputField from './InputField';

function Spkpass() {
    const [inputValue, setInputValue] = useState("55555");
    const [errorValue, setErrorValue] = useState("");

    return (
        <div>
            <InputField 
                name="password" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onErrorChange={(e) => setErrorValue(e.target.value)}
            />
            <h1>hello</h1>
        </div>
    );
}

export default Spkpass;
