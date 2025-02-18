import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { div } from 'framer-motion/client';

const SPKInputPassword = ({ value, className, onChange, onErrorExist }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleBlur = () => {
        if (!value || value.length < 6) {
            setError(true);
            onErrorExist();
        } else {
            setError(false);
        }
    };

    return (
         
            <input
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            className={`${className} pr-10 ${error ? 'border-red-500' : ''}`}
            placeholder="Password"
            onBlur={handleBlur}
        />
       
        
    );
};

export default SPKInputPassword;
