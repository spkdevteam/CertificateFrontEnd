import React, { useEffect, Suspense, Fragment, useRef, useState } from "react";
import useWidth from "../Hooks/useWidth";
import Header from "./Header/Header";
import NavMenu from "./NavMenu/NavMenu";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer/Footer";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";


const Layout = () => {

  const { width, breakpoints } = useWidth();

  const [scrolling, setScrolling] = useState(false);



  const handleScroll = () => {

    const scrollContainer = document.querySelector(".scroll-container");
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;

    if (scrollTop > 220) {

      setScrolling(true)

    } else if (scrollTop < 220) {
      setScrolling(false)
    }

  };
  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container")
    scrollContainer.addEventListener("scroll", handleScroll)
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [])




  return (
    <>
      <div className="scroll-container overflow-y-auto overflow-x-hidden" style={{ width: "100vw", height: "100vh", overflowX:"hidden" }}>

        <Header />
        <NavMenu scrolling={scrolling} />
        {/* <BreadCrumbs /> */}
        <div className="flex flex-col   ">
          <div className=" ">
            <MainContent />
          </div >
        </div>

        <Footer />







      </div>

    </>
  );
};

export default Layout;
