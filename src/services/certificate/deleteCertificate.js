import { certificateapi } from "../../axios/axiosSetup"
 
const deleteCertificate = async ({ id }) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const result = await certificateapi.delete(`/certificate/deleteCertificate/${id}/${clientId}`)
    return result.data
     
}

export default deleteCertificate