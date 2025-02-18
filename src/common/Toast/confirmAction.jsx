import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SPKBTNSave from "../Button/SPKBTNSave";
import SPKBTNNew from "../Button/SPKBTNNew";
import SPKBTNCancel from "../Button/SPKBTNCancel";

const confirmAction = (message) => {
  return new Promise((resolve) => {
    const ConfirmToast = () => (
      <div className="w-full flex flex-col   gap-4">
        <p>{message}</p>
        <div className="flex gap-4 w-full" >
          <SPKBTNSave  onClick={() => {
              toast.dismiss(); // Dismiss the toast
              resolve(true); // Resolve with true when 'Yes' is clicked
            }}  text='Yes'/>
                   
                   <SPKBTNCancel  text="No" onClick={() => {
              toast.dismiss(); // Dismiss the toast
              resolve(false); // Resolve with false when 'No' is clicked
            }}/>
                
        </div>
      </div>
    );

    // Display the confirmation toast with a unique ID
    toast.info(<ConfirmToast />, {
      autoClose: false, // Disable auto-closing
      closeOnClick: false, // Prevent closing on outside click
      closeButton: false, // Remove the default close button
      draggable: false, // Disable dragging
    });
  });
};

export default confirmAction;
