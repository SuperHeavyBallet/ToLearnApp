import styles from "./listElementPreview.module.css"
import { useEffect, useState } from "react";

export default function ListElementPreview({elementTitle, cardDetails, onRemoveCard, onToggleCompleted})
{
    const [ completedStatus, setCompletedStatus ] = useState( cardDetails.completed === "Completed" ? "Y" : "N");

    useEffect(() => {
        setCompleted();
    },[completedStatus])

    function handlePreviewClick()
    {
        console.log(cardDetails);
    }

    function handleRemoveClick()
    {
        onRemoveCard(cardDetails.key);
    }

    function handleCompletedClick()
    {

        onToggleCompleted(cardDetails.key);
       setCompleted();
    }

    function setCompleted()
    {
        if (cardDetails.completed === "Completed")
        {
            setCompletedStatus("Y");
        }
        else
        {
            setCompletedStatus("N");
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