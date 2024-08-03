import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Zib0</div>
      <div className={styles.text}>
        Zib0 creative thoughts agency © All rights reserved.
      </div>
    </div>
  )
}

export default Footer