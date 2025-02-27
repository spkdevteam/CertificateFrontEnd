import React, { useEffect, useState } from 'react';

function InputField({ name, value = "", onChange = () => {}, onErrorChange = () => {}, className }) {
    const [password, setPassword] = useState(value);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { value } = e.target;
        
        if (name === "password") {
            if (value.length === 0) {
                setError("Password is required");
            } else {
                setError("");
            }
        }

        setPassword(value);
        onChange({ target: { name, value } });
    };

    useEffect(() => {
        onErrorChange({ target: { name, value: error } });
    }, [error]);

    useEffect(() => {
        setPassword(value);
    }, [value]);

    return (
        <div>
            <input 
                type="text" 
                name={name} 
                value={password} 
                onChange={handleChange} 
                className={className}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}

export default InputField;
