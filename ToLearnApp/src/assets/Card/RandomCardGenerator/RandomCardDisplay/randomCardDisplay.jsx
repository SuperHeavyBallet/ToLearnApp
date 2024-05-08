import styles from "./randomCardDisplay.module.css"
import RandomCardDisplayElement from "./randomCardDisplayElement/randomCardDisplayElement"

export default function RandomCardDisplay( {listTitle, elementTitle, inputArray}){
    return(
        <div className={styles.verticalList}>
            <div className={styles.title}>
                <h3>{listTitle}</h3>
            </div>

            
            <RandomCardDisplayElement 
                elementTitle={elementTitle}
                cardDetails={inputArray}
            />
        </div>
    )
}