import { certificateapi } from "../../axios/axiosSetup"


const postCreateCertificate = async ({ certificateNumber,goldFineness,goldWeight}) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const data = {
        certificateNumber: certificateNumber,
        goldFineness:goldFineness,
        goldWeight: goldWeight,
        clientId: clientId
      }
    const result = await certificateapi.post(`/certificate/createCertificate`,data,
        // {
        // headers: {
        //     Authorization: `Bearer ${authToken}`,
        // }

    // }
)
    console.log(result,'/certificate/createCertificate result')
    return result.data

}

export default postCreateCertificate