import DataTable from "react-data-table-component"



const TableDataTable = ({ paginationData, columns, customStyles, totalRows, }) => {


    return (
        <div className="w-full h-full bg-yellow-900">
            <DataTable
                columns={columns}
                data={paginationData}
                highlightOnHover
                customStyles={customStyles}
                fixedHeader
                pagination
                paginationServer
                paginationTotalRows={totalRows}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerRowChange}

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
    )
}


export default TableDataTable