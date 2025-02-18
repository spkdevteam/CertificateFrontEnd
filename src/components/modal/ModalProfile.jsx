import React, { useEffect } from 'react'
import useDarkmode from '../../Hooks/useDarkMode'
import profile from "../../assets/images/avatar/profile.jpg"
import { removeCapability } from '../../store/reducer/capability/capability';
import { logOut } from '../../store/reducer/authLogin/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeProfile, setProfile } from '../../store/reducer/profileSlice/profileSlice';
import authService from '../../services/auth.Service';
import profileImg from "../../assets/images/avatar/profileImg.png"


function ModalProfile() {
    const [isDark] = useDarkmode()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { clientUser: currentUser, isAuth } = useSelector((state) => state.authSlice)

    const {profileData:profile,profileExists:isprofileExists} = useSelector((state)=>state.profileSclice)
    


    const ProfileMenu = [
        {
            label: " My Profile",
            //   icon: "heroicons-outline:user",

              action: () => {
                if (isprofileExists == true) {
                  navigate("/viewProfile");
                } else {
                  navigate("/profile");
                }
              },
        },

        {
            label: "Language",
            //   icon: "heroicons-outline:login",
            //   action: () => {
            //     handleLogout();
            //   },
        },
        {
            label: "Sign Out",
            //   icon: "heroicons-outline:login",
            action: () => {
                handleLogout();
            },
        },
    ];


    const handleLogout = () => {
        localStorage.removeItem("KOSMO_client_token")
        localStorage.removeItem("KOSMO_client_adminInfo")
        localStorage.removeItem("KOSMO_client_expiryTime")
        localStorage.removeItem("KOSMO_client_clientId")
        localStorage.removeItem("KOSMO_client_businessUnitId")
        localStorage.removeItem("activeMenuId")
        localStorage.removeItem("subActiveMenuId")
        // localStorage.clear();
        dispatch(logOut());
        // dispatch(resetStore())
        // dispatch(removeProfile());
        // dispatch(removeAuth())
        dispatch(removeCapability())
        // dispatch(removeNotification())
        navigate("/signIn");

        // window.location.reload();

    };


    // async function callProfile() {

    //     await authService.getProfile(currentUser?._id).then((res) => {
    //       dispatch(setProfile(res.data.data));
    //     }).catch((error) => {
    //       dispatch(removeProfile());
    //       console.log("error while fetching profile", error);
    
    //     })
    //   }
    
    
    //   useEffect(() => {
    
    //     try {
    
    //       callProfile();
    
    //     } catch (error) {
    
    //       console.log("error while fetching profile", error);
    
    //     }
    
    //   }, [])
    
    return (




        <div className=''>
            <div className=" w-[17.2rem] h-[100%] shadow-xl border border-lightborderInputColor dark:border-darkSecondary rounded-lg bg-white dark:bg-darkAccent">
                < div className='grid grid-cols-1'>

                    <div className='flex justify-start items-center px-2 py-4'>
                        <img src={`${currentUser?.profileImage ? `${import.meta.env.VITE_BASE_URL}/profile/${row?.profileImage}` : profileImg}`} className='w-18 h-16 rounded-3xl px-4 py-2' alt="" />
                        <div className=''>
                            <p className={` ${isDark ? "text-white" : "text-black"} text-lg`}>
                                {currentUser?.firstName }
                            </p>
                            <p className={` ${isDark ? "text-white" : "text-lightIconColor hover:text-"} text-xs`}>
                                {currentUser?.email}
                            </p>
                        </div>
                    </div>
                    {/* Header */}
                    <div className="border-t border-lightborderInputColor dark:border-darkSecondary"></div>

                    {
                        ProfileMenu && ProfileMenu.length > 0 && ProfileMenu.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className="px-5 py-1 cursor-pointer ">
                                        <p onClick={item.action} className={`mb-1 px-4 py-1 rounded-md  ${isDark ? "text-white hover:bg-darkBtn" : "text-black hover:text-lightHoverBgBtn hover:bg-lightBgBtn"}`}>
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            )

                        })
                    }


                </div>


            </div>
        </div>



    )
}

export default ModalProfile