import { Link } from "react-router-dom";
import { Navbar, Text } from "../../../../../../components";

import styles from "./Home.module.scss";

export const HomeLayout = () => {
  return (
    <div className={styles.root}>
      <Navbar />
      <div className={styles.textContent}>
        <Text variant={"h1"}>I'm Abeeku Djokoto</Text>
        <div className={styles.bio}>
          <Text variant={"p"}>
            Welcome to my world of frontend engineering mastery. A passionate
            and detail-oriented Frontend Engineer. With a blend of creativity
            and technical expertise, I bring web designs to life, crafting
            seamless user experiences that leave a lasting impact. Join me on a
            journey where innovation meets code, and let's build the web of
            tomorrow together.
          </Text>
          <Text>
            View my <Link className={styles.link}>Projects</Link>,{" "}
            <Link className={styles.link}>Resume</Link>,{" "}
            <Link className={styles.link}>Contact Me</Link> or send me an email
            at{" "}
            <Link
              className={styles.link}
              to="mailto:djokotoabeeku619@gmail.com"
            >
              djokotoabeeku619@gmail.com
            </Link>
          </Text>
        </div>
        <Link className={styles.arrowLink} to="/experience">
          <Text as={"h2"}>See More About Me</Text>
        </Link>
      </div>
    </div>
  );
};
