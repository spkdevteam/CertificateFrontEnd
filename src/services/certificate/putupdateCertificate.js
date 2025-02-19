import { certificateapi } from "../../axios/axiosSetup"


const putUpdateCertificate = async ({ _id,certificateNumber,goldFineness,goldWeight}) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const data = {
        _id: _id,
        certificateNumber: certificateNumber,
        goldFineness: goldFineness,
        goldWeight: goldWeight,
        clientId: clientId
      }
    const result = await certificateapi.put(`/certificate/updateCertificate/update`,data,
        // {
        // headers: {
        //     Authorization: `Bearer ${authToken}`,
        // }

    // }
)
    console.log(result,'/certificate/createCertificate result')
    return result.data

}

export default putUpdateCertificate