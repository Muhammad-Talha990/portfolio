import styles from './parallax.module.scss'
import Image from 'next/image'
import { useTransform, useScroll, motion } from 'framer-motion'
import { useRef } from 'react'
import useDimension from '../useDimension'
import { skills } from '../Data/skills'
import nextConfig from '../../next.config'

export default function Parallax() {
  const container = useRef(null)
  const { height } = useDimension();
  const {scrollYProgress} = useScroll({
    target:container,
    offset:['start end','end start']
  })
  const y = useTransform(scrollYProgress, [0,1],[0,height*2])
  const y2 = useTransform(scrollYProgress, [0,1],[0,height*3.3])
  const y3 = useTransform(scrollYProgress, [0,1],[0,height*1.25])
  const y4 = useTransform(scrollYProgress, [0,1],[0,height*3.3])
  return (
    <>
    <div className={styles.parallax}>
      <div ref={container} className={styles.gallery}>
        <Column images={[skills[0],skills[1],skills[2]]} y={y}/>
        <Column images={[skills[3],skills[4],skills[5]]} y={y2}/>
        <Column images={[skills[6],skills[7],skills[8]]} y={y3}/>
        <Column images={[skills[9],skills[10],skills[11]]} y={y4}/>
      </div>
    </div>
    </>
  )
}

const Column = ({images, y=0})=>{
  return (
    <motion.div style={{y}} className={styles.column}>
      {
        images.map((image,index)=>{
          const {src,color}=image;
          return <div key={index} className={styles.imageContainer} style={{backgroundColor:color}}>
            <Image
              src={`${nextConfig.basePath}/skills/${src}`}
              width={1}
              height={1}
              alt='parallax image' 
              loading='eager' 
            />
          </div>
        })
      }
    </motion.div>
  )
}
