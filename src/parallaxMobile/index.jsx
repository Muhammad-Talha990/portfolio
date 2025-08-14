import styles from './style.module.css'
import { skills } from '@/Data/skills'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { fromDown, fromLeft,fromRight,fromUp } from '../from'
import { scaleAnimation } from '@/scaleAnimation'
import nextConfig from '../../next.config'

export default function MobileParallax() {
  return (
    <div className={styles.mobileParallax}>
      <From images={[skills[0],skills[1]]} animation={scaleAnimation}/>
      <From images={[skills[2],skills[3]]} animation={fromLeft} animationSecond={fromRight}/>
      <From images={[skills[4],skills[5]]} animation={fromUp}/>
      <From images={[skills[6],skills[7]]} animation={fromDown}/>
      <From images={[skills[8],skills[9]]} animation={fromUp} animationSecond={fromDown}/>
      <From images={[skills[10],skills[11]]} animation={fromDown} animationSecond={fromUp}/>
    </div>
  )
}

const From = ({images,animation,animationSecond}) =>{
    const fromContainer = useRef(null)
    const inView = useInView(fromContainer)
  return(
    <div className={styles.fromSide} ref={fromContainer}>
      <motion.div
        variants={animation}
        initial="initial"
        animate={inView?"open":"closed"} 
        className={styles.fromLeft} 
        style={{backgroundColor:images[0].color}}
      >
        <Image
          src={`${nextConfig.basePath}/skills/${images[0].src}`}
          fill={true}
          alt='skills image'
          loading='eager'
        />
      </motion.div>
      <motion.div
        variants={animationSecond?animationSecond:animation}
        initial="initial"
        animate={inView?"open":"closed"} 
        className={styles.fromRight} 
        style={{backgroundColor:images[1].color}}
      >
        <Image
            src={`${nextConfig.basePath}/skills/${images[1].src}`}
            fill={true}
            alt='skills image'
            loading='eager'
        />
      </motion.div>
    </div>
  )
}
