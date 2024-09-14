import styles from "../Header.module.css"
const Header = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/logo.webp" alt="" />
      </div>

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li><span>Contact us</span></li>
      </ul>
    </nav>
  )
}

export default Header;