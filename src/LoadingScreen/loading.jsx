import styles from './loading.module.css'
import { slideUp } from './animation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { words } from '@/Data/loadingScreen'
export default function LoadingScreen() {

  const [index,setIndex]=useState(0);

  useEffect(()=>{
    if(index == words.length -1) return;
    setTimeout(()=>{
      setIndex(index+1)
    }, index == 0 ? 1000 : 350)
  },[index])
  return (
    <>
    <div className={styles.loadingScreen}>
      {
        [...Array(6)].map((_,i)=>{
          return(
            <motion.div
            key={i} 
            variants={slideUp} 
            initial="initial" 
            exit="exit"
            custom={i}  
            className={styles.loadingScreenUnit}
            >
            </motion.div>
          )
        })
      }
    </div>
    <motion.div 
      className={styles.loadingScreenHeadingContainer}
      variants={slideUp}
      initial="initial"
      exit="exit"
      custom={3}
    >
      <h2>{words[index]}</h2>
    </motion.div>
    </>
  )
}
