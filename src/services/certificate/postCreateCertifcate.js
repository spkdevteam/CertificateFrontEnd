import { certificateapi } from "../../axios/axiosSetup"


const postCreateCertificate = async ({ certificateNumber,goldFineness,goldWeight}) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const data = {
        certificateNumber: certificateNumber,
        // goldFineness:goldFineness,
        // goldWeight: goldWeight,
        clientId: clientId
      }
    const result = await certificateapi.post(`/certificate/createCertificateWithStatic`,data,)
    console.log(result,'certificateStatic')
    return result.data

}

export default postCreateCertificate