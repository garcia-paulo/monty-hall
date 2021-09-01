import React, { useEffect } from "react";
import Door from '../../../components/Door';
import { useState } from 'react';
import styles from "../../../styles/Game.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const MontyHall: React.FC = () => {

    const router = useRouter()
    const { winner } = router.query;

    const selectDoor = (index: number) => {
        console.log(doors);
        doors.map((door, i) => {
            console.log(door)
            if (door.props.selected) {
                const array = doors;
                const removed = array.splice(i, 1)
                array.splice(i, 0, <Door key={i} number={i + 1} selected={false} winner={removed[0].props.winner} macaco={removed[0].props.macaco} selectDoor={selectDoor} />)
                setDoors(array);
                reload({});
            } else if (i == index && !door.props.open) {
                const array = doors;
                const removed = array.splice(i, 1)
                array.splice(i, 0, <Door key={i} number={i + 1} selected={true} winner={removed[0].props.winner} macaco={removed[0].props.macaco} selectDoor={selectDoor} />)
                setDoors(array);
                reload({});
            }
        })
    }

    const createDoors = (qty: number, winner: number) => {
        let monkey = winner;
        if (qty > 1 || winner != 1) {
            while (monkey === winner) {
                monkey = Math.floor(Math.random() * (qty - 1 + 1)) + 1
            }
        }
        return Array.from({ length: qty }, (_, i) => {
            const number = i + 1;
            const awarded = number === winner;
            const loser = monkey === number;
            return <Door key={i} number={number} selected={false} winner={awarded} macaco={loser} selectDoor={selectDoor} />
        })
    }

    let qtyDoors = +router.query.doors!;
    let winnerNum = +router.query.winner!;
    if (qtyDoors < 1) {
        qtyDoors = 3;
    }

    const [doors, setDoors] = useState(createDoors(qtyDoors, winnerNum));
    const [_, reload] = useState({});

    useEffect(() => {
        setDoors(createDoors(qtyDoors, winnerNum));
    }, [router.query])

    if (!winner) {
        return <></>;
    }

    return (
        <div className={styles.body}>
            <div className={styles.game}>
                {doors}
            </div>
            <Link href="/">
                <div className={styles.button}>
                    Voltar
                </div>
            </Link>
        </div>
    )
}

export default MontyHall;