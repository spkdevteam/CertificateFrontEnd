import React, { useEffect, useState } from "react";
import medicineFrequencies from "../../constant/constant";
import useDynamicIcons from "../../Hooks/useDynamicIcons";
import { useDispatch, useSelector } from "react-redux";
import { cancelEditPrescription, editMedicinePrescription, updateMedicineKart } from "../../store/reducer/currentPatient/currentPatient";

const AddMedicineToKart = () => {
  const getMyIcon = useDynamicIcons()
  const AddIcon = getMyIcon('createNew')
  const Cancelcon = getMyIcon('close')
  const currItem = useSelector((state) => state.currentPatientSlice.editMedicineIndex)
  const activePrscription = useSelector((state) => state.currentPatientSlice.activePrescription)
  
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    drugName: "",
    drug: "",
    dosage: "",
    freequency: "",
    duration: "",
    drugArray:[],
    note: "",
    _id: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    dispatch(cancelEditPrescription())
  }
  const handleAddToPriscription = () => {
    const tempData =JSON.parse(JSON.stringify(activePrscription)) 
    console.log(tempData,'tempDatatempData')
    if(!tempData.drugArray) tempData.drugArray = []
    console.log(tempData.drugArray)
    !currItem ?tempData.drugArray.push({...formData}): tempData.drugArray[currItem] = {...formData}
    dispatch(updateMedicineKart(tempData))
    console.log(tempData.drugArray?.length,'tempData.drugArray?.length')
    dispatch(editMedicinePrescription(tempData.drugArray?.length||0))
   // dispatch(cancelEditPrescription())
    setFormData({
      drugName: "",
      drug: "",
      dosage: "",
      freequency: "",
      duration: "",
      drugArray:[],
      note: "",
      _id: "",
    })
  }
  useEffect(() => {
    console.log(formData, 'formData ------ >>>>>>')
  }, [formData])





  useEffect(() => { 
    // if(!activePrscription?.drugArray) activePrscription.drugArray = []
    console.log(currItem,activePrscription?.drugArray,'---------------*********************')
     
        const enableEntry = activePrscription?.drugArray? activePrscription?.drugArray[currItem]:[]
    
       setFormData({...enableEntry})
     
  }, [currItem])

  return (
    <div className="w-full flex  flex-wrap gap-4 border text-cyan-600 border-yellow-300 border-opacity-40 p-4 rounded-lg shadow-lg">
      <div className="h-10 text-xl w-full m-5 ">
        Add medicine
      </div>

      <div className="w-full flex flex-wrap justify-between lg:flex-row flex-col ">
        <div className="flex flex-col w-1/5 min-w-[200px]">
          <label className="text-sm font-semibold mb-1"> Medicine Name</label>
          <input
            type="text"
            name='drugName'
            value={formData.drugName}
            onChange={(e) => { handleChange(e) }}
            className="w-full h-10 px-3 bg-opacity-10 bg-gray-50 border border-gray-800 border-opacity-15 rounded focus:outline-none outline-none "
          //placeholder={field.placeholder}
          />
        </div>
        <div className="flex flex-col w-1/12 min-w-[100px]">
          <label className="text-sm font-semibold mb-1"> Dosage </label>
          <input
            type="text"
            name='dosage'
            value={formData.dosage}
            onChange={(e) => { handleChange(e) }}
            className="w-full h-10 px-3 bg-opacity-10 bg-gray-50 border border-gray-800 border-opacity-15 rounded focus:outline-none outline-none "
          //placeholder={field.placeholder}
          />
        </div>
        <div className="flex flex-col w-1/5 min-w-[200px]">
          <label className="text-sm font-semibold mb-1"> Freequency </label>
          <select
            name="freequency"
            value={formData.freequency}
            onChange={(e) => { handleChange(e) }}
            className="w-full h-10 px-3 bg-opacity-10 bg-gray-50 border-gray-800 border-opacity-15 border  rounded focus:outline-none outline-none "
          >
            {medicineFrequencies?.map((option, idx) => (
              <option selected={formData.freequency == option?.pattern } className="bg-white bg-opacity-10 dark:bg-cyan-900 dark:bg-opacity-70" key={idx} value={option.pattern}>
                 {option?.pattern + ' ' + option?.have}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col w-1/12 min-w-[200px]">
          <label className="text-sm font-semibold mb-1"> Duration (In days) </label>
          <input
            type="number"
            name='duration'
            value={formData.duration}
            onChange={(e) => { handleChange(e) }}
            className="w-full h-10 px-3 bg-opacity-10 bg-gray-50 border border-gray-800 border-opacity-15   rounded focus:outline-none outline-none "
          //placeholder={field.placeholder}
          />
        </div>

      </div>

      <div className="w-full flex flex-wrap justify-between lg:flex-row flex-col ">
        <div className="flex flex-col w-1/2 ">
          <label className="text-sm font-semibold mb-1"> Notes </label>
          <textarea
            rows="3"
            name='note'
            value={formData.note}
            onChange={(e) => { handleChange(e) }}
            className="w-full px-3 bg-gray-50 bg-opacity-15 border-gray-800 border-opacity-15 border rounded focus:outline-none  "
          //placeholder={field.placeholder}
          />
        </div>
        <div className="flex justify-end items-end p-2  gap-4  w-1/2   ">
          <button onClick={() => handleClose()} className="h-10 w-32 gap-4  bg-gray-700 dark:bg-opacity-50 text-white  flex justify-center items-center rounded-md ">
            <Cancelcon className='w-6 h-6' /> Cancel
          </button>
          <button onClick={()=>{handleAddToPriscription()}} className="h-10 w-32 bg-cyan-700  text-white  flex justify-center gap-4 items-center rounded-md ">
            <AddIcon className='w-6 h-6' /> Save
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddMedicineToKart;

