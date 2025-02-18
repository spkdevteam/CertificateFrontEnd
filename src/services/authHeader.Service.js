
const adminInfo = JSON.parse(localStorage.getItem("KOSMO_client_adminInfo"));
const tokenString = localStorage.getItem("KOSMO_client_token");
let token = '';

if (adminInfo && tokenString ) {
    token = tokenString;
}


export const authHeader = () => {
  const headers =  { "Authorization": `Bearer ${token}` }
  return headers;
}

export const multipartHeader = () => {

  const headers = {
    'x-access-token': token,
  }
  return headers;
}

export default { authHeader, multipartHeader };