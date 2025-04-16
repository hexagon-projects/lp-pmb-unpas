import React, { lazy, useEffect, useState } from "react";
const FaWhatsapp = lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaWhatsapp })));
import ChatService from "../fetching/chat";
import IdentityService from "../fetching/identity";

const FloatingWhatsApp = () => {
  const [chat, setChat] = useState('');
  const [identity, setIdentity] = useState([])
  
  const fetchIdentity = async () => {
    try {
      const response = await IdentityService.getAllIdentities()
      setIdentity(response)
    } catch (error) {
      console.error(error)
    }
  }
  const fetchChat = async () => {
    try {
      const response = await ChatService.getChat();
      if (response.length > 0) {
        setChat(response[0]?.greating);
      }
    } catch (error) {
      console.error('Error fetching chat:', error);
    }
  };
  
  useEffect(() => {
    fetchChat();
    fetchIdentity();
  }, []);

  const phoneNumber = `${identity[0]?.phone}`;

  const openWhatsApp = () => {
    const message = encodeURIComponent(chat || "Hello, I need more information!");
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    let url;
    if (isIOS) {
      url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    } else {
      url = `https://wa.me/${phoneNumber}?text=${message}`;
    }
    
    if (isIOS) {
      window.location.href = url;
      setTimeout(() => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
      }, 500);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div
      className="fixed bottom-30 lg:bottom-6 right-6 z-999999 bg-green-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition"
      onClick={openWhatsApp}
    >
      <FaWhatsapp size={32} />
    </div>
  );
};

export default FloatingWhatsApp;