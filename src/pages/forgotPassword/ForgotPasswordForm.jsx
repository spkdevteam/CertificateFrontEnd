import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useDarkmode from "../../Hooks/useDarkMode";
import authService from "../../services/auth.Service";
import toast from "react-hot-toast";
import Modal from "react-modal";
import useHandleUserHook from "../../Hooks/userHook";


const ForgotPasswordForm = () => {



    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const[id,setId]=useState(null)
    const navigate=useNavigate()
    const{forgotUser,otpUser}=useHandleUserHook()



         const [formData, setFormData] = useState({
        email: ""
    })
    const [formDataErr, setFormDataErr] = useState({
        email: ""
    })

     const handleChange=(e)=>{

        const { name, value } = e.target
        if (name === "email") {
            if (value == "") {
                setFormDataErr((prev) => ({
                    ...prev,
                    email: "Email  Is Required",
                }));
            } else {
                setFormDataErr((prev) => ({
                    ...prev,
                    email: "",
                }));
            }
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

     
    const sendOtp = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!formData.email) {
            toast.error("Enter your Email");
            setLoading(false);
            return;
        }
        try {
            const result = await forgotUser({email:formData?.email });
            console.log(result,"hello")
            if (result?.data?.status) {
                toast.success(result?.data?.message);
                setIsOtpSent(true);
                setModalIsOpen(true);

                if (result?.data?._id) {
                    setId(result?.data?._id);
                    console.log("Stored User ID:", result?.data?._id);
                }
    
            }

            else{
                toast.error('requiered fields are empty ')

            }

        } catch (error) {
            console.log(error)
        }
        setLoading(false);

    };





    const verifyOtp=async(e)=>{
        e.preventDefault()

        if (!otp) {
            toast.error("Enter the OTP");
            return;
        }
        try {
            const result = await otpUser({ id, otp });
            console.log(result,"world")
            if (result?.data?.status) {
                toast.success(result?.data?.message);
                setModalIsOpen(false);
                navigate("/resetpassword", { state: { id } });
            }
        } catch (error) {
            toast.error("Invalid OTP");
        }




    }

    return (

        <form className="sapce-y-4 w-96">
            <label >
            <p className="mb-1">Email <span className="text-red-500">*</span></p>
            <input name="email"
             type="email"
             placeholder="Enter Email"
             className="form-control w-96 rounded-md px-4 py-2"
             value={formData?.email}
             onChange={handleChange}
            />

           <p className="text-sm text-red-500">
                     {formDataErr.email}
                    </p>

            </label>

            

            <button
            className="w-96 p-2 mt-2 bg-blue-500 text-white rounded-lg"
            disabled={loading}
            onClick={sendOtp}
            
            >
            {loading ? "Sending..." : "Forgot Password"}

           </button>
          <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}  >
          <h2>Enter OTP</h2>
          <input type="text"
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            className="w-60 p-2 border rounded-md" 

          />

<button onClick={(e)=>verifyOtp(e)} className="p-2 bg-green-500 text-white">Verify OTP</button>
            </Modal>
            <div className="flex justify-between">
                <Link to="/signIn">Home</Link>
                <Link to="/signIn">Back To Login</Link>
            </div>







        </form>

    );
};

export default ForgotPasswordForm;
