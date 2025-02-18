import useDynamicIcons from "../../Hooks/useDynamicIcons"

const HiddenMenuBar = ()=>{
    const getMyIcon = useDynamicIcons()
    const Close = getMyIcon('close')
    const CalenderIcon = getMyIcon('calendar') 
    const ClockIcon = getMyIcon('clock')
    const DoctorIcon = getMyIcon('doctor')
    const EmailIcon = getMyIcon('email')
    const UserIcon = getMyIcon('user')
    const ChairIcon = getMyIcon('chair')
    const DentalAssistantIcon = getMyIcon('dentalAssistant')
    const Expand = getMyIcon('miniMize')
    const Search = getMyIcon('search')
    
    return(
        <div className="xl:h-full w-full justify-start flex xl:flex-col cursor-pointer flex-row-reverse text-lightBtntext items-center gap-4 bg-opacity-30  p-2">
            <Expand className='xl:rotate-180 -rotate-90 w-7 h-7 '/>
            <Search/>
            <CalenderIcon/>
            <DoctorIcon/>
            <EmailIcon/>
            <UserIcon/>
            <ChairIcon/>
            <ClockIcon/>
            <DentalAssistantIcon/>
        </div>

    )
}

export default HiddenMenuBar