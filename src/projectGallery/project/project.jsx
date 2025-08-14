import styles from './project.module.css'
export default function Project({project,index,manageModal}) {
  return (
    <a 
      href={`${project.link}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.project} 
      onMouseEnter={(e)=>{manageModal(true,index,e.clientX,e.clientY)}}
      onMouseLeave={(e)=>{manageModal(false,index,e.clientX,e.clientY)}}
    >
      <h2>{project.name}</h2>
      <div className={styles.projectDescription}>
        <p>{project.type}</p>
        <p>{project.tech}</p>
      </div>
    </a>
    
  )
}

