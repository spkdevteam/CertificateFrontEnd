import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FaSearch } from "react-icons/fa";
import useDarkmode from '../../Hooks/useDarkMode';
import { FiFilter } from 'react-icons/fi';
import { PiExportBold } from "react-icons/pi";
import ModalFilter from '../modal/ModalFilter';
import useDynamicIcons from '../../Hooks/useDynamicIcons';
import Tooltip from '../../components/ui/Tooltip';
import Icons from '../ui/Icon';
import readPatientPriscription from '../../services/priscription/readPatientPriscription';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveCaseSheet, setActivePrescription } from '../../store/reducer/currentPatient/currentPatient';


import { pushComponentToModal, switchModal } from '../../store/handleModal';
import getParticularCaseSheet from '../../services/appointment/getActiveCaseSheet';
import caseSheetService from '../../services/caseSheetService/caseSheet.service';
import getActiveAppointMent from '../../services/appointment/getActiveAppointMent';
import getPrescriptionById from '../../services/appointment/getPrescriptionById';
import getPatientDetailsById from '../../services/appointment/getPatientDetailsById';
import getBranchById from '../../services/branchService/getBranchById';
import GloabalLoading from '../../common/globalLoader/GloabalLoading';
import DataTable from 'react-data-table-component';
import { div } from 'framer-motion/client';
import SpkDataTable from '../../common/DataTable/SpkDataTable';
import SPKBTNThemePrint from '../../common/Button/OutlineThemeButton/SPKBTNThemePrint';
import SPKBTNThemedView from '../../common/Button/OutlineThemeButton/SPKBTNThemedView';
import SPKBTNThemedEdit from '../../common/Button/OutlineThemeButton/SPKBTNThemedEdit';
import SPKBTNThemedDelete from '../../common/Button/OutlineThemeButton/SPKBTNThemedDelete';
import usePriscriptionHook from '../../Hooks/usePriscription';
import { ToastContainer } from 'react-toastify';
import SPKBTNInsert from '../../common/Button/SPKBTNInsert';
import SPKBTNNew from '../../common/Button/SPKBTNNew';
import SPKBTNFilter from '../../common/Button/SPKBTNFilter';
import SPKBTNExport from '../../common/Button/SPKBTNExport';




const NestedTable = () => {
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
    const {handleView,handleEdit,handleDeletePriscription} = usePriscriptionHook()

    const handleExpandedArray = (id) => {
        console.log(id)
        const index = expandedElements.findIndex(element => element === id);
        if (index >= 0) {

            const newArray = [...expandedElements];

            newArray.splice(index, 1);

            setExpandedElement(newArray);
        }
        else {
            const newArray = [...expandedElements];
            newArray.push(id)
            setExpandedElement(newArray);

        }
    };


    const toggleRow = useCallback((row) => {
        setExpandedRows(prev => ({
            ...prev,
            [row._id]: !prev[row._id],
        }));
    }, []);


    useEffect(() => {
        console.log(expandedElements, 'expanded')
    }, [expandedElements])

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(e);
        setCurrentPage(1); // Reset to the first page when rows per page changes
    };


    useEffect(() => {
        console.log(activeMenu, 'activeMenuactiveMenuactiveMenuactiveMenu')
        fetchPatientAppointMent(ativePatientData)

    }, [])

    useEffect(() => {
        console.log(currentPage, 'currentPage')
        const Data = patientData?.filter((d, index) => index >= rowsPerPage * (currentPage - 1) && index < (rowsPerPage * (currentPage - 1)) + rowsPerPage)
        setPaginationData(Data)
    }, [rowsPerPage, currentPage, patientData])



    const openInModal = (data) => {
        const newData = {
            branchId: ativePatientData?.branchId,
            buId: ativePatientData?.businessUnit,
            patientId: ativePatientData?._id,
            doctorId: [3, 15].includes(activePatientData?.clientUser?.role.id) ? activePatientData?.clientUser?._id : null,
            drugArray: [],
            additionalAdvice: null
        }
        console.log(newData, 'my new data ')
        if (activeMenu == "All Prescription") {
            dispatch(switchModal(true))
            dispatch(pushComponentToModal({ element: 'NewPrescription', data: null }))
          //   navigate('/patientDetail/editPriscription', { state: { newData } })

        }
        else {
            navigate('/patientDetail/editPriscription', { state: { newData } })

        }
        // dispatch(pushComponentToModal({ element: 'NewPrescription', data: data }))
    }



    const fetchPatientAppointMent = async (patient) => {
        try {
            setLoading(true)
            const data = {
                branchId: patient?.branch,
                patientId: patient?._id
            }
            const result = await getActiveAppointMent(data)
            setAdmissionList(result?.data || [])
            setLoading(false)
        } catch (error) {

        }

    }
    const { patientDetail: activePatientData, hasData: isPatientData } = useSelector((state) => state?.currentPatientSlice);

    const loadPatientPriscription = async () => {
        const filterData = {
            keyWord: keyWord,
            page: currentPage,
            perPage: rowsPerPage,
            buId: activePatientData?.businessUnit,
            branchId: activePatientData?.branch,
            patientId: activePatientData?._id,
        }
        const result = await readPatientPriscription(filterData)
        setPatientData(result.data)
        setTotalRows(result?.data?.length)
        //console.log(result.data,'pagination data ')
        // setPaginationData(result.data)
    }






    useEffect(() => {
        loadPatientPriscription()

    }, [activePatientData, currentPage])


    const handleDropDown = (data) => {
        if (openRow) setOpenRow(null)
        else {
            setOpenRow(data?._id)
            setChildData(data?.drugArray)

        }
    }
    const handleClickOutside = (event) => {
        // Check if the click is outside the modal and not on the filter button
        if (
            filtermenuRef.current &&
            !filtermenuRef.current.contains(event.target) &&
            filterButtonRef.current &&
            !filterButtonRef.current.contains(event.target)
        ) {
            setToggleFilter(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



     
    const loadPatientPriscriptionforDataTable = async ({ page, rowPerPage, keyword }) => {
        const filterData = {
            keyWord: keyword,
            page: page,
            perPage: rowPerPage,
            buId: activePatientData?.businessUnit,
            branchId: activePatientData?.branch,
            patientId: activePatientData?._id,
        }
        const result = await readPatientPriscription(filterData)
        const data = result.data
        const totalDataCount = result?.data?.length
        return { data, totalDataCount }

    }

 
    const subHeaderComponent = (

        <div className='flex w-full   justify-between bor der items-center h-24'>
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
                <span  className='relative'>
                    <SPKBTNFilter  ref={filterButtonRef}
                        text={'Filter'} onClick={() => setToggleFilter(!toggleFilter)}/>
                    
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
                    <SPKBTNNew onClick={() => openInModal()} text='Add' />
                     
                </span>
            </div>

        </div>
    );

 
     

    

    const columns = [
        // Column for "Id"
        {
            name: "Prescription Id",
            selector: (row) =>
                row.displayId
                    ?.toUpperCase()
                    .split("")
                    .splice(row?.displayId?.length - 9, row?.displayId?.length),
            sortable: true,
            width: "10rem", // Adjusted width
        },
        {
            name: "Case Sheet",
            selector: (row) =>
                row?.caseSheetId?.displayId
                    ?.toUpperCase()
                    .split("")
                    .splice(row?.displayId?.length - 11, row?.displayId?.length),
            sortable: true,
            // width: "10rem", // Adjusted width
        },

        {
            name: "Duty Doctor",
            selector: (row) => row?.doctorId?.firstName?.charAt(0)?.toUpperCase() + row?.doctorId?.firstName?.slice(1)?.toLowerCase(),
        },
        {
            name: "Date",
            selector: (row) => row?.createdAt?.split('T')[0]?.split('-').reverse()?.join('-'),
        },

        // Column for "Status"


        // Column for "Action"
        {
            name: "Action",
            selector: (row) => {
                const isDrafted = row?.drafted

                return (
                    <div className="flex text-lg gap-2 space-x-1 rtl:space-x-reverse">
                        <Tooltip
                            content="View"
                            placement="top"
                            arrow
                            animation="shift-away"
                        >
                            <SPKBTNThemedView onClick={() => handleView(row)} />
                             
                        </Tooltip>
                        <Tooltip
                            content="Edit"
                            placement="top"
                            arrow
                            animation="shift-away"
                        >
                            <SPKBTNThemedEdit onClick={() => handleEdit(row)} />
                             
                        </Tooltip>
                        {/* <Tooltip
                        content="Delete"
                        placement="top"
                        arrow
                        animation="shift-away"
                        theme="danger"
                    >
                        <button
                            className="action-btn"
                            type="button"
                            onClick={() => handleDeleteCaseSheet(row)}
                        >
                            <Icons icon="heroicons:trash" />
                        </button>
                    </Tooltip> */}
                        <Tooltip
                            content="Drop Down"
                            placement="top"
                            arrow
                            animation="shift-away"
                            theme="danger"
                        >
                           <SPKBTNThemedDelete onClick={() => handleDeletePriscription(row?._id)} />
                            
                        </Tooltip>
                    </div>
                )

            },
            width: "12rem", // Adjusted width
        },
    ];



    return (
        <div className="md:container min-h-[50vh] border dark:border-darkSecondary rounded-md border-lightBorderColor md:mx-auto px-0 md:px-8 pb-5  dark:bg-darkAccent rounded-b-3xl bg-contentBg" >
            
            <div className='md:container md:mx-auto  py-2 flex justify-between items-center h-10 m-5   dark:bg-darkAccent bg-contentBg'>
                <h1 className='text-xl'>Prescription List</h1>
            </div>
            <div className='flex   flex-col bor der-[1px] dark:border-darkSecondary border-lightBorderColor  rounded-lg md:mx-auto px-0  h-full'>
                <div className='overflow-x-auto bo rder '>
                    <SpkDataTable subHeader={true} isDark={isDark} columns={columns} subHeaderComponent={subHeaderComponent} onChangePage={loadPatientPriscriptionforDataTable} />
                </div>

            </div>

        </div >
    );
};

export default NestedTable;
