import React from "react"
import styles from "../styles/Reward.module.css"

const Reward: React.FC = () => {
    return (
        <div className={styles.gift}>
            <div className={styles.topo}></div>
            <div className={styles.corpo}></div>
            <div className={styles.lacoX}></div>
            <div className={styles.lacoY}></div>
        </div>
    )
}

export default Reward;