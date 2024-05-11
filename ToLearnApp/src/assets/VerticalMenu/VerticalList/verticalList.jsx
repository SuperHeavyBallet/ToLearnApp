import styles from "./verticalList.module.css"
import ListElementPreview from "./listElementPreview/listElementPreview"
import { useEffect, useState } from "react";

export default function VerticalList({listTitle, inputArray, onRemoveCard, onToggleCompleted})
{

    //console.log("Lust Tutke:" , listTitle);
    //console.log("Input: " , inputArray);

    const [ listElementCount, setListElementCount ] = useState(3);

    function handleRemoveCard(cardId)
    {
        console.log("Clicked Remove at List Level",  cardId);
        onRemoveCard(cardId)
    }

    function handleToggleCompleted(cardId)
    {
        onToggleCompleted(cardId);
        console.log("Clicked Toggle at List: ", cardId)
    }

    return(
        <div className={styles.verticalList}>
            <div className={styles.title}>
            <h3>{listTitle} ({inputArray.length})</h3>
            </div>

            <div>
                {inputArray.map((element, index) => (
                <div
                    key={element.key}>
                        <ListElementPreview 
                

                    elementTitle={element.title}
                    cardDetails={inputArray[index]}
                    onRemoveCard={(cardId) => handleRemoveCard(cardId)}
                    onToggleCompleted={(cardId) => handleToggleCompleted(cardId)}
                />
          
                </div>
                ))
                
                    
                }
            </div>
        </div>
    )

}