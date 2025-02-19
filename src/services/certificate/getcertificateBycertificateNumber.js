

import { certificateapi } from "../../axios/axiosSetup"


const getcertificateBycertificateNumber = async ({ certificateNumber }) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const result = await certificateapi.get(`/certificate/getOneCertificate/${certificateNumber}/${clientId}`)
    return result.data

    

}

export default getcertificateBycertificateNumber