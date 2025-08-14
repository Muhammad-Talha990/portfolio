import { useRef } from 'react'
import styles from './heading.module.css'
import { slideUp } from './slideUp'
import { motion,useInView } from 'framer-motion'
export default function Heading({heading}) {
    const headingContainer = useRef(null)
    const inView = useInView(headingContainer)
  return (
    <div className={styles.heading} ref={headingContainer}>
        <h2>
        {
            heading.split('').map((letter,index)=>{
                return(
                    <span key={index} className={styles.masku}>
                        <motion.span 
                            variants={slideUp}
                            custom={index}
                            animate={inView?"open":"closed"}
                        >
                            {letter}
                        </motion.span>
                    </span>
                )
            })
        }
        </h2>
    </div>
  )
}
