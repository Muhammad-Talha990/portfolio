'use client'
import styles from "./page.module.css";
import InfiniteText from "@/infiniteText/infiniteText";
import Gallery from "@/projectGallery/gallery";
import Parallax from "@/parallax/parallax";
import { useEffect, useState } from "react";
import Heading from "@/headingAnimation/heading";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/LoadingScreen/loading";
import About from "@/About/about";
import Footer from "@/Footer/footer";
import MobileParallax from "@/parallaxMobile";
import ProjectGalleryMobile from "@/projectGalleryMobile";


export default function Home() {

  const [isMobile,setIsMobile] = useState(false);


  useEffect(()=>{
    (
      async () =>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({
          mobile:{
            smooth:true,
          },
          smoothMobile:true,
          smooth:true,
        });
      }
    )()
    setTimeout(()=>{
      setIsLoading(false);
      document.body.style.cursor='default'
      window.scrollTo(0,0)
    },2000)
    const handleResize=()=>{
      setIsMobile(window.innerWidth<707)
    }
    handleResize()
    window.addEventListener("resize",handleResize);
    return()=>window.removeEventListener("resize",handleResize);
  },[])

  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
    <AnimatePresence mode="wait">
      {isLoading && <LoadingScreen/>}
    </AnimatePresence>
    <InfiniteText/>
    <main className={styles.main}>
      <Heading heading={"About"}/>
      <About/>
      <Heading heading={"Projects"}/>
      {
        isMobile?(
          <ProjectGalleryMobile/>
        ):(
          <Gallery/>
        )
      }
      <Heading heading={"Skills"}/>
      {
        isMobile?(
          <MobileParallax/>
        ):(
          <Parallax/>
        )
      }
      <Footer/>
    </main>
    </>
  );
}
