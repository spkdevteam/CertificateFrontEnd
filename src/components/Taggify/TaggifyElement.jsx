import { option } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'

function TaggifyElement({ options, onTagChange, value ,enabled,placeholder ,readOnly,className,department }) {

    //component for selecting multiple item & display in the same text area, 
    // options are the master list need to list , from there user will choose the items  
    //placeHolder is the value need to display as place holder 
    //readOnly makes the element disabled 
    // classbane we can pass tailwind property for this input elemnt 
    //onTagChange is call back function from the parent component , which will eecute while a elemt os selected or not 
    //value is the recently  added or removed value    
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        const result = options.filter((serv)=> serv?.departmentId == department)
        console.log('options' , options,'>>>>>>>>>>>>',result)
        setFilteredOptions(result)
    }, [tags])
    useEffect(() => {
        const result = options.filter((serv)=> serv?.departmentId == department)
        setFilteredOptions(result)
    }, [options])
    useEffect(() => {
        console.log(options,value,'optionsoptionsoptions')
        const temp = []
        if (value) {
            for (let option of options) {
                for (let val of value) {
                    if (val == option.id) temp.push(option)
                }
            }
            setTags(temp)
        }

    }, [value, options])

    // executes when input changes 
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        const res = options.filter(option =>option.departmentId == department && option.displayName.toLowerCase().includes(value.toLowerCase()));
        setFocused(true)
       // setFilteredOptions(res);
    };

    const addTag =async (newTag) => {
        console.log(tags,'my currect tags ')
       // if (!tags.some(existingTag => existingTag.id === tag.id) && tag?.id?.toString().trim() !== '') {
            await onTagChange(newTag.id);
            setTags(prev => [...prev, { id: newTag.id, displayName: newTag.displayName }]);
            setInputValue('');
            //setFilteredOptions(options);
        //}
    };

    const removeTag = (tagToRemove) => {
        if(!readOnly){ 
        setTags(tags.filter((tag) => tag !== tagToRemove));
        onTagChange(tagToRemove.id)
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            //  addTag(inputValue);
        } else if (e.key === 'Backspace') {
            if (inputValue == "") {
                //   removeTag(tags[tags.length - 1]);
            }
        }
    };

    const handleOptionClick = (option) => {
        addTag(option);
        setFocused(false);
    };
    useEffect(() => {
        let c;  
        if (focused) {
            console.log(focused, 'focused');
            c = setTimeout(() => {
                setFocused(false);
            }, 2000);  
        }
        return () => {
            clearTimeout(c);  
        };
    }, [focused]);

    return (
        <>
            <div className={className}   >
                <div className="flex   items-center w-full border border-lightBorderColor rounded-md p-2 h-10 dark:text-lightBorderColor dark:border-darkIconAndSearchBg dark:bg-darkIconAndSearchBg ">
                    {tags.map((tag, index) => (
                        <div key={tag.id+index} className="flex items-center w-auto text-nowrap  text-gray-700 rounded-full px-3 py-1 m-1 " >
                            {tag.displayName}
                            <button
                                key={tag.id}
                                onMouseDown={() => removeTag(tag)} // Callback that executes `removeTag(tag)` when clicked
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <input disabled={readOnly} type="text" value={inputValue} onChange={handleInputChange} onClick={() => { console.log(focused); setFocused(true) }} // Delay to allow click
                        placeholder={`${filteredOptions.includes(inputValue) ? placeholder : !filteredOptions?.length ?'no services found':'add services '}`}
                        className={className}
                    />
                </div>
                {(focused || inputValue.length > 0) && filteredOptions.length > 0 && (
                    <ul className="  absolute overflow-hidden  p-1 z-10    rounded-md  mt-2 max-h-40 overflow-y-auto  text-lightinputTextColor dark:placeholder-darkPlaceholder bg-transparent dark:bg-transparent dark:text-white  w-80 shadow-lg  ">
                        {filteredOptions?.map((point, index) => {
                            return <li key={point.id+index} onClick={() => handleOptionClick(point)} className="px-4 py-2  md:col-span-2  dark:bg-darkIconAndSearchBg bg-white   cursor-pointer hover:text-info " > {point?.displayName} </li>
                        }
                        )}
                    </ul>
                )}
            </div>





        </>
    )
}

export default TaggifyElement