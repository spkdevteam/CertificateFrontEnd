import axios from 'axios';

// Create Axios instance
const inventoryapi = axios.create({
  baseURL: import.meta.env.VITE_INVENTORY_URL,  
  headers: {
    'Content-Type': 'application/json',  
  },
  timeout: 5000,  
});


// Create Axios instance
const accountsapi = axios.create({
  baseURL: import.meta.env.VITE_ACCOUNTS_URL,  
  headers: {
    'Content-Type': 'application/json',  
  },
  timeout: 5000,  
});

 
inventoryapi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken'); // Example: Fetch token from local storage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { inventoryapi ,accountsapi};
