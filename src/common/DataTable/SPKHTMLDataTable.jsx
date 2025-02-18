import { useEffect, useState } from "react";
import GloabalLoading from "../globalLoader/GloabalLoading";

const SPKHTMLDataTable = ({
    isDark,
    onChangePage = (page, rowPerPage, keyWord) => { },
    showSummary = false,
    columns = [],
    subHeaderComponent,
    pagination = true,
    updateTable = 0,
    subHeader = false
}) => {

    const [dataToGrid, setDataToGrid] = useState([]);
    const [pending, setPending] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [rowPerPage, setRowPerPage] = useState(10);
    const [totalRows, setTotalRows] = useState(0);
    const [keyWord, setKeyWord] = useState('');
    const [summary, setSummary] = useState([]);

    const handlePageChange = async (page) => {
        try {
            setPending(true);
            const response = await onChangePage({ page, keyword: keyWord, rowPerPage });
            const { data, totalDataCount } = response;
            setDataToGrid(data);
            setTotalRows(totalDataCount);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setPending(false);
        }
    };

    useEffect(() => {
        handlePageChange(currentPage);
    }, [updateTable]);

    useEffect(() => {
        setSummary([getTotal(dataToGrid)]);
    }, [dataToGrid]);

    const getTotal = (data) => {
        return data?.reduce((acc, obj) => {
            Object.keys(obj).forEach((key) => {
                acc[key] = (acc[key] || 0) + (typeof obj[key] === "number" ? obj[key] : 0);
            });
            return acc;
        }, {});
    };

    return (
        <div className="w-full overflow-x-auto border border-gray-200  ">
            {subHeader && subHeaderComponent}

            {pending ? (
                <div className="flex justify-center items-center py-6">
                    <GloabalLoading />
                </div>
            ) : (
                <table className={`w-full text-sm border-collapse ${isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
                    <thead className={isDark ? "bg-gray-700 text-white" : "bg-gray-200"}>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index} className="p-3 text-right border">
                                    {col.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {dataToGrid?.length > 0 ? (
                            dataToGrid.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border">
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex} className="p-3 border text-right ">
                                            {col.selector ? col.selector(row) : row[col.name.toLowerCase()]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center p-4">
                                    No records available
                                </td>
                            </tr>
                        )}
                    </tbody>
                    {showSummary && (
                        <tfoot className={`border  ${isDark ? "bg-gray-700 text-white" : "bg-gray-200"}`}>

                            {summary?.map((row, rowIndex) => (
                                <tr key={rowIndex} className="border">
                                    {columns.map((col, colIndex) => (
                                        <td key={colIndex} className="p-3 border text-right">
                                            {col.selector ? col.selector(row) : row[col.name.toLowerCase()]}
                                        </td>
                                    ))}
                                </tr>
                            ))}

                        </tfoot>
                    )}
                </table>
            )}

            {pagination && (
                <div className="flex justify-between items-center p-4">
                    <button
                        disabled={currentPage === 0}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>Page {currentPage + 1}</span>
                    <button
                        disabled={(currentPage + 1) * rowPerPage >= totalRows}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default SPKHTMLDataTable;
