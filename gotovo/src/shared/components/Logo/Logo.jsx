import CustomLink from "../Link";

import styles from "./Logo.module.scss";

const Logo = ({ type }) => {
  const className = (type === "main") ? "mainName" : "lightName";

  return (
      <CustomLink href="/" className={`${styles.logo}`}>
          <p className={styles[className]}>ГОТОВО!</p>
          <span className={styles.text}>Документ-сервіс</span>
      </CustomLink>
  );
};

export default Logo;