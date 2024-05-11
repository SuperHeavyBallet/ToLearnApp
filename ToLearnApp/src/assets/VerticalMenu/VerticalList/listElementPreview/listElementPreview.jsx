import styles from "./listElementPreview.module.css"
import { useState } from "react";

export default function ListElementPreview({elementTitle, cardDetails, onRemoveCard, onToggleCompleted})
{
    const [ completedStatus, setCompletedStatus ] = useState( cardDetails.completed === "Completed" ? "N" : "Y");


    function handlePreviewClick()
    {
        console.log(cardDetails);
    }

    function handleRemoveClick()
    {
        onRemoveCard(cardDetails.key);
        console.log("Remove at Card Preview")
    }

    function handleCompletedClick()
    {
        console.log("Competed CLick ", cardDetails.key);
        onToggleCompleted(cardDetails.key);
        if (completedStatus === 'Y')
        {
            setCompletedStatus("N");
        }
        else{
            setCompletedStatus("Y");
        }
    }

    return(
        <div className={styles.elementPreview}>
        
            <div className={styles.leftArea}>

            <div className={styles.removeElement}
            onClick={handleRemoveClick}>
                X
            </div>
            </div>
            

            <div className={styles.elementText}
            onClick={handlePreviewClick}>
            
                <div>
                    {elementTitle}
                    </div>
            </div>

            { completedStatus === "Y" ? (
            <div 
            onClick={handleCompletedClick}
            className={styles.completedSectionNo}>
                    <div>
                        N
                        </div>
            </div>
            ) : 
            (
                <div 
                onClick={handleCompletedClick}
                className={styles.completedSectionYes}>
                        <div>
                            Y
                            </div>
                </div>
                )}
            
        </div>
    )
}