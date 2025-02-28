import { useState } from "react";
import SpkDataTable from "../../common/DataTable/SpkDataTable";
import MenuBar from "../../components/DashBoard/MenuBar";
import useCertificatehook from "../../Hooks/useCertificateHooks";
import { Tooltip, useTheme } from "@material-tailwind/react";

import SPKBTNThemedEdit from "../../common/Button/OutlineThemeButton/SPKBTNThemedEdit";
import SPKBTNThemedDelete from "../../common/Button/OutlineThemeButton/SPKBTNThemedDelete";
import HandleCreateCertificate from "../../components/DashBoard/HandleCreateCertificate";
import deleteCertificate from "../../services/certificate/deleteCertificate";
import useColourThemeHook from "../../Hooks/useColourThemeHook";
import ColourThemeSelector from "../ThemePage/colourTheme";

const DashBoard = () => {
    const { getCertificateLIst, updateDataTable, deleteCertificateById } = useCertificatehook();
     const {theme} =  useColourThemeHook()

    const [selectedCertificate, setSelectedCertificate] = useState({
        "_id": "",
        "displayId": "",
        "certificateNumber": "",
        "goldFineness": 0,
        "goldWeight": 0,
    });

    const handleEdit = (row) => {
        setSelectedCertificate(row)
    }

    const columns = [
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
                    <Tooltip content="Edit" placement="top" arrow animation="shift-away">
                        <>
                            <SPKBTNThemedEdit onClick={() => handleEdit(row)} width="w-10" />
                            <SPKBTNThemedDelete onClick={() => { deleteCertificateById({ id: row?._id, certificateNumber: row?.certificateNumber }) }} width="w-10" />
                        </>
                    </Tooltip>
                </div>
            ),
            center: true,
        },
    ];

    return (
        <div className={`w-full h-full ${theme?.bgcolour}  ${theme?.textColour}  ${theme?.bordercolour}   flex justify-center items-center bg-gray-100 text-sm`}>
            <div className="lg:container gap-2 flex flex-col  border border-inherit rounded-lg shadow-lg p-6 h-full">
                <div className="w-full flex-col gap-2  rounded-md shadow-lg flex items-center     mb-4">
                    <MenuBar />
                    
                <ColourThemeSelector />
            
                </div>
                <div className="w-full flex flex-col gap-6 md:flex-row p-4 border border-inherit ">

                    <div className="w-full rounded-md overflow-hidden text-inherit  rounded-md shadow-lg p-4 ">
                        <HandleCreateCertificate   value={selectedCertificate} onChangePage={selectedCertificate} />
                    </div>
                    <div className="w-full  h-full    border border-inherit rounded-md overflow-scroll p-4 rounded-md ">
                        <SpkDataTable onChangePage={getCertificateLIst} updateTable={updateDataTable} columns={columns} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;
