import axios from "axios"

    const getActiveBranches = async (input)=>{ 
        const {keyword,page,perPage} = input
        const authToken = localStorage.getItem("KOSMO_client_token");
        const clientId = localStorage.getItem("KOSMO_client_clientId");
        const businessUnitId = localStorage.getItem("KOSMO_client_businessUnitId");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/client/bu/branch/listBranch?keyword=${keyword}&page=${page}&perPage=${perPage}&clientId=${clientId}`, {
            
            
           
            headers: {
                Authorization: `Bearer ${authToken}`,
            }
    
        });
         
        return response.data.listOfBranches
    }

export default getActiveBranches    