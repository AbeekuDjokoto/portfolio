import { Text } from "../Text/Text";
import styles from "./Navbar.module.scss";
import githubIcon from "../../assets/icons/github.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.root} ${open ? styles.open : ""}`}>
      <div className={styles.linkList}>
        <Text as="p">Experience</Text>
        <Text as="p">Project</Text>
        <Text as="p">Contact</Text>
      </div>
      <div className={styles.imgList}>
        <img src={githubIcon} alt="Link to my GitHub repository" />
        <img src={instagramIcon} alt="Link to my Instagram page" />
        <img src={twitterIcon} alt="Link to my Twitter page" />
      </div>
      <div className={styles.hamburgerContainer}>
        <div
          className={`${styles.hamburger} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <div className={styles.options}>
          <Text className={styles.optionsList}>Experience</Text>
          <Text className={styles.optionsList}>Project</Text>
          <Text className={styles.optionsList}>Contact</Text>
        </div>
      </div>
    </nav>
  );
};
