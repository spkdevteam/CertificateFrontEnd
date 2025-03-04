import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import GloabalLoading from "../globalLoader/GloabalLoading";
import useDarkmode from "../../Hooks/useDarkMode";
import useColourThemeHook from "../../Hooks/useColourThemeHook";


const SpkDataTable = ({ isDark, onChangePage = (page, rowPerPage, keyWord) => { }, showSummary = false, columns = [], subHeaderComponent, pagination = true, updateTable = 0, subHeader = false }) => {
    const {theme} =  useColourThemeHook()
    // Component: SpkDataTable
    // Description: A reusable data grid component built with react-data-table-component, featuring dynamic data fetching, pagination, custom styling, dark mode support, and expandable rows.
    // Props:
    // - onChangePage: Callback function to handle data fetching for pagination. Expects { page, keyword, rowPerPage } and returns { data, totalDataCount }.
    // - columns: Array of column definitions directly passed to the DataTable.
    // - subHeaderComponent: Optional custom subheader component for the DataTable.



    const [expanded, setExpanded] = useState(false);
    const [dataToGrid, setDataToGrid] = useState([]);
    const [pending, setPending] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [rowPerPage, setRowPerPage] = useState(10)
    const [inputArray, setInputArray] = useState([])
    const [totalRow, setTotalRows] = useState(0)
    const [keyWord, setKeyWord] = useState('')
    const [summary, setSummary] = useState({})
    // const [isDark] = useDarkmode()

    const handlePageChange = async (page) => {
        try {
            setPending(true)
            // console.log(onChangePage,'onChangePage')

            const response = await onChangePage({ page: page ? page - 1 : page, keyword: keyWord, rowPerPage: rowPerPage }) //isAdmin: (currentUser?.roleId == 2 || currentUser?.roleId == 1) ? true : false, branchId: (currentUser?.roleId == 2 || currentUser?.roleId == 1) ? null : currentUser?.branch 
            const { data, totalDataCount } = response;

            setInputArray(data);
            setTotalRows(totalDataCount);
            setCurrentPage(page)

            setPending(false)
        } catch (error) {
            setPending(false)
            console.log("Error while getting Chair", error);
        }
    };

    useEffect(() => {
        setSummary({ ...getTotal(inputArray), _id: 1 })
    }, [inputArray])

    useEffect(()=>{
        console.log(updateTable,'updateTableupdateTableupdateTableupdateTableupdateTable')
        handlePageChange(handlePageChange(1))
        handlePageChange(1)
    },[updateTable])


    const getTotal = (data) => {
        return data?.reduce((acc, obj) => {
            Object.keys(obj).forEach((key) => {

                acc[key] = (acc[key] || 0) + (typeof obj[key] === "number" ? obj[key] : 0);
            });
            return acc;
        }, {});
    };


    const goToNextPage = async (page) => {
        try {
            setPending(true);
            const result = await onChangePage({ page: page, rowPerPage, keyword: keyWord }) || { data: [], totalDataCount: 0 };
            const { data, totalDataCount } = result;
            setCurrentPage(adjustedPage);
            setInputArray(data);
            setTotalRows(totalDataCount);
        } catch (error) {
            console.error("Error fetching page data:", error);
        } finally {
            setPending(false);
        }
    };

    const handleRowsPerPageChange = async (newRowsPerPage) => {
        setRowPerPage(newRowsPerPage);
        setCurrentPage(0);
    };

    const handlepagination = async () => {
        try {
            setPending(true);

            const result = await onChangePage({ page: currentPage, rowPerPage: rowPerPage, keyword: keyWord })
            // console.log("Fetched Data",result)

            const { data, totalDataCount } = result;
            let index = -1
            setInputArray(data?.map((currData) => ({ ...currData, index: ++index })));
            setTotalRows(totalDataCount);
        } catch (error) {
            console.error("Error fetching rows per page data:", error);
        } finally {
            setPending(false);
        }
    };
    useEffect(() => {
        handlepagination()
    }, [updateTable,rowPerPage])


    const SummatyDataTableStyle = {
        cells: {
            style: {
                // minHeight: "56px",
                color: "bl",
                fontWeight: "bold",
                backgroundColor: isDark ? "#007475" : "#C9FEFF",
            },
        },



    };

    useEffect(() => {
        console.log(onChangePage, 'onChangePage')
    }, [])








    // Custom styles for the DataTable
    const customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
            },
        },
        header: {
            style: {
                color: isDark ? "rgb(203, 213, 225)" : "green",
                
                fontWeight: "bold",
                backgroundColor: isDark ? "#007475" : "#C9FEFF",
            },
        },
        cells: {
            style: {
                backgroundColor: " transparent ",
                padding: "1rem",
                // color:"white"
                 color: isDark ? "white" : "inherit", // White in dark mode, default in light mode
            },
        },
        subHeader: {
            style: {
                backgroundColor: "transparent",
                padding: "0rem",
                fontSize: "1.125rem",
                fontWeight: "500",
                lineHeight: "24px",
                color: isDark ? "rgb(203, 213, 225)" : "rgb(15, 23, 42)",

            },
        },
        headRow: {
            style: {
                color: `${theme.textColour}`,
                backgroundColor: `${theme.bgcolour}`,
            },
        },
        headCells: {
            style: {
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                width: "100%",
                backgroundColor: isDark ? "rgb(0, 116, 117)" : "",
                color: isDark ? "rgb(203, 213, 225)" : "rgb(71, 85, 105)",
                fontWeight: "700",
                fontSize: "16px",
                textAlign: "center",
                paddingTop: "20px",
                paddingLeft: "15px",
                paddingBottom: "15px",
            },
        },
        rows: {
            style: {
                backgroundColor: "transparent",
            },
        },
        selectableRows: {
            style: {
                backgroundColor: "red",
                color: "white", // Ensure selected rows have visible text
            },
        },
        pagination: {
            style: {
                backgroundColor: "transparent",
                color: isDark ? "rgb(255, 255, 255)" : "rgb(71, 85, 105)",
                fontSize: "15px",
            },
        },
    };
    

    const noDataStyle = {
        backgroundColor: "transparent",
        color: isDark
            ? "rgb(203 213 225 / var(--tw-text-opacity))"
            : "rgb(15 23 42 / var(--tw-text-opacity))",
        fontSize: "1rem"
    };





    // Render the DataTable component
    return (
        <div className="w-full h-full        border-gray-200 border-opacity-20  min-h-full   justify-start   items-start">

            <DataTable
                columns={columns}
                data={inputArray}
                highlightOnHover
                customStyles={customStyles}
                fixedHeader
                pagination={pagination}
                paginationServer
                paginationTotalRows={totalRow}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handleRowsPerPageChange}
                // selectableRows
                pointerOnHover
                progressPending={pending}
                subHeader={subHeader}
                subHeaderComponent={subHeaderComponent}
                // paginationComponentOptions={paginationOptions}
                noDataComponent={<div style={{ display: "flex", justifyContent: "center", padding: "2rem", flexDirection: "row", gap: "1rem", background: "rgb(11 55 51 0)", width: "100%" }}>

                    <p className="text-center text-bold text-2xl text-inherit" style={noDataStyle}>
                        Empty list
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
            {
                showSummary && totalRow ?
                    <DataTable
                        noTableHead
                        columns={columns?.map((val) => {
                            if (val.name?.toLowerCase() === "actions") {
                                return { ...val, selector: () => <></> }; // Return a new object
                            }
                            return val;
                        })}
                        data={[summary]}
                        customStyles={SummatyDataTableStyle}

                        pagination={false}
                        paginationServer
                        subHeader={false}


                    /> : <></>
            }




        </div>
    );
};

export default SpkDataTable;
