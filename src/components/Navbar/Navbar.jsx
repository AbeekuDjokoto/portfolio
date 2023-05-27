import { Text } from "../Text/Text";
import styles from "./Navbar.module.scss";
import githubIcon from "../../assets/icons/github.png";
import instagramIcon from "../../assets/icons/instagram.png";
import twitterIcon from "../../assets/icons/twitter.png";

export const Navbar = () => {
  return (
    <nav className={styles.root}>
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
    </nav>
  );
};
