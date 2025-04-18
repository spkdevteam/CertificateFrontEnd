import { useState } from "react"
import toast from "react-hot-toast"
import handleAPiloginUser from "../services/user/loginUser"
import handleForgotPassword from "../services/user/forgotPasswordUser"
import handleOtp from "../services/user/otpUser"
import handleReset from "../services/user/resetPasswordUser"
import { useDispatch } from "react-redux"
import handlelogoutUser from './../services/user/logoutUser'; 
 

const userAuth = {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ODIwODRkYTg0MGYzYTdiZjFhMmY3MiIsImVtYWlsIjoia2FzaWZidTJAeW9wbWFpbC5jb20iLCJpYXQiOjE3Mzk4MjE4NTcsImV4cCI6MTczOTkwODI1N30.HDzL5zVnfiMYNboGnkelTYT06g94Hi98XK6YTLRuiPM",
    "expiryTime": 1739908257123,
    "adminInfo": {
        "_id": "67820851a840f3a7bf1a3077",
        "role": {
            "_id": "6782084da840f3a7bf1a2f83",
            "id": 2,
            "name": "Business Unit",
            "capability": {
                "Administration": {
                    "name": "Administration",
                    "displayName": 'Administration',
                    "access": true,
                    "path": '/dashboard',
                    "menu": {
                        "Roles & Permissions": {
                            "name": "Roles & Permissions",
                            "displayName": "All Roles & Permissions",
                            "access": true,
                            "_id": "6782084da840f3a7bf1a2f85"
                        },
                        "Employee": {
                            "name": "Employee",
                            "displayName": "All Employee",
                            "access": true,
                            "_id": "6782084da840f3a7bf1a2f86"
                        },
                        back: {
                            "name": "Employee",
                            "displayName": "All Employee",
                            "access": true,
                            "_id": "6782084da840f3a7bf1a2f86"

                        },
                        Home: {
                            "name": "Employee",
                            "displayName": "All Employee",
                            "access": true,
                            "_id": "6782084da840f3a7bf1a2f86"
                        }

                    },
                    "_id": "6782084da840f3a7bf1a2f84"
                },
                "Patients": {
                    "name": "Patient",
                    "access": true,
                    "path": '/patients',
                    "displayName": 'Patients',
                    "menu": {
                        Access: {

                            "name": "Patient",
                            "displayName": "All Patient",
                            "access": true,
                            "_id": "6782084da840f3a7bf1a2f8d",
                            "menu": {
                                "create Patient": {

                                    "name": "Patient",
                                    "displayName": "All Patient",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f8d"
                                },
                                "deletePatient": {

                                    "name": "Appointment",
                                    "displayName": "All Appointment",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f8e"
                                },
                                "Back": {

                                    "name": "Appointment",
                                    "displayName": "All Appointment",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f8e"
                                },
                                "Home": {

                                    "name": "Appointment",
                                    "displayName": "All Appointment",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f8e"
                                }
                            },

                            "_id": "6782084da840f3a7bf1a2f8c"
                        },
                        Rules: {
                            "name": "Appointment",
                            "displayName": "All Appointment",
                            "access": true,
                            "_id": "6782084da840f3a7bf1a2f8e",
                            "menu": {
                                Patient: {

                                    "name": "Patient",
                                    "displayName": "All Patient",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f8d"
                                },
                                Appointment: {
                                    "name": "Appointment",
                                    "displayName": "All Appointment",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f8e"
                                },
                                back: {
                                    "name": "Employee",
                                    "displayName": "All Employee",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f86"

                                },
                                Home: {
                                    "name": "Employee",
                                    "displayName": "All Employee",
                                    "access": true,
                                    "_id": "6782084da840f3a7bf1a2f86"
                                }
                            },
                        },
                    },
                    "createdBy": null,
                    "__v": 0
                },
                "branch": null,
                "businessUnit": null,
                "roleId": 2,
                "firstName": "kasif",
                "lastName": "unit two",
                "email": "kasifbu2@yopmail.com",
                "phone": "9999999905",
                "gender": "Prefer not to say",
                "age": null,
                "bloodGroup": null,
                "patientGroup": null,
                "referedBy": null,
                "profileImage": null,
                "profileCreated": false,
                "panNumber": null,
                "adharNumber": null,
                "__v": 0
            },
            "clientId": "6782084da840f3a7bf1a2f72",
            "businessUnitId": "67820851a840f3a7bf1a307a",
            "message": "Login success!"
        }
    }
}





const useHandleUserHook = () => {
    const [userSlice, setUserSlice] = useState(userAuth)
    const dispatch=useDispatch()
    const [login, setLogin] = useState(false)
    const [isTokenValid, setTokenValid] = useState()
    const verifyTocken = ({ token }) => {
        setLogin(prev => prev + 1)

        if (login % 2) setTokenValid(true)
        else setTokenValid(false)
    }

    const loginUser =async ({userId,password}) => {
            console.log(userId,password)
            const result =await  handleAPiloginUser({userId,password})
            return result


    }

    const forgotUser = async ({ email }) => {
        const result = await handleForgotPassword({ email: email })
        return result
    }

    const otpUser =async ({ id, otp }) => {
        const result = await handleOtp({ id: id, otp: otp })
        return result
    }

    const resetUser = async({ id, password, otp }) => {
        const result = await handleReset({ id, password, otp })
        return result
    }

    const logoutUser=async({userId})=>{
        try {
            const response=await handlelogoutUser({userId});
            if(response?.status===true){
                toast.success(response?.message)

            }
            else{
                toast.error(response?.message || "logout failed")
            }
            return response
            
        } catch (error) {
            console.log(error)
            
        }
    }


    return { verifyTocken, isTokenValid, userSlice, loginUser, forgotUser, otpUser, resetUser,logoutUser }
}

export default useHandleUserHook