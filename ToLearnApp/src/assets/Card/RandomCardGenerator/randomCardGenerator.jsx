import { useState } from "react"
import styles from "./randomCardGenerator.module.css"


export default function RandomCardGenerator( {listTitle, inputArray})
{

    const [ randomCard, setRandomCard ] = useState([]);

    function getRandomCard(event){

        if (inputArray && inputArray.length > 0)
        {
            setRandomCard([]);

            const randomNumber = Math.floor(Math.random() * inputArray.length);
            const randomCardPick = inputArray[randomNumber];

            setRandomCard([randomCardPick]);
        }
        



    }
    return (
        <div className={styles.list}>
            <h4 >{listTitle}</h4>
            <div>
            {randomCard.map((card) => (
                <div
                key={card.id}>
                    <h4 className={styles.listElementTitle}>{card.title}</h4>

                
                
                </div>
                
            ))}
            <button onClick={getRandomCard}>Click</button>
                </div>
        </div>
    )
}