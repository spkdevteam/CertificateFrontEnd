import { certificateapi } from "../../axios/axiosSetup"


const getAllCertificate = async ({ page=0, rowPerPage=10, keyWord=''}) => {
    const clientId = import.meta.env.VITE_CLIENTID
    const result = await certificateapi.get(`/certificate/paginated/${clientId}?page=${page}1&perPage=${rowPerPage}&searchKey=${keyWord}`)
    console.log(result?.data)
    return result.data

}

export default getAllCertificate