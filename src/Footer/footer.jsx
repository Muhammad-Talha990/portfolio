import { useRef } from 'react'
import styles from './footer.module.css'
import { motion,useInView } from 'framer-motion'
import { slideUp } from '@/About/aboutAnimation'
import { scaleAnimation } from '@/scaleAnimation'
import { socials } from '@/Data/contact'


export default function Footer() {
    const footerContainer = useRef(null)
    const footerSocials = useRef(null)
    const inView = useInView(footerContainer)
    const socialsInView = useInView(footerSocials)
    const message = "Let's work together!"
  return (
    <footer className={styles.footer}>
        <div className={styles.footerMain}>
            <p className={styles.footerStarter} ref={footerContainer}>
                {
                    message.split(" ").map((word,index)=>{
                        return(
                            <span key={`footer_${index}`} className={styles.masku}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    initial="initial"
                                    animate={inView?"open":"closed"}
                                    className={styles.spanner}
                                >
                                {word}
                                </motion.span>
                            </span>
                        )
                    })
                }
            </p>
            <div className={styles.footerSocials} ref={footerSocials}>
                <motion.div 
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#88b6fa"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    {socials.phone}
                </motion.div>
                <motion.a
                    href={`mailto:${socials.email}`}
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit} 
                    onMouseEnter={()=>{document.body.style.backgroundColor="#c84d67"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    Gmail
                </motion.a>
                <motion.a 
                    href={socials.linkedin}
                    target='_blank'
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#0a66c2"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    LinkedIn
                </motion.a>
                <motion.a 
                    href={socials.github}
                    target='_blank'
                    variants={scaleAnimation}
                    initial="initial"
                    animate={socialsInView?"open":"closed"}
                    className={styles.footerSocialsUnit}
                    onMouseEnter={()=>{document.body.style.backgroundColor="#22262a"}} 
                    onMouseLeave={()=>{document.body.style.backgroundColor="#121111"}}
                >
                    Github
                </motion.a>
            </div>
        </div>
    </footer>
  )
}
