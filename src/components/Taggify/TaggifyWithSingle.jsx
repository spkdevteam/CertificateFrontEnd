import { option } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'

function TaggifySingleElement(args) {
    const { options, onTagChange, value, enabled, placeholder, name, create, type } = args
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState(value);
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [focused, setFocused] = useState(false);
    useEffect(() => {
        setFilteredOptions(options)
    }, [tags])
    useEffect(() => {
        setFilteredOptions(options)

    }, [options])

    useEffect(() => {
        value?.id?.length ? setTags([value]) : ''
    }, [value, options])
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputValue({ id: value, displayName: value });
        const res = options.filter(option => option.displayName.toLowerCase().includes(value.toLowerCase())) || { id: value, displayName: value };
        setFocused(true)
        setFilteredOptions(res);
    };

    const addTag = async (tag) => {
        onTagChange({ target: { name: name, value: tag.id } })
        // setTags([{ id: tag.id, displayName: tag.displayName }]);
        setInputValue({ id: '', displayName: '' });
        setFilteredOptions(options);


    };

    const removeTag = (tagToRemove) => {
        if (create) {
            setTags(tags.filter((tag) => tag !== tagToRemove));
            onTagChange(tagToRemove.id)
        }
    };

    const handleKeyPress = (e) => {
        const { name, value } = e.target

        if (e.key === 'Enter') {
            const inputValue = {
                displayName: value,
                id: value
            }

            e.preventDefault();
            if (create) addTag(inputValue);
        } else if (e.key === 'Backspace') {

        }
    };

    const handleOptionClick = (option) => {
        addTag(option);
        setFocused(false);
    };
    useEffect(() => {

        if (focused) {
            const c = setTimeout(() => {
                setFocused(false)
            }, [2000])
            clearTimeout(c)
        }

    }, [focused])

    return (
        <>
            <div className="   "   >
                <div className="flex flex-wrap items-center w-full border border-opacity-10 border-lightBorderColor rounded-md p-2 dark:text-lightBorderColor dark:border-darkIconAndSearchBg dark:bg-darkIconAndSearchBg  ">

                    {tags?.map((tag, index) => {

                        return <div key={tag.id + index} className="flex items-center  justify-between bg-gray-200 text-gray-700 rounded-md  px-3 py-1 h-10 m-1 min-w-1/2" >
                            {tag?.displayName?.toUpperCase()}
                            <button
                                key={tag.id}
                                onMouseDown={() => removeTag(tag)}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                &times;
                            </button>
                        </div>
                    })}
                    <input type={type} disabled={!enabled} onChange={(e) => handleInputChange(e)} onClick={() => { console.log(focused); setFocused(true) }} // Delay to allow click
                        placeholder={placeholder}
                        className="flex-grow p-1 outline-none border-none bg-transparent relative  "
                        name={name}
                        value={inputValue.id}
                        onKeyDown={handleKeyPress}
                    />
                </div>
                {(focused || inputValue.length > 0) && filteredOptions.length > 0 && (
                    <ul className="  absolute overflow-hidden  p-1 z-10    rounded-md  mt-2 max-h-40 overflow-y-auto  text-lightinputTextColor dark:placeholder-darkPlaceholder bg-transparent dark:bg-transparent dark:text-white  w-80 shadow-lg  ">
                        {filteredOptions?.map((point, index) => {
                            return <li key={point.id + index} onClick={() => handleOptionClick(point)} className="px-4 py-2  md:col-span-2  bg-white bg-opacity-90  cursor-pointer hover:text-info " > {point?.displayName} </li>
                        }
                        )}
                    </ul>
                )}
            </div>





        </>
    )
}

export default TaggifySingleElement