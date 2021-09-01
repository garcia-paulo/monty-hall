import React from "react";
import styles from "../styles/Macaco.module.css";

const Macaco: React.FC = () => {
    return (
        <img className={styles.macaco} src="/macaco.png" alt="Macaco" />
    )
}

export default Macaco;