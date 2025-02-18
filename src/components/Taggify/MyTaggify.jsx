import React, { useState } from 'react'

function MyTaggify() {
    const options = ['Swelling Large', 'Bleeding Gums', 'Toothache', 'Pain in Tooth', 'Consultation',
        'Faulty Crown', 'Difficulty in Chewing', 'Decayed Tooth', 'Dirty Teeth',
        'Regular Dental Checkup', 'Dental Caries', 'Missing Tooth', 'Tenderness of Gums', 'Sensitivity',
        'Swelling in Gums', 'Flaque Removal', 'Teeth Cleaning', 'Dental Implant', 'Bad Breath',
        'Loose Tooth'
    ];

    const [tagValue, setTagValue] = useState("")
    const [focus, setFocus] = useState(false)
    const [tagList, setTagList] = useState([])
    const [filterData, setFilterData] = useState(options)

    function handleChange(e) {
        const inputValue = e.target.value
        setTagValue(inputValue)
    }

    function addTagValue(tagValue) {
        if (!tagValue == "") {
            setTagList([...tagList, tagValue])
            setTagValue("")

        }
    }

    const removTaglist = (val) => {
        const newTagList = tagList.filter((items) => items !== val)
        setTagList(newTagList)
    }


    function handleKeyPress(e) {
        if (e.key == "Enter") {
            e.preventDefault();
            addTagValue(tagValue)
        } else if (e.key == "Backspace") {
            if (tagValue == "") {
                removTaglist(tagList[tagList.length - 1])
            }
        }

    }

    function handleSelect(value) {
        addTagValue(value)
    }

    return (
        <>
            <div className='max-w-xl flex flex-col border'>

                <div className='px-2 flex flex-wrap gap-1  border-gray-300 bg-gray-200 py-4 rounded-lg'>
                    {
                        tagList && tagList.length > 0 && tagList.map((item, ind) => {
                            return (
                                <div className='flex items-center bg-gray-300 px-3 py-1 rounded-3xl ' key={ind}>
                                    {item}
                                    <button
                                        onClick={() => removTaglist(item)}
                                        className='ms-2 text-sm text-red-600 mb-1 '>
                                        x
                                    </button>
                                </div>
                            )
                        })
                    }
                    <input type="text"
                        value={tagValue}
                        placeholder='add complaint'
                        className='border-none bg-transparent flex-grow  w-auto outline-none'
                        onChange={handleChange}
                        onKeyDown={handleKeyPress}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setTimeout(() => setFocus(false), 200)}
                    />
                </div>
                <div>
                    {/* <ul className='bg-white max-w-xl max-h-24 py-3 overflow-y-auto mt-2' >
                    {
                        focus && filterData.length > 0 && filterData.map((item, ind) => {
                            return <li className='py-1'
                            onClick={()=>handleSelect(item)}>
                                {item}
                            </li>

                        })
                    }
                </ul> */}

                    {
                        (focus || tagValue) && filterData.length > 0 && (
                            <ul className='bg-white max-w-xl max-h-24 py-4 overflow-y-auto mt-2' >
                                {filterData.map((item, ind) => {
                                    return <li className='py-1 cursor-pointer'
                                        onClick={() => handleSelect(item)}>
                                        {item}
                                    </li>

                                })}

                            </ul>




                        )
                    }

                </div>
            </div>

        </>
    )
}

export default MyTaggify