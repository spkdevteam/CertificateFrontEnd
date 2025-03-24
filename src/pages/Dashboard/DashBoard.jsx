import { useEffect, useMemo, useState } from "react";
import SpkDataTable from "../../common/DataTable/SpkDataTable";
import MenuBar from "../../components/DashBoard/MenuBar";
import useCertificatehook from "../../Hooks/useCertificateHooks";
import { Tooltip } from "@material-tailwind/react";

import SPKBTNThemedEdit from "../../common/Button/OutlineThemeButton/SPKBTNThemedEdit";
import SPKBTNThemedDelete from "../../common/Button/OutlineThemeButton/SPKBTNThemedDelete";
import HandleCreateCertificate from "../../components/DashBoard/HandleCreateCertificate";
import useColourThemeHook from "../../Hooks/useColourThemeHook";
import ColourThemeSelector from "../ThemePage/colourTheme";
import ExcelSheetIntegration from "./ExcelSheetIntegration";
import { useSelector } from "react-redux";


const DashBoard = () => {
    const { getCertificateLIst,updateDataTable,  deleteCertificateById } = useCertificatehook();
    const { theme } = useColourThemeHook();
    const [create, setCreate] = useState(0);
    const updateTable = useSelector((state)=>state.updateTable.updateStatus)

    

    const [selectedCertificate, setSelectedCertificate] = useState({
        _id: "",
        displayId: "",
        certificateNumber: "",
        goldFineness: 0,
        goldWeight: 0,
    });

    const handleEdit = (row) => {
         setSelectedCertificate(row);
    };

    const handleDelete =  (id, certificateNumber) => {
         deleteCertificateById({ id, certificateNumber });
        
    };

    const columns =useMemo(()=>
        [
            {
                name: "Certificate Number",
                selector: (row) => row?.certificateNumber,
                left: true,
                wrap: true,
            },
            {
                name: "Gold Fineness",
                selector: (row) => parseFloat(row?.goldFineness).toFixed(2),
                right: true,
                wrap: true,
            },
            {
                name: "Gold Weight",
                selector: (row) => parseFloat(row?.goldWeight)?.toFixed(2),
                right: true,
                wrap: true,
            },
            {
                name: "Actions",
                selector: (row) => (
                    <div className="flex justify-center items-center gap-2">
                        {/* <Tooltip content="Edit" placement="top" arrow animation="shift-away">
                            <>
                                <SPKBTNThemedEdit onClick={() => handleEdit(row)} width="w-10" />
                                <SPKBTNThemedDelete onClick={() => handleDelete(row?._id, row?.certificateNumber)} width="w-10" />
                            </>
                        </Tooltip> */}
                                            <Tooltip content="Edit" placement="top" arrow animation="shift-away">
                            <SPKBTNThemedEdit onClick={() => handleEdit(row)} width="w-10" />
                        </Tooltip>
                        <Tooltip content="Delete" placement="top" arrow animation="shift-away">
                            <SPKBTNThemedDelete onClick={() => handleDelete(row?._id, row?.certificateNumber)} width="w-10" />
                        </Tooltip>
    
                    </div>
                ),
                center: true,
            },
        ],
    
    [updateTable]) 

    return (
        <div className={`w-full h-full ${theme?.bgcolour} ${theme?.textColour} ${theme?.bordercolour} flex justify-center items-center  text-sm`}>
            <div className="lg:container gap-2 flex flex-col border border-inherit rounded-lg shadow-lg p-6 h-full bg-white bg-opacity-5 ">
                <div className="w-full flex-col gap-2 rounded-md shadow-lg flex items-center mb-4">
                    <MenuBar />
                    
                </div>

                <div className="w-full flex flex-col gap-6 md:flex-row p-4 border border-inherit">
                    {/* Certificate Creation Component */}
                    <div className="w-full md:w-1/2 rounded-md overflow-hidden text-inherit shadow-lg p-4">
                        <HandleCreateCertificate value={selectedCertificate} onUpdate={updateDataTable} />
                         
                            <ExcelSheetIntegration/>
                        
                    </div>
                     
                    {/* Data Table Component */}
                    <div className="w-full md:w-1/2 h-full border border-inherit rounded-md  overflow-scroll ">
                   
                        <SpkDataTable onChangePage={getCertificateLIst} updateTable={updateTable} columns={columns} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;

