import React, { useEffect, useState, Fragment, useCallback } from 'react'
import { FaSearch } from "react-icons/fa";
import useDarkmode from '../../../Hooks/useDarkMode';
import { useSelector } from 'react-redux';
import { Dialog, Transition } from "@headlessui/react";
import rolesAndPermissionService from '../../../services/rolesAndPermissionService/rolesAndPermission.Service';
import Icons from '../../ui/Icon';
import Button from '../../ui/Button';
import toast from 'react-hot-toast';
import Tooltip from '../../ui/Tooltip';
import Swal from "sweetalert2";
import debounceFunction from '../../../helper/Debounce';
import { data } from 'autoprefixer';
import { useNavigate } from 'react-router-dom';
import loadingImg from "../../../assets/images/logo/Kosmo-Clinic-Logo.png"
import { FaPlus } from "react-icons/fa";
import GloabalLoading from '../../../common/globalLoader/GloabalLoading';
import DataTable from "react-data-table-component";
import { DocumentForward } from 'iconsax-react';
import { Trash } from 'iconsax-react';
import { Edit } from 'iconsax-react';




function RolesAndPerMission({ noFade }) {
    const navigate = useNavigate()
    const [isDark, setDarkMode] = useDarkmode();
    const [pageLoading, setPageLoading] = useState(false)
    const [loading, setLoading] = useState(false);
    const [rolesAndPermissionList, setRolesAndPermissionList] = useState([])
    const [refresh, setRefresh] = useState(0);
    const [isViewed, setIsViewed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [rolesId, setRolesId] = useState(null)
    const [paginationData, setPaginationData] = useState();
    const [totalRows, setTotalRows] = useState();
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [pending, setPending] = useState(true);
    const [keyWord, setkeyWord] = useState("")
    const [formData, setFormData] = useState({
        name: ""
    })
    const [formDataErr, setFormDataErr] = useState({
        name: ""
    })
    const { name } = formData
    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)
    // console.log("currentUser", currentUser);

    const closeModal = () => {
        setShowModal(false);
        setLoading(false)
        setFormData((prev) => ({
            ...prev,
            name: "",
        }))
        setFormDataErr((prev) => ({
            ...prev,
            name: "",
        }))
    };

    const openModal = () => {
        setShowModal(!showModal);

    };
    const returnNull = () => {
        return null;
    };

    useEffect(() => {
        // setPageLoading(true)
        setPending(true)
        getRolesAndPermissionList()
    }, [refresh])

    async function getRolesAndPermissionList() {
        try {
            const data = {
                keyword: keyWord
            }
            const response = await rolesAndPermissionService.getRolesAndPermissionList(data)
            // console.log("response",response);
            // setRolesAndPermissionList(response?.listOfRoles)
            setPaginationData(response?.listOfRoles)
            // setPageLoading(false)
            setPending(false)
        } catch (error) {
            // setPageLoading(false)
            setPending(false)
            console.log("Error while getting roles and permission list", error);
        }
    }


    async function handleCreateRolesAndPermission() {
        openModal()
        setIsViewed(false)
        setFormData((prev) => ({
            ...prev,
            name: "",
        }))
        setRolesId(null)

    }

    function handleChange(e) {
        const { name, value } = e.target
        if (name == "name") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    name: "Roles Name is required"
                }))
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    name: ""
                }))
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }

    const validation = () => {
        if (!name) {
            setFormDataErr((prev) => ({
                ...prev,
                name: "Roles Name is required"
            }))
        } else {
            setFormDataErr((prev) => ({
                ...prev,
                name: ""
            }))

        }
    }

    async function handleSubmitRolesAndPermission(e) {
        e.preventDefault();
        validation()
        setLoading(true)
        const data = formData
        if (rolesId) {
            try {
                const response = await rolesAndPermissionService.updateRolesAndPermissionName({ ...data, roleId: rolesId })
                console.log("response", response);
                closeModal()
                setLoading(false)
                toast.success(response?.data?.message)
                setRolesId(null)
                setFormData((prev) => ({
                    ...prev,
                    name: ""
                }))
                setRefresh((prev) => prev + 1)
                setRolesId(null)
            } catch (error) {
                setLoading(false)
                console.log("Error while Creating Roles And Permission", error);

            }
        } else {

            try {
                const response = await rolesAndPermissionService.createRolesAndPermission(data)
                // console.log("response",response);
                closeModal()
                setLoading(false)
                toast.success(response?.data?.message)
                setRolesId(null)
                setFormData((prev) => ({
                    ...prev,
                    name: ""
                }))
                setRefresh((prev) => prev + 1)
            } catch (error) {
                setLoading(false)
                console.log("Error while Creating Roles And Permission", error);

            }

        }


    }

    async function handleEdit(row) {
        console.log("row",row);
        
        setRolesId(row?._id)
        openModal()
        // const updatedeRole = rolesAndPermissionList.find((item) => row?._id == id)
        // console.log(updatedeRole);

        setFormData((prev) => ({
            ...prev,
            name: row?.name
        }))

        setFormDataErr((prev) => ({
            ...prev,
            name: ""
        }))
    }

    async function handleDelete(row) {
        const id = row._id;
        setRolesId(id)
        // const updatedeRole = rolesAndPermissionList.find((item) => item?._id == id)
        // console.log(updatedeRole);
        Swal.fire({
            title: `Are you Sure Want to Delete ${row.name}`,
            icon: "error",
            showCloseButton: true,
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {

                deleteRolesAndPermission(id)
            }
        });

    }

    async function deleteRolesAndPermission(id) {
        try {
            const response = await rolesAndPermissionService.deleteRolesAndPermissionName(id)
            console.log("response", response);

            // toast.success(response?.data?.message);
            setRefresh((prev) => prev + 1)
        } catch (error) {
            console.log("Error while deleting Roles And Permission", error);

        }
    }
    const handleFilter = (e) => {

        let newkeyWord = e.target.value;
        setkeyWord(newkeyWord);
        debounceSearch(newkeyWord)

    };


    const debounceSearch = useCallback(

        debounceFunction(
            async (nextValue) => {

                try {
                    setPending(true)
                    const response = await rolesAndPermissionService.getRolesAndPermissionList({ keyword: nextValue })
                    // setRolesAndPermissionList(response?.listOfRoles)
                    setPaginationData(response?.listOfRoles)
                    setPending(false)
                } catch (error) {
                    setPending(false)
                    console.log("error while getting Roles and Permission list", error);
                }

            },
            1000
        ),
        []
    );

    function handleAssign(id, name) {
        setRefresh((prev) => prev + 1);
        navigate("/rolesAndPerMissionAssignPage", { state: { id, name } });
    }




    const subHeaderComponent = (
        <div className="w-full grid xl:grid-cols-2 md:grid-cols-1 md:text-start ml-[-1.2rem] ">
            <div className='flex justify-start'>
                <div className={`relative z-10`}>
                    <span className='absolute top-0 bottom-0 left-3 flex items-center'>
                        <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"} text-base`} style={{ color: "#80808f" }} />
                    </span>
                    <input
                        type="text"
                        className={`pl-9 py-2 sm:w-96 outline-none dark:bg-darkIconAndSearchBg bg-light rounded-lg`}
                        placeholder='Search...'
                        onChange={handleFilter}
                    />
                </div>
            </div>
        </div>
    );

    const customStyles = {
        header: {
            style: {
                minHeight: "56px",
                color: isDark ? "rgb(203 213 225 / var(--tw-text-opacity));" : "green",
                fontWeight: "bold",
                backgroundColor: isDark ? "#007475" : "#C9FEFF",
            },
        },
        subHeader: {
            style: {
                backgroundColor: isDark
                    ? ""
                    : "white",
                padding: "1.25rem",
                fontSize: "1.125rem",
                fontWeight: "500",
                lineHeight: "24px",
                color: isDark
                    ? "rgb(203 213 225 / var(--tw-text-opacity))"
                    : "rgb(15 23 42 / var(--tw-text-opacity))",
            },
        },
        headRow: {
            style: {
                color: isDark
                    ? "rgb(203 213 225 / var(--tw-text-opacity))"
                    : "rgb(71 85 105 / var(--tw-text-opacity))",
                fontSize: "0.75rem",
                fontWeight: "bold",
                backgroundColor: isDark ? "#007475" : "#C9FEFF",
                // textTransform: "uppercase",
                textAlign: "center",
            },
        },
        headCells: {
            style: {
                display: "flex", // Flex layout for perfect centering
                justifyContent: "flex-start", // Horizontally center
                alignItems: "center", // Vertically center
                backgroundColor: isDark ? "rgb(0 116 117 / var(--tw-bg-opacity))" : "",
                color: isDark
                    ? "rgb(203 213 225 / var(--tw-text-opacity))"
                    : "rgb(71 85 105 / var(--tw-text-opacity))",
                fontWeight: "bold",
                fontSize: "0.75rem",
                textAlign: "center",
                paddingTop: "20px",
                paddingLeft: "20px",
                paddingBottom: "15px",
            },
        },
        cells: {
            style: {
                display: "flex", // Flex layout for perfect centering
                justifyContent: "flex-start", // Horizontally center
                alignItems: "center", // Vertically center
                backgroundColor: isDark ? "rgb(10 41 43 / var(--tw-bg-opacity))" : "",
                color: isDark
                    ? "rgb(203 213 225 / var(--tw-text-opacity))"
                    : "rgb(71 85 105 / var(--tw-text-opacity))",
                fontSize: "0.875rem",
                padding: "1.25rem",
                // width: "5rem",
                textAlign: "center",
                borderBottom: "1px dashed", // Dashed border for rows
                borderBottomColor: isDark ? "rgb(203 213 225 / var(--tw-text-opacity))" : "rgb(189 189 189  / var(--tw-text-opacity))",
            },
        },
        selectableRows: {
            style: {
                backgroundColor: "red",
                color: "red",
            },
        },
        pagination: {
            style: {
                backgroundColor: isDark ? "rgb(10 41 43 / var(--tw-bg-opacity))" : "white",
                color: isDark
                    ? "rgb(255, 255, 255 / var(--tw-text-opacity))"
                    : "rgb(71 85 105 / var(--tw-text-opacity))",
                fontSize: "15px",
            },
        },
    };

    const noDataStyle = {
        backgroundColor: isDark ? "rgb(11 55 51)" : "",
        color: isDark
            ? "rgb(203 213 225 / var(--tw-text-opacity))"
            : "rgb(15 23 42 / var(--tw-text-opacity))",
        fontSize: "1rem"
    };


    const columns = [
        {
            name: "Role Id",
            selector: (row) => row.id,
            sortable: true,
        },

        {
            name: "Name",
            selector: (row) => row.name,
        },


        {
            name: "Status",
            sortable: true,


            selector: (row) => {
                return (
                    <span className=" w-full">
                        <span className="inline-flex items-start px-2 py-1 text-xs font-bold text-blue-800 bg-blue-100 rounded-full">
                            {row?.isActive === 1 ? "Active" : "InActive"}
                        </span>
                    </span>
                );
            },
        },

        {
            name: "Action",
            selector: (row) => {
                return (
                    <div className="flex text-lg gap-2 space-x-1 rtl:space-x-reverse ">
                        <Tooltip
                            content="Assign Permission"
                            placement="top"
                            arrow
                            animation="shift-away"
                        >
                            <button
                                className="action-btn"
                                type="button"
                                onClick={() => handleAssign(row?._id, row?.name)}
                            >
                                {/* <Icons icon="heroicons:clipboard-document-check" /> */}
                                <DocumentForward size="22" className='hover:text-lightBtntext text-lightIconclr border-0 border-gray-500 shadow-sm  border-opacity-35 p-1 w-7 h-7 rounded-md bg-gray-100 dark:bg-darkAccent'/>
                            </button>
                        </Tooltip>
                        <Tooltip
                            content="Edit"
                            placement="top"
                            arrow
                            animation="shift-away"
                        >
                            <button
                                className="action-btn"
                                type="button"
                                onClick={() => handleEdit(row)}
                            >
                                {/* <Icons icon="heroicons:pencil-square" /> */}
                                <Edit size="22"  className='hover:text-lightBtntext text-lightIconclr border-0 border-gray-500 shadow-sm  border-opacity-35 p-1 w-7 h-7 rounded-md bg-gray-100 dark:bg-darkAccent'/>
                            </button>
                        </Tooltip>
                        <Tooltip
                            content="Delete"
                            placement="top"
                            arrow
                            animation="shift-away"
                            theme="danger"
                        >
                            <button
                                className="action-btn"
                                type="button"
                                onClick={() => handleDelete(row)}
                            >
                                {/* <Icons icon="heroicons:trash" /> */}
                                <Trash size="22" className='hover:text-lightBtntext text-lightIconclr border-0 border-gray-500 shadow-sm  border-opacity-35 p-1 w-7 h-7 rounded-md bg-gray-100 dark:bg-darkAccent'/>
                            </button>
                        </Tooltip>
                    </div>
                );
            },
        },
    ];


    return (
        <>
            <div className='md:container md:mx-auto px-8 py-2 flex flex-col sm:flex-row justify-start items-start sm:justify-between sm:items-center h-24 dark:bg-darkAccent bg-contentBg'>
                <div>
                    <h1 className='text-xl'>Roles and Permission</h1>
                </div>
                <div className='py-3 sm:py-0'>
                    <button
                        onClick={handleCreateRolesAndPermission}
                        type="button"
                        className="btn btn-sm gap-1 flex items-center px-3 py-1.5 bg-lightBgBtn text-lightBtntext hover:bg-lightBtntext hover:text-white dark:bg-darkBtn dark:text-white rounded-md"
                    >
                        <FaPlus className="text-lg mr-1" />
                        Create Role
                    </button>
                </div>
            </div>
            <div>
                {
                    pageLoading ? <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            height: "80vh",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <span className=" mt-1 font-medium  text-sm flex flex-col py-5">
                            {" "}
                            <GloabalLoading />
                            {/* <img src={loadingImg} alt="" className="w-24 py-5" />
                            <p className="text-bold text-xl">Loading ...</p> */}
                        </span>
                    </div>
                        :
                        <div className='md:container md:mx-auto px-0 md:px-8 pb-5 dark:bg-darkAccent rounded-b-3xl bg-contentBg'>
                            <div className='flex flex-col border-[1px] dark:border-darkSecondary border-lightBorderColor rounded-lg md:mx-auto px-0 md:px-8 h-full'>
                                {/* <div className='flex justify-between items-center mt-5 mb-5  h-24'>
                                    <div className={`relative z-10`}>
                                        <span className='absolute top-0 bottom-0 left-3 flex items-center'>
                                            <FaSearch className={`${isDark ? "bg-darkIconAndSearchBg" : "bg-light"}`} style={{ color: "#80808f" }} />
                                        </span>
                                        <input
                                            type="text"
                                            className={`pl-9 py-2 sm:w-96 outline-none dark:bg-darkIconAndSearchBg bg-light rounded-lg`}
                                            placeholder='Search...'
                                            onChange={handleFilter}
                                        />
                                    </div>
                                </div> */}
                                {/* <div className='overflow-x-auto'>
                                    <table className="min-w-full ">
                                        <thead className="bg-[#C9FEFF] dark:bg-darkBtn dark:text-white sticky top-0">
                                            <tr className="border-b border-dashed border-lighttableBorderColor">
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-semibold  tracking-wider">
                                                    Role Id
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-semibold  tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-semibold  tracking-wider">
                                                    Status
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start text-xs font-semibold  tracking-wider">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white dark:bg-darkAccent">
                                            {rolesAndPermissionList && rolesAndPermissionList.length > 0 ? (
                                                rolesAndPermissionList.map((item, ind) => (
                                                    <tr key={ind} className="border-b border-dashed border-lighttableBorderColor">
                                                        <th scope="row" className="px-6 py-4 whitespace-nowrap text-start text-base font-medium text-tableTextColor dark:text-white">
                                                            {item.id}
                                                        </th>
                                                        <td className="px-6 py-4 whitespace-nowrap text-start text-base text-tableTextColor dark:text-white">
                                                            {item.name}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-start text-base">
                                                            <span className="inline-flex items-start px-2 py-1 text-xs font-bold text-blue-800 bg-blue-100 rounded-full">
                                                                {item?.isActive === 1 ? "Active" : "InActive"}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-center text-base text-tableTextColor">
                                                            <div className="flex justify-start text-lg space-x-5 rtl:space-x-reverse">
                                                                <Tooltip
                                                                    content="Assign Permission"
                                                                    placement="top"
                                                                    arrow
                                                                    animation="shift-away"
                                                                >
                                                                    <button
                                                                        className="action-btn"
                                                                        type="button"
                                                                        onClick={() => handleAssign(item?._id, item?.name)}
                                                                    >
                                                                        <Icons icon="heroicons:clipboard-document-check" />
                                                                    </button>
                                                                </Tooltip>
                                                                <Tooltip
                                                                    content="Edit"
                                                                    placement="top"
                                                                    arrow
                                                                    animation="shift-away"
                                                                >
                                                                    <button
                                                                        className="action-btn"
                                                                        type="button"
                                                                        onClick={() => handleEdit(item?._id)}
                                                                    >
                                                                        <Icons icon="heroicons:pencil-square" />
                                                                    </button>
                                                                </Tooltip>
                                                                <Tooltip
                                                                    content="Delete"
                                                                    placement="top"
                                                                    arrow
                                                                    animation="shift-away"
                                                                    theme="danger"
                                                                >
                                                                    <button
                                                                        className="action-btn"
                                                                        type="button"
                                                                        onClick={() => handleDelete(item?._id)}
                                                                    >
                                                                        <Icons icon="heroicons:trash" />
                                                                    </button>
                                                                </Tooltip>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="4" className="px-6 py-4 text-center text-lg font-medium text-lightModalHeaderColor">
                                                        NO DATA FOUND
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div> */}

                                {/*  New Table Component react data table */}

                                <DataTable
                                    columns={columns}
                                    data={paginationData}
                                    highlightOnHover
                                    customStyles={customStyles}
                                    fixedHeader
                                    pagination
                                    paginationServer
                                    paginationTotalRows={totalRows}
                                    // onChangePage={handlePageChange}
                                    // onChangeRowsPerPage={handlePerRowChange}
                                    // selectableRows
                                    pointerOnHover
                                    progressPending={pending}
                                    subHeader
                                    subHeaderComponent={subHeaderComponent}
                                    // paginationComponentOptions={paginationOptions}
                                    noDataComponent={<div style={{ display: "flex", justifyContent: "center", padding: "2rem", flexDirection: "row", gap: "1rem", background: isDark ? "rgb(11 55 51)" : "", width: "100%" }}>

                                        <p className="text-center text-bold text-2xl" style={noDataStyle}>
                                            There is no record to display
                                        </p>
                                    </div>
                                    }
                                    progressComponent={
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem", flexDirection: "row", gap: "1rem", background: isDark ? "rgb(11 55 51)" : "", width: "100%", height: "22vh" }}>
                                            {/* <img src={loadingImg} alt="No Data Image" style={{ height: "3rem", width: "3rem" }} />
                                                <p className="text-center text-bold text-2xl" style={noDataStyle}>
                                                    Processing...
                                                 </p> */}
                                            <GloabalLoading />
                                        </div>
                                    }
                                />
                            </div>
                            <Transition appear show={showModal} as={Fragment}>
                                <Dialog
                                    as="div"
                                    className="relative z-[99999]"
                                    onClose={closeModal}
                                >
                                    {(
                                        <Transition.Child
                                            as={Fragment}
                                            enter={noFade ? "" : "duration-300 ease-out"}
                                            enterFrom={noFade ? "" : "opacity-0"}
                                            enterTo={noFade ? "" : "opacity-100"}
                                            leave={noFade ? "" : "duration-200 ease-in"}
                                            leaveFrom={noFade ? "" : "opacity-100"}
                                            leaveTo={noFade ? "" : "opacity-0"}
                                        >
                                            <div className="fixed inset-0 bg-slate-900/50 backdrop-filter backdrop-blur-sm" />
                                        </Transition.Child>
                                    )}
                                    <div className="fixed inset-0 overflow-y-auto">
                                        <div
                                            className={`flex min-h-full justify-center text-center p-6 items-center "
                                  }`}
                                        >
                                            <Transition.Child
                                                as={Fragment}
                                                enter={noFade ? "" : "duration-300  ease-out"}
                                                enterFrom={noFade ? "" : "opacity-0 scale-95"}
                                                enterTo={noFade ? "" : "opacity-100 scale-100"}
                                                leave={noFade ? "" : "duration-200 ease-in"}
                                                leaveFrom={noFade ? "" : "opacity-100 scale-100"}
                                                leaveTo={noFade ? "" : "opacity-0 scale-95"}
                                            >
                                                <Dialog.Panel
                                                    className={`w-full transform overflow-hidden rounded-md
                                     bg-white dark:bg-darkAccent dark:bg-slate-800 text-left align-middle shadow-xl transition-alll max-w-lg`}
                                                >
                                                    <div
                                                        className={`relative overflow-hidden py-4 px-5  border-slate-100 text-lightModalHeaderColor flex justify-between bg-white border-b border-lightBorderColor dark:bg-darkSecondary dark:border-b dark:border-darkSecondary  `}
                                                    >
                                                        <h2 className="capitalize leading-6 tracking-wider  text-xl font-semibold text-black dark:text-darkTitleColor" style={{ fontFamily: "Inter_Regular" }}>
                                                            Create Roles And Permission
                                                        </h2>
                                                        <button onClick={closeModal} className=" text-lightmodalCrosscolor hover:text-lightmodalbtnText text-[22px]">
                                                            <Icons icon="heroicons-outline:x" />
                                                        </button>
                                                    </div>
                                                    <div
                                                        className={`px-6 py-8 overflow-y-auto max-h-[400px]`}
                                                    >
                                                        <h4 className="font-medium text-lg  px-4 py-2 text-lightModalHeaderColor">
                                                            Roles And Permission
                                                        </h4>
                                                        <div className="grid grid-cols-1 gap-5 overflow-hidden p-4">
                                                            <div className=" ">
                                                                <label>
                                                                    <p className={`mb-1 ${isDark ? "text-white" : "text-black"}`}>
                                                                        Role Name <span className="text-red-500">*</span>
                                                                    </p>
                                                                    <input
                                                                        name="name"
                                                                        type="text"
                                                                        value={name}
                                                                        placeholder="Enter Role Name"
                                                                        onChange={handleChange}
                                                                        readOnly={isViewed}
                                                                        className="form-control outline-none w-[100%] rounded-md px-4 py-2 border border-lightborderInputColor  dark:border-darkSecondary text-lightinputTextColor dark:placeholder-darkPlaceholder bg-lightBgInputColor dark:bg-darkIconAndSearchBg dark:text-white"
                                                                    />
                                                                    {<p className="text-red-600  text-xs"> {formDataErr.name}</p>}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {(
                                                        <div className="px-4 py-3 flex justify-end space-x-3 border-t border-slate-100 dark:border-darkSecondary">
                                                            <div className="flex gap-2">
                                                                <Button
                                                                    text="Cancel"
                                                                    className="bg-lightmodalBgBtn text-lightmodalbtnText hover:bg-lightmodalBgBtnHover hover:text-white  px-4 py-2 rounded"
                                                                    onClick={() => closeModal()}
                                                                />

                                                                {
                                                                    isViewed && (
                                                                        <Button
                                                                            text="Edit"
                                                                            className={` ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} px-4 py-2 rounded`}
                                                                            onClick={() => setIsViewed(false)}
                                                                            isLoading={loading}
                                                                        />

                                                                    )
                                                                }
                                                                {
                                                                    !isViewed && (
                                                                        <Button
                                                                            text={`${rolesId ? "Update" : "Save"}`}
                                                                            className={` ${isDark ? "bg-darkBtn text-white hover:bg-darkBtnHover" : "bg-lightBgBtn hover:bg-lightHoverBgBtn text-lightBtntext hover:text-white"} px-4 py-2 rounded`}
                                                                            onClick={handleSubmitRolesAndPermission}
                                                                            isLoading={loading}
                                                                        />
                                                                    )
                                                                }
                                                            </div>
                                                        </div>
                                                    )}
                                                </Dialog.Panel>
                                            </Transition.Child>
                                        </div>
                                    </div>
                                </Dialog>
                            </Transition>
                        </div>
                }
            </div>
        </>
    )
}

export default RolesAndPerMission