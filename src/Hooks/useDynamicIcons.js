import { MdDashboard } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegStopCircle } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5";
import { FcLeave } from "react-icons/fc";
import { SlCalender } from "react-icons/sl";
import { IoMdTimer } from "react-icons/io";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { PiWheelchairBold } from "react-icons/pi";
import { MdAssistWalker } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { GiTreeBranch } from "react-icons/gi";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { FiFilter } from 'react-icons/fi';
import { FaPlus } from "react-icons/fa";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { RxRadiobutton } from "react-icons/rx";
import { MdVerified } from "react-icons/md";
import { RiUserAddFill } from "react-icons/ri";
import { GiToggles } from "react-icons/gi";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";
import { MdFileDownloadDone } from "react-icons/md";
import { MdLocalPrintshop } from "react-icons/md";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { HiFolderDownload } from "react-icons/hi";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { FaPencil } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { AiOutlinePrinter } from "react-icons/ai";
import { MdOutlineModeEdit } from "react-icons/md";
import { TbFilterFilled } from "react-icons/tb";
import { CgExport } from "react-icons/cg";
import { FaWheelchair } from "react-icons/fa";
const iconArray = {
    singleSearch:FaSearch,
    leave:FcLeave,
    vacant:IoTrashBin,
    dashBoard:MdDashboard,
    clients:FaBuildingColumns,
    users:BsPeople,
    createNew:MdAdd,
    close:IoIosClose,
    verified:MdOutlineVerified,
    edit:BsFillPencilFill,
    delete:FaTrash,
    block: FaRegStopCircle,
    resume:FaRegCirclePlay,
    view:FaEye,
    logOut:FaPowerOff,
    home:IoHome,
    calendar:SlCalender,
    clock:IoMdTimer,
    doctor:FaUserDoctor,
    email:MdOutlineMarkEmailRead,
    user:FaUser,
    chair:PiWheelchairBold,
    dentalAssistant:MdAssistWalker,
    contact:FaPhoneVolume,
    miniMize:MdOutlineKeyboardDoubleArrowLeft,
    search:RiMenuSearchLine,
    branch:GiTreeBranch,
    expand:MdKeyboardDoubleArrowDown,
    collapse:MdKeyboardDoubleArrowUp,
    export:PiExportBold,
    filter:FiFilter,
    radioSeleted:MdOutlineRadioButtonChecked ,
    radioUnchecked:RxRadiobutton,
    verified:MdVerified ,
    addUser:IoMdPersonAdd,
    options:GiToggles,
    calender:FaRegCalendarAlt,
    pdf:FaRegFilePdf ,
    undo:FaUndo,
    save:MdFileDownloadDone,
    print:MdLocalPrintshop ,
    selected:BiSolidSelectMultiple,
    previous:GrFormPrevious,
    next:GrFormNext,
    cancel:MdOutlineClose,
    downLoad:HiFolderDownload,
    insert:AiOutlineFolderAdd,
    SPKEdit:FaPencil,
    money:RiMoneyRupeeCircleFill,
    loading:AiOutlineLoading,
    outlineDelete:IoTrashBinOutline,
    outLineEye:IoEyeOutline,
    outlinePrinter:AiOutlinePrinter,
    outlineEdit:MdOutlineModeEdit,
    filter:TbFilterFilled,
    export:CgExport,
    chair:FaWheelchair,
    




}

const useDynamicIcons = ()=>{

    return function (iconname){
        return iconArray[iconname]
    }
}

export default useDynamicIcons