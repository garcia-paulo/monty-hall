import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"
import Link from "next/link"
import { useState } from 'react'

const Home: NextPage = () => {

  const [qty, setQty] = useState(3);
  const [winner, setWinner] = useState(0);

  const minusQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  const plusQty = () => {
    if (qty < 99) {
      setQty(qty + 1)
    }
  }

  const minusWinner = () => {
    if (winner > 0) {
      setWinner(winner - 1);
    }
  }

  const plusWinner = () => {
    if (winner < qty) {
      setWinner(winner + 1);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <div className={`${styles.card} ${styles.tl}`}>
          <h1>Monty Hall</h1>
        </div>
        <div className={`${styles.card} ${styles.bl}`}>
          <div className={styles.text}>Porta premiada:</div>
          <div className={styles.value}>{winner}</div>
          <div className={styles.form}>
            <div className={styles.button} onClick={minusWinner}>
              -
            </div>
            <div className={styles.button} onClick={plusWinner}>
              +
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.card} ${styles.tr}`}>
          <div className={styles.text}>Qtd de portas:</div>
          <div className={styles.value}>{qty}</div>
          <div className={styles.form}>
            <div className={styles.button} onClick={minusQty}>
              -
            </div>
            <div className={styles.button} onClick={plusQty}>
              +
            </div>
          </div>
        </div>
        <Link href={`/monty-hall/${qty}/${winner}`}>
          <div className={`${styles.card} ${styles.br}`}>
            <h2>Iniciar</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
