import { useDispatch, useSelector } from "react-redux";
import useDynamicIcons from "../../Hooks/useDynamicIcons";
import { editMedicinePrescription, updateMedicineKart } from "../../store/reducer/currentPatient/currentPatient";
import { useEffect, useState } from "react";
import medicineFrequencies from "../../constant/constant";


const MedicineCourse = ({ medicine, position }) => {
    const getMyIcon = useDynamicIcons()
    const EditIcon = getMyIcon('edit')
    const DeleteIcon = getMyIcon('delete')
    const dispatch = useDispatch()
    const [editItem, setEditItem] = useState(false)

    const [formData, setFormData] = useState({})
    const { activePrescription: activePrescription } = useSelector((state) => state?.currentPatientSlice);
    const editPriscription = useSelector((state) => state?.currentPatientSlice.editPrescription);

    const handleEditMedicine = () => {
        dispatch(editMedicinePrescription(position))
    }
    const handleDeleteMedicine = () => {
        let tempDrugList = JSON.parse(JSON.stringify(activePrescription))
        const listLength = activePrescription?.drugArray?.length ? activePrescription?.drugArray?.length - 1 : 0

        if (listLength) {
            [tempDrugList.drugArray[position], tempDrugList.drugArray[listLength]] = [tempDrugList.drugArray[listLength], tempDrugList.drugArray[position]]
            tempDrugList.drugArray.pop()
        }
        else {
            tempDrugList = []
        }
        dispatch(updateMedicineKart(tempDrugList))
        dispatch(editMedicinePrescription(position))
    }

    const updateFormData = (input) => {
        const frequency = medicineFrequencies?.filter((temp) => temp?.pattern   == input?.freequency)
        const temp = {
            ...input,
            duration: parseInt(input?.duration),
            freq: frequency[0],
        }
        console.log(temp,'temp<>>>>>>>>>>>>>>>')
        setFormData(temp)
    }

    useEffect(() => {
        updateFormData(medicine)
    }, [medicine])






    return (
       <> { formData?.freq?.quantity ? 
        <div onMouseOver={() => setEditItem(true)} onMouseLeave={() => setEditItem(false)} className="w-full h-full text-xl  ">
            <div>
                <span className=" text-base">{position + 1 + '.' + formData?.drugName?.charAt(0).toUpperCase() + formData?.drugName?.slice(1).toLowerCase()}-------- {formData?.duration * formData?.freq?.quantity * parseInt(formData?.dosage) || 0}Tablets</span>

            </div>
            <div className="pl-5 flex ">

                <span className=" text-sm">{parseInt(formData?.dosage) * parseInt(formData?.freq?.quantity)} Tablets x  {formData?.freq?.have}---------- {formData?.note}----------
                    {`${formData?.freequency?.split('-').
                        map((i, index) => {
                            let slot = ''
                            if (index === 0) slot = 'Mng'
                            else if (index === 1) slot = 'Aft'
                            else if (index === 2) slot = 'Ngt'
                            return parseInt(i) === 0 ? '-0-' : formData.dosage + slot
                        })?.join('-')}  ,          ${formData?.duration} Days`} </span>
               

                {editItem && editPriscription ? <div className="flex     justify-center items-center  gap-2 ">
                    {/* <EditIcon   className='w-5 ps-2  text-yellow-900 cursor-pointer' onClick={() => { handleEditMedicine() }} />
                <DeleteIcon className='w-5 ps-2   text-gray-500 cursor-pointer' onClick={() => { handleDeleteMedicine() }} /> */}
                </div> : ''
                }

            </div>

        </div>:''}</>
    )
}

export default MedicineCourse