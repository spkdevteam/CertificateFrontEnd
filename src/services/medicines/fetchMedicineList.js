import axios from "axios";

const fetchMedicineList = async (data)=>{
try {
    const authToken = localStorage.getItem("KOSMO_client_token");
    

    const response = await axios.get(`https://www.drugs.com/api/autocomplete/?type=main&s=${data}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }

    });
    return response.data  
} catch (error) {
    
}
}

export default fetchMedicineList

