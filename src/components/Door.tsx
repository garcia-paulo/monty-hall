import React, { useState } from "react";
import styles from '../styles/Door.module.css';
import Macaco from "./Macaco";
import Reward from "./Reward";

interface DoorProps {
    number: number,
    selected: boolean,
    winner: boolean,
    macaco: boolean,
    selectDoor: (index: number) => void
}

const Door: React.FC<DoorProps> = (props: DoorProps) => {
    const [open, setOpen] = useState(false);
    const { number, winner, selected, macaco, selectDoor } = props;

    const openDoor = (e: React.MouseEvent) => {
        setOpen(true);
        if (winner && selected) {
            alert("Parabéns! Você ganhou o prêmio!")
        } else if (macaco && selected) {
            alert("MACACO!")
        }
        e.stopPropagation();
    }

    const select = () => {
        if (!open) {
            selectDoor(number - 1)
        }
    }

    return (
        <div onClick={select} className={styles.area}>
            <div className={`${styles.frame} ${selected ? styles.selected : ''} ${open ? styles.open : ''}`}>
                <div className={styles.door}>
                    <div className={styles.number}>{props.number}</div>
                    <div onClick={e => openDoor(e)} className={styles.knob}></div>
                </div>
                <div style={open ? { display: "block" } : { display: "none" }}>
                    {winner ?
                        <Reward /> :
                        (macaco && <Macaco />)
                    }
                </div>
            </div>
            <div className={styles.ground}></div>
        </div>
    )
}

export default Door;