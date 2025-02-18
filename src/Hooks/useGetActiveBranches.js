import { useEffect, useState } from "react";
import loadActiveBranches from "../services/appointment/getActiveBranches";

const useGetActiveBranches = () => {
    const [branches, setBranches] = useState([]);

    const loadBranches = async () => {
        try {
            const result = await loadActiveBranches({ keyword: '', page: 1, perPage: 100 });
            console.log(result,'resultresultresult')
            setBranches(result);
        } catch (error) {
            console.error("Failed to load active branches:", error);
        }
    };

    useEffect(() => {
        loadBranches();  
    }, []);

    return branches;
};

export default useGetActiveBranches;
