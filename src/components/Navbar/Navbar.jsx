import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink exact to="/" activeClassName={styles.isActive}>
        <button className={styles.navBtn}>Home</button>
      </NavLink>
      <NavLink exact to="/projects" activeClassName={styles.isActive}>
        <button className={styles.navBtn}>Projects</button>
      </NavLink>
      <NavLink exact to="/skills" activeClassName={styles.isActive}>
        <button className={styles.navBtn}>Skills</button>
      </NavLink>
      <img className={styles.avatar} src={`${process.env.PUBLIC_URL}/assets/images/Avatar.png`}></img>
    </div>
  );
}

export default Navbar;
