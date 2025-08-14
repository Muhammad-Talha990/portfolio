import styles from './about.module.css'
import Image from 'next/image'
import { aboutData } from '../Data/aboutData'
import { motion, useInView } from 'framer-motion'
import { slideUp,opacity } from './aboutAnimation'
import { useEffect, useRef, useState } from 'react'
import nextConfig from '../../next.config'

// Force re-import of data
const aboutDataRefreshed = {...aboutData};
export default function About() {

  const aboutArray=[
    `Hi I'm ${aboutDataRefreshed.name}`,
    aboutDataRefreshed.desc,
    `Based in ${aboutDataRefreshed.based}`
  ]

  const aboutDescription = useRef(null)
  const aboutContainer = useRef(null)
  const inView = useInView(aboutContainer)
  const descInView = useInView(aboutDescription)

  const [isMobile,setIsMobile]=useState(false);
  useEffect(()=>{
    const handleResize=()=>{
      setIsMobile(window.innerWidth < 600)
    }
    handleResize()
    window.addEventListener("resize",handleResize)
    return () => window.removeEventListener("resize",handleResize)
  },[])

  return (
    <div className={styles.aboutContainer} ref={aboutContainer}>
      <div className={styles.aboutDescriptions} ref={aboutDescription} data-scroll data-scroll-speed={isMobile?0.2:0.3}>
        {
          aboutArray.map((para,index)=>{
            return(
              <p key={`para_${index}`}>
                {
                  para.split(" ").map((word,index)=>{
                    return(
                      <span key={`about_${index}`} className={styles.masku}>
                        <motion.span
                          variants={slideUp}
                          custom={index}
                          animate={descInView?"open":"closed"}
                          className={styles.spanner}
                        >
                        {word}
                        </motion.span>
                      </span>
                    )
                  })
                }
              </p>
            )
          })
        }
      </div>
      <motion.div 
        className={styles.aboutImage}
        variants={opacity}
        initial="initial"
        animate={inView?"open":"closed"}
        data-scroll
        data-scroll-speed={isMobile?0.2:0.1}
      >
        <Image
          src={`${nextConfig.basePath}/images/about.jpg`}
          fill={true}
          alt='My Pic'
        />
      </motion.div>
    </div>
  )
}
