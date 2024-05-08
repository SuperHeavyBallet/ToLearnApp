import { useState } from "react"
import styles from "./randomCardGenerator.module.css"


export default function RandomCardGenerator( {listTitle, inputArray, onRandomCardGenerated})
{

    const [ randomCard, setRandomCard ] = useState([]);

    function getRandomCard(event){

        if (inputArray && inputArray.length > 0)
        {
            setRandomCard([]);

            const randomNumber = Math.floor(Math.random() * inputArray.length);
            const randomCardPick = inputArray[randomNumber];

            setRandomCard([randomCardPick]);
 

            onRandomCardGenerated(randomCardPick);
        }
        



    }


    return (
        <div className={styles.list}>

          
      
            <div
                className={styles.button} 
                onClick={getRandomCard}>New Random Card</div>
               
        </div>
    )
}