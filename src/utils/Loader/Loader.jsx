import React from "react";
import styles from "./loader.module.css";

const Loader = ({ style = {} }) => {
  return (
    <div className={styles.box} style={{ ...style }}>
      <div className={styles.container}>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
      </div>
    </div>
  );
};

export default Loader;
