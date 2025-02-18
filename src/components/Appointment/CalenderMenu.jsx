import { useDispatch, useSelector } from "react-redux"
import { changeCalenderView, changeListCategory, updateActiveBranch, updateBookingStatus, updateSearchKey } from "../../store/appointmentStore"
import useDynamicIcons from "../../Hooks/useDynamicIcons"
import useGetActiveBranches from "../../Hooks/useGetActiveBranches"
import { useEffect, useState } from "react"


const CalenderMenu = () => {
    const branches = useGetActiveBranches()
    const selectionCategory = useSelector((state) => state.appointment.listCategory)
    const viewStyle =  ['Day','Week','Month']
    const currentView = useSelector((state) => state.appointment.view)
    const getMyIcon = useDynamicIcons()
    const dispatch = useDispatch()
    const keyWord = useSelector((state)=>state.appointment.searchKey)
    const selectedBranch = useSelector((state) => state.appointment.branch)
    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)
    const handleSwitchCategory = (item) => {
        dispatch(changeListCategory(item))
    }
    useEffect(()=>{
        updateBranch()
    },[currentUser])
    useEffect(()=>{
        updateBranch()
    },[])

    const updateBranch = ()=>{
        (currentUser?.role?.id == 1 || currentUser?.role?.id == 2) ?  dispatch(updateActiveBranch('')) : dispatch(updateActiveBranch(currentUser?.branch))
        
    }

    const Search = getMyIcon('singleSearch')
    const handleView = (item) => {
        dispatch(changeCalenderView(item))
    }

    const handleBranch = (e)=>{
        dispatch(updateBookingStatus(true))
        dispatch(updateActiveBranch(e.target.value))
    }
    const handleSearchKey = (e)=>{
        console.log(e.target.value)
       
        dispatch(updateSearchKey(e.target.value))
    }

    return (
        <div className="w-full   border-gray-700 border-opacity-20 border    rounded-xl h-full flex xl:flex-row flex-col justify-between p-5 items-center text-lightBtntext ">
             <div className="text-lg tracking-wide p-5 flex-col h-full  justify-center flex items-center">
                
                <div className="w-60 flex text-sm  border dark:border-gray-700  p-2    rounded-md font-thin "> Branch:
                    <select disabled={(currentUser?.role?.id == 1 || currentUser?.role?.id == 2) ?  false :true} onChange={(e)=>handleBranch(e)} className="w-full bg-transparent dark:bg-darkSecondary dark:bg-opacity-5  border-none focus:outline-none font-thin outline-none">
                        <option className="font-thin bg-transparent dark:bg-darkSecondary" value="">
                            Select  
                        </option>
                        {branches?.map((branch) => (
                            <option
                                key={branch._id} selected={selectedBranch ==branch._id}
                                className="font-thin  dark:bg-darkSecondary "
                                value={branch._id}
                            >
                                {branch.name}
                            </option>
                        ))}
                    </select>
                </div>


            </div>
            <div className="text-lg font-thin  w-full  tracking-wide p-2 dark:border-gray-700   rounded-md border  h-10  flex items-center">
                <Search className=' h-[50%] ' />
                <input onChange={(e)=>handleSearchKey(e)} value={keyWord} autoComplete="off" className="h-full w-full text-sm flex bg-transparent outline-none  p-5 placeholder:text-lightBtntext placeholder:text-opacity-50 " placeholder="Search..." type="text" name="keyWord" id="" />
                
            </div>
           

            

            <div className=" h-full sm:w-full  flex md:flex-row flex-col gap-2  justify-center items-center p-1    m-auto ">

                <div className="flex w-full items-center justify-center  ">
                    {
                        Object.keys(selectionCategory)?.map((item, index) => (
                            <button onClick={() => handleSwitchCategory(item)} key={index + item} className={`${selectionCategory[item] ? 'bg-lightBtntext shadow-inner text-white' : 'bg-opacity-10 text-lightBtntext'} bg-lightBtntext text-sm hover:bg-opacity-50 md:w-20 md:h-10 h-8 w-16 justify-center  flex items-center ${!index ? 'rounded-s-md' : index == Object.keys(selectionCategory).length - 1 ? 'rounded-e-md ' : ''}  `}>
                                {item}
                            </button>

                        ))
                    }
                </div>
                <div className="flex w-full items-center justify-center ">
                    {
                        viewStyle?.map((item, index) => (
                            <button onClick={() => handleView(item)} key={item + index} className={`${item == currentView ? 'bg-lightBtntext shadow-inner text-white' : 'bg-opacity-10 text-lightBtntext'} bg-lightBtntext text-sm  sm:text-sm hover:bg-opacity-50 md:w-20 md:h-10 h-8 w-16  justify-center flex  border-cyan-800  border-opacity-50  items-center ${!index ? 'rounded-s-md' : index == Object.keys(viewStyle).length - 1 ? 'rounded-e-md border-s' : 'border-s'}  `}>
                                {item}
                            </button>

                        ))
                    }
                </div>
            </div>
           

        </div>
    )
}

export default CalenderMenu