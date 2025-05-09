import { certificateapi } from "../../axios/axiosSetup"


const getAllCertificate = async ({ page=1, rowPerPage=10, keyWord=''}) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const result = await certificateapi.get(`/certificate/paginated/${clientId}?page=${page}&perPage=${rowPerPage}&searchKey=${keyWord}`)
    return result.data

}

export default getAllCertificate