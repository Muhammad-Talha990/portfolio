"use client"
import styles from './gallery.module.css'
import Project from './project/project'
import { projects } from '../Data/projects'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import nextConfig from '../../next.config'
import UnderConstruction from './UnderConstruction'

const scaleAnimation = {
  initial: {scale: 0, x:"-50%", y:"-50%"},
  open: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
  closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Gallery() {

  const [modal,setModal]=useState({active:false,index:0});
  const {active,index} = modal;
  const container=useRef(null)
  const cursor=useRef(null)
  const cursorLabel=useRef(null)

  let moveContainerX = useRef(null)
  let moveContainerY = useRef(null)
  let cursorX = useRef(null)
  let cursorY = useRef(null)
  let cursorLabelX = useRef(null)
  let cursorLabelY = useRef(null)


  useEffect(()=>{
    moveContainerX.current=gsap.quickTo(container.current,"left",{duration:0.8,ease:"power3"})
    moveContainerY.current=gsap.quickTo(container.current,"top",{duration:0.8,ease:"power3"})
    cursorX.current=gsap.quickTo(cursor.current,"left",{duration:0.5,ease:"power3"})
    cursorY.current=gsap.quickTo(cursor.current,"top",{duration:0.5,ease:"power3"})
    cursorLabelX.current=gsap.quickTo(cursorLabel.current,"left",{duration:0.425,ease:"power3"})
    cursorLabelY.current=gsap.quickTo(cursorLabel.current,"top",{duration:0.425,ease:"power3"})
  },[])

  const moveItems = (x,y)=>{
    moveContainerX.current(x)
    moveContainerY.current(y)
    cursorX.current(x)
    cursorY.current(y)
    cursorLabelX.current(x)
    cursorLabelY.current(y)
  }
  const manageModal = (active,index,x,y)=>{
    moveItems(x,y)
    setModal({active,index})
  }
  return (
    <div className={styles.projectGallery} onMouseMove={(e)=>{moveItems(e.clientX,e.clientY)}}>
      <div className={styles.projectBody}>
        {
          projects.map((project,index)=>{
            return(
              <Project 
                key={index}
                project={project}
                index={index}
                manageModal={manageModal}
              />
            )
          })
        }
        <UnderConstruction />
      </div>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active?"open":"closed"} 
        className={styles.modalContainer}
      >
      <div style={{top:index*-100+"%"}} className={styles.modalSlider}>
        {
          projects.map((project,index)=>{
            const {src,color}=project
            return(
              <div key={`modal_${index}`} className={styles.modal} style={{backgroundColor:color}}>
                <Image
                  src={`${nextConfig.basePath}/images/${src}`}
                  width={300}
                  height={0}
                  alt='Project Images'
                />
              </div>
            )
          })
        }
      </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active?"open":"closed"}
        className={styles.cursor} 
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active?"open":"closed"} 
        className={styles.cursorLabel} 
      >
        View
      </motion.div>
    </div>
  )
}
