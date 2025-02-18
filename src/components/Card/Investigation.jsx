import { useState } from 'react';
import Dropzone from 'react-dropzone';
import { motion } from 'framer-motion';
import useDarkmode from '../../Hooks/useDarkMode';

function Investigation() {

    const [isDark] = useDarkmode()
    const [remarks, setRemarks] = useState('');
    const [attachments, setAttachments] = useState([]);
    const [attachmentTableCreated, setAttachmentTableCreated] = useState(false);

    const handleDrop = (acceptedFiles) => {
        console.log('Files uploaded:', acceptedFiles);
    };

    const handleAttachmentSubmit = () => {
        if (remarks) {
            if (!attachmentTableCreated) {
                setAttachmentTableCreated(true);
            }
            const randomName = generateRandomFileName();
            setAttachments([...attachments, { name: randomName, remarks }]);
            setRemarks('');
        }
    };

    const handleDelete = (index) => {
        setAttachments(attachments.filter((_, i) => i !== index));
    };

    function generateRandomFileName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomName = '';
        for (let i = 0; i < 10; i++) {
            randomName += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return randomName;
    }

    const FileType = [
        { value: "iopa", label: "IOPA" },
        { value: "x-ray", label: "X-Ray" },
        { value: "prescription", label: "Prescription" },
        { value: "medicalReport", label: "Medical Report" },
        { value: "testScanReport", label: "Test Scan Report" },
        { value: "bloodTestReport", label: "Blood Test Report" },
    ];

    return (

        <div className="md:container md:mx-auto px-8  pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg" id="otherAttachments">
            <div className='flex flex-col border-[1px] dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-3   shadow-lg'>
                <div className='py-5 px-3'>
                    <h2 className='text-2xl font-semibold text-lightTextHeading'>Investigation</h2>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className="px-4 md:col-span-2">
                        <label className="block text-base px-2 font-medium mb-2"><p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                        Upload Files
                        </p>
                        </label>
                        <Dropzone onDrop={handleDrop} maxFiles={1} maxSize={10485760}>
                            {({ getRootProps, getInputProps }) => (
                                <div
                                    {...getRootProps()}
                                    className="border border-dashed border-lightHoverBgBtn dark:border-gray-600 bg-lightBgBtn dark:bg-gray-700 rounded-lg py-4 cursor-pointer text-center"
                                >
                                    <input {...getInputProps()} />
                                    <div className="text-primary">
                                        <div className="">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                Drop files here or click to upload.
                                            </h3>
                                            <p className="text-sm text-gray-500">(Allowed .jpg, .png, .pdf less than 10MB)</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Dropzone>
                    </div>
                    <div className="px-4 mt-5">
                        <label >
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                            File Type
                            </p>
                        </label>
                        <select name="country" className="form-control outline-none w-[100%] rounded-md px-4 py-2.5 border border-lightborderInputColor dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white" >
                                <option value=""> </option>
                                {
                                    FileType && FileType.length > 0 && FileType.map((item,ind)=>{
                                        return (
                                            <option className='hover:text-info' key={ind} value={item.value}>{item.label}</option>
                                        )
                                    })
                                }
                            </select>
                    </div>
                    <div className="px-4 mt-5">
                        <label >
                            <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                Remarks

                            </p>
                        </label>
                        <textarea
                            className={` form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor text-lightinputTextColor dark:border-darkSecondary dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white `}
                            placeholder=""
                            // value={note}
                            rows={1}

                        // onChange={(e) => setNote(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="flex flex-wrap items-center py-3 px-5 pb-4">
                    <div className="w-full flex justify-end items-center mt-7">
                        <button
                            className=" bg-lightBgBtn   hover:bg-lightHoverBgBtn mt-1 md:mt-2 px-4 py-2 rounded text-lightBtntext hover:text-white"
                        >
                            Submit & Add More
                        </button>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Investigation;




