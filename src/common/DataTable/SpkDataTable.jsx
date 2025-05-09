import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import GloabalLoading from "../globalLoader/GloabalLoading";
import useDarkmode from "../../Hooks/useDarkMode";


const SpkDataTable = ({ isDark, onChangePage = (page, rowPerPage, keyWord) => { }, showSummary = false, columns = [], subHeaderComponent, pagination = true, updateTable = 0, subHeader = false }) => {

    // Component: SpkDataTable
    // Description: A reusable data grid component built with react-data-table-component, featuring dynamic data fetching, pagination, custom styling, dark mode support, and expandable rows.
    // Props:
    // - onChangePage: Callback function to handle data fetching for pagination. Expects { page, keyword, rowPerPage } and returns { data, totalDataCount }.
    // - columns: Array of column definitions directly passed to the DataTable.
    // - subHeaderComponent: Optional custom subheader component for the DataTable.



    const [pending, setPending] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [rowPerPage, setRowPerPage] = useState(10)
    const [inputArray, setInputArray] = useState([])
    const [totalRow, setTotalRows] = useState(0)

    const [summary, setSummary] = useState({})
    // const [isDark] = useDarkmode()

    const handlePageChange = async (page) => {
        try {

            setCurrentPage(page)


        } catch (error) {

            console.log("Error while getting Chair", error);
        }
    };

    const fetchPaginationData = async () => {
        try {
            setPending(true)
            const response = await onChangePage({ page: currentPage, rowPerPage: rowPerPage }) //isAdmin: (currentUser?.roleId == 2 || currentUser?.roleId == 1) ? true : false, branchId: (currentUser?.roleId == 2 || currentUser?.roleId == 1) ? null : currentUser?.branch 

            const { data, totalDataCount } = response;

            setInputArray(data);
            setTotalRows(totalDataCount);

            setPending(false)
        } catch (error) {
            setPending(false)
            console.log("Error while getting Chair", error);
        }
    };

    useEffect(() => {
        setSummary({ ...getTotal(inputArray), _id: 1 })
    }, [inputArray])

    useEffect(() => {
        fetchPaginationData()
    }, [currentPage, rowPerPage, updateTable])





    const getTotal = (data) => {
        return data?.reduce((acc, obj) => {
            Object.keys(obj).forEach((key) => {

                acc[key] = (acc[key] || 0) + (typeof obj[key] === "number" ? obj[key] : 0);
            });
            return acc;
        }, {});
    };



    const handleRowsPerPageChange = async (newRowsPerPage) => {
        setRowPerPage(newRowsPerPage);
        // setCurrentPage(0);
    };

    const handlepagination = async () => {
        try {
            setPending(true);
            const result = await onChangePage({ page: currentPage, rowPerPage: rowPerPage, keyword: keyWord })
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










    // Custom styles for the DataTable
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
                // padding: "1.25rem",
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
                textAlign: "start",
                paddingTop: "20px",
                //   paddingLeft: "20px",
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
                // padding: "1.25rem",
                // width: "5rem",
                // textAlign: "center",
                // borderBottom: "1px dashed", // Dashed border for rows
                // borderBottomColor: isDark ? "rgb(203 213 225 / var(--tw-text-opacity))" : "rgb(189 189 189  / var(--tw-text-opacity))",
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
                // expandableRows
                progressPending={pending}
                subHeader={subHeader}
                subHeaderComponent={subHeaderComponent}
                // paginationComponentOptions={paginationOptions}
                noDataComponent={<div style={{ display: "flex", justifyContent: "center", padding: "2rem", flexDirection: "row", gap: "1rem", background: "rgb(11 55 51 0)", width: "100%" }}>

                    <p className="text-center text-bold text-2xl" style={noDataStyle}>
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
