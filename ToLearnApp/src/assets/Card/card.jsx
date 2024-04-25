
import { useEffect, useState } from "react"
import styles from "./card.module.css"


export default function Card( { cardCompleted, cardTitle, cardPriority, cardText, onRemove})
{


    const [ completedStatus, setCompletedStatus ]= useState(cardCompleted);
    const [ title, setTitle] = useState(cardTitle || "Card Title");
    const [priority, setPriority] = useState(cardPriority || "Low");

    function handleEditTitleClick(event)
    {
        event.preventDefault();
        if (title === "Has Been Edited")
        {
            setTitle("To Be Edited");
        }
        else
        {
            setTitle("Has Been Edited");
        }
                 
    
    }

    function handleEditPriorityClick(event)
    {

        event.preventDefault();
        if (priority === "High")
        {
            setPriority("Low");
        }
        else
        {
            setPriority("High");
        }
    }
    
    function handleCompletedClick(event)
    {


        if (completedStatus == "Not Completed")
        {
            
            setCompletedStatus("Completed");
        }
        else
        {
   
            setCompletedStatus("Not Completed");
        }


    }
  

    return(
        <div className={styles.card}>
            <div className={styles.cardTopButtons}>
            <button onClick={onRemove}>X</button>
            <button onClick={handleCompletedClick}>
                {completedStatus}</button>
            </div>
            <div className={styles.inputEditBlock}>
            <h3 className={styles.title}>{title}</h3>
            <button className={styles.editButton} onClick={handleEditTitleClick}><h5>Edit</h5></button>
        </div>

            <div className={styles.inputEditBlock}>
            <h3 className={styles.title}>Priority: {priority}</h3>
            <button className={styles.editButton} onClick={handleEditPriorityClick}><h5>Edit</h5></button>
            </div>

            <p className={styles.textBox}>{cardText}</p>
            </div>
    )
}