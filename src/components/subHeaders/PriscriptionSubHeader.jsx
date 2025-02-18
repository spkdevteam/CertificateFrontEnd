
import { FaSearch } from "react-icons/fa";







import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import useDynamicIcons from "../../Hooks/useDynamicIcons"
import { useRef, useState } from "react"
import useDarkmode from "../../Hooks/useDarkMode"
import ModalFilter from "../modal/ModalFilter";
import SPKBTNFilter from "../../common/Button/SPKBTNFilter";
import SPKBTNExport from "../../common/Button/SPKBTNExport";
import SPKBTNNew from "../../common/Button/SPKBTNNew";

 

const PriscriptionSubHeader = ({add})=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getMyIcon = useDynamicIcons()
    const CreateIcon = getMyIcon('createNew')
    const ExpandIcon = getMyIcon('expand')
    const CollapseIcon = getMyIcon('collapse')
    const ExportIcon = getMyIcon('export')
    const FilterIcon = getMyIcon('filter')
    const EyeIcon = getMyIcon('view')
    const EditIcon = getMyIcon('edit')
    const DeleteIcon = getMyIcon('delete')
    const CalenderIcon = getMyIcon('calender')
    const PdfIcon = getMyIcon('pdf')
    const [caseSheetList, setCaseSheetList] = useState([])
    // State to track which row has the child table open
    const [openRow, setOpenRow] = useState(null);
    const [patientData, setPatientData] = useState([])
    const [childData, setChildData] = useState()
    const [isDark, setDarkMode] = useDarkmode();
    const [toggleFilter, setToggleFilter] = useState(false)
    const [keyWord, setKeyWord] = useState('')
    const [patientcase, setPatientcase] = useState({})
    const filtermenuRef = useRef(null);
    const filterButtonRef = useRef(null);
    const [admissionList, setAdmissionList] = useState({})
    const [paginationData, setPaginationData] = useState([])
    const ativePatientData = useSelector((state) => state?.currentPatientSlice?.patientDetail)
    const activeUser = useSelector((state) => state?.authSlice)
    const [loading, setLoading] = useState(true)
    const activeMenu = useSelector((state) => state?.menuSlice?.menuName)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalRows, setTotalRows] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pending, setPending] = useState(false);
     
    const totalItems = patientData?.length;
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const goToNextPage = (page) => setCurrentPage(page);
    const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
    const startItem = (currentPage - 1) * rowsPerPage + 1;
    const endItem = Math.min(currentPage * rowsPerPage, totalItems);
    const [expandedRows, setExpandedRows] = useState({});
    const [expandedElements, setExpandedElement] = useState([]);


return  (

    <div className='flex w-full p-5  justify-between bor der items-center h-24'>
        <div className={`relative  z-10 `}>
            <span className='absolute top-0 bottom-0 left-3 flex items-center'>
                <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"}`} style={{ color: "#80808f" }} />
            </span>
            <input
                type="text"
                className={`pl-9 py-2 w-96 dark:bg-darkIconAndSearchBg bg-light rounded-lg`}
                placeholder='Search....  '
            />
        </div>
        <div className=' flex gap-5'>
            <span className='relative'>
                <SPKBTNFilter text={'Filter'} ref={filterButtonRef}
                    onClick={() => setToggleFilter(!toggleFilter)} />
                
            </span>
            {
                toggleFilter && (
                    <div className='absolute top-6 right-52 z-[999]' ref={filtermenuRef} >
                        <ModalFilter />
                    </div>
                )
            }
            <span>
                
                <SPKBTNExport text={'Export'} />
                
            </span>
            <span>
                <SPKBTNNew text="Add" onClick={() => add()} />
                 
            </span>
        </div>

    </div>
)
}

export default PriscriptionSubHeader
