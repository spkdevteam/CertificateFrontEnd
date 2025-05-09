import React, { useState } from 'react'

function Taggify() {
    const options = ['Swelling Large', 'Bleeding Gums', 'Toothache', 'Pain in Tooth', 'Consultation',
        'Faulty Crown', 'Difficulty in Chewing', 'Decayed Tooth', 'Dirty Teeth',
        'Regular Dental Checkup', 'Dental Caries', 'Missing Tooth', 'Tenderness of Gums', 'Sensitivity',
        'Swelling in Gums', 'Flaque Removal', 'Teeth Cleaning', 'Dental Implant', 'Bad Breath',
        'Loose Tooth'
    ];

    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [focused, setFocused] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setFilteredOptions(
            options.filter((option) => option.toLowerCase().includes(value.toLowerCase()))
        );
    };

    const addTag = (tag) => {

        if (!tags.includes(tag) && tag.trim() !== '') {
            setTags([...tags, tag]);
            setInputValue('');
            setFilteredOptions(options);
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag(inputValue);
        } else if (e.key === 'Backspace') {
            if (inputValue == "") {
                removeTag(tags[tags.length - 1]);
            }
        }
    };

    const handleOptionClick = (option) => {

        addTag(option);
        setFocused(false); // Close the dropdown after selection
    };


    return (
        <>
            <div className="">
                <div className="flex relative flex-wrap items-center border border-lightBorderColor rounded-md p-2  dark:border-darkSecondary">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-gray-200 text-gray-700 rounded-full px-3 py-1 m-1 "
                        >
                            {tag}
                            <button
                                onClick={() => removeTag(tag)}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setTimeout(() => setFocused(false), 200)} // Delay to allow click
                        placeholder={`${filteredOptions.includes(inputValue) ? "filteredOptions" : "Add task"}`}
                        className="flex-grow p-1 outline-none border-none bg-transparent"
                    />

                    {(focused || inputValue) && filteredOptions.length > 0 && (

                        <ul className="border top-[2rem] z-[9999999999999] absolute w-[100%]  border-gray-300 rounded-md mt-2 max-h-40 overflow-y-auto dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-white dark:bg-darkIconAndSearchBg dark:text-white  shadow-lg">
                            {filteredOptions.map((option, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => handleOptionClick(option)}
                                        className="px-4 py-2 cursor-pointer hover:text-info "
                                    >
                                        {option}
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    )}
                </div>

            </div>





        </>
    )
}

export default Taggify