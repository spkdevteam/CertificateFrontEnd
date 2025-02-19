import { useState } from "react";
import SpkDataTable from "../../common/DataTable/SpkDataTable";
import MenuBar from "../../components/DashBoard/MenuBar";
import useCertificatehook from "../../Hooks/useCertificateHooks";
import { Tooltip } from "@material-tailwind/react";
 
import SPKBTNThemedEdit from "../../common/Button/OutlineThemeButton/SPKBTNThemedEdit";
import SPKBTNThemedDelete from "../../common/Button/OutlineThemeButton/SPKBTNThemedDelete";
import HandleCreateCertificate from "../../components/DashBoard/HandleCreateCertificate";
import deleteCertificate from "../../services/certificate/deleteCertificate";

const DashBoard = () => {
    const { getCertificateLIst,updateDataTable,deleteCertificateById } = useCertificatehook();
    
    const [selectedCertificate, setSelectedCertificate] = useState({
        "_id": "",
        "displayId": "",
        "certificateNumber": "",
        "goldFineness": 0,
        "goldWeight": 0,
    });

    const handleEdit = (row)=>{
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
            selector: (row) => row?.goldFineness,
            left: true,
            wrap: true,
        },
        {
            name: "Gold Weight",
            selector: (row) => row?.goldWeight,
            left: true,
            wrap: true,
        },
        {
            name: "Created By",
            selector: (row) => row?.goldcreatedByWeight,
            left: true,
            wrap: true,
        },
        {
            name: "Actions",
            selector: (row) => (
                <div className="flex justify-center items-center gap-2">
                    <Tooltip content="Edit" placement="top" arrow animation="shift-away">
                        <>
                            <SPKBTNThemedEdit onClick={() =>  handleEdit(row)} width="w-10" />
                            <SPKBTNThemedDelete onClick={() =>{deleteCertificateById({id:row?._id,certificateNumber:row?.certificateNumber})}} width="w-10" />
                        </>
                    </Tooltip>
                </div>
            ),
            center: true,
        },
    ];

    return (
        <div className="w-full h-full  flex justify-center items-center bg-gray-100 text-sm">
            <div className="lg:container bg-white border rounded-lg shadow-lg p-6 h-full">
                <div className="w-full h-20 rounded-md shadow-lg flex items-center border-b mb-4">
                    <MenuBar />
                </div>
                <div className="w-full mb-6 rounded-md shadow-lg">
                    <HandleCreateCertificate value={selectedCertificate} onChangePage={selectedCertificate} />
                </div>
                <div className="w-full  h-full    border rounded-md overflow-scroll">
                    <SpkDataTable  onChangePage={getCertificateLIst} updateTable={updateDataTable} columns={columns} />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
