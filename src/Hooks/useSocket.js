import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import useActivePatientSlice from './useActivePatientSlice';

const useSocket =   () => {
  const { activeUser } = useActivePatientSlice();
  const notification = {}; // useSelector((state) => state?.notification?.messages?.sent) || [];
  const [patientWaitingList, setWaitingList] = useState([]);
  const socketRef = useRef(null);
  const dispatch = useDispatch();
  const clientId =  localStorage.getItem("KOSMO_client_clientId");

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io('ws://localhost:8089', { autoConnect: false });
    }

    const socket = socketRef.current;

    if (activeUser?._id) {
      socket.connect(); // Ensure connection
      socket.emit('join', { userId: activeUser._id });
      socket.emit('addUser', { userId: activeUser._id });
    } else {
      socket.emit('logout');
      handleLogout();
    }

    if (notification.length > 0) {
      const currentNotification = { ...notification[0] };
      socket.emit("sentNotification", currentNotification);
      setTimeout(() => {
        // dispatch(popNotification());
      }, 1000);
    }

    // Remove existing listeners before adding new ones to avoid duplicates
    socket.off('receiveNotification');
    socket.off('currentWaitingList');

    socket.on('receiveNotification', (message) => {
      toast.info(message?.message);
      receiveMessage(message);
    });

    socket.on('currentWaitingList', (message) => {
      console.log(message, 'return message');
      setWaitingList(message); 
    });
 
    return () => {
      socket.off('receiveNotification');
      socket.off('currentWaitingList');
      socket.disconnect();
    };
  }, [activeUser?._id, notification]);

  const getPatientWaitingList = ({ userId, branchId }) => {
    console.log(userId, branchId, 'userId, branchId');
    const socket = socketRef.current;

    if (socket) {
      if (!socket.connected) {
        console.log("Connecting socket...");
        socket.connect();
        socket.once("connect", () => {
          console.log("✅ Connected! Now sending event...");
          socket.emit("getBranchWaitingList", { userId, branchId,clientId });
        });
      } else {
        console.log("✅ Already connected, sending event...");
        socket.emit("getBranchWaitingList", { userId, branchId });
      }
    }
  };

  return { patientWaitingList, getPatientWaitingList };
};

export default useSocket;
