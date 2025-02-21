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


const ForgotPasswordForm = ({ formData, sendOtp, loading, setFormData }) => {

    return (

        <form className="sapce-y-4 w-96">
            <label >
                <p className="mb-1">Email <span className="text-red-500">*</span></p>
                <input name="email"
                    type="email"
                    placeholder="Enter Email"
                    className="form-control w-96 rounded-md px-4 py-2"
                    value={formData?.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </label>

            <button
                className="w-96 p-2 mt-2 bg-blue-500 text-white rounded-lg"
                onClick={(e) => {
                    e.preventDefault()
                    sendOtp()
                }
                }

            >
                {loading ? "Sending..." : "Forgot Password"}

            </button>
        </form>

    );
};

export default ForgotPasswordForm;
