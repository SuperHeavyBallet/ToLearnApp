
import { useEffect, useState } from "react"
import styles from "./card.module.css"


export default function Card( { timeCreated, cardCompleted, cardTitle, cardPriority, cardText, onRemove, onChangeTitle, onChangeCompleted, onChangePriority, onWorkingOnIt})
{


    const [ completedStatus, setCompletedStatus ]= useState(cardCompleted ? cardCompleted : "Not Completed") ;
    const [ title, setTitle] = useState(cardTitle || "Title");
    const [priority, setPriority] = useState(cardPriority || "Low");

    const [ isEditingTitle, setIsEditingTitle ] = useState(false);

    function handleEditTitleClick(event)
    {
        event.preventDefault();
        setIsEditingTitle(true);
        
        if (title === "Title")
        {
        
            setTitle("Edited Title");
        }
        else
        {
            setTitle("Title");
        }
                 
    
    }

    function handleTitleChange(event)
    {
        setTitle(event.target.value)
    }
    function handleTitleSubmit(event)
    {
        if (event.key === 'Enter')
        {
            setIsEditingTitle(false);
            onChangeTitle(title);
        }
    }
    function handleTitleBlur(event)
    {
        setIsEditingTitle(false);
    }

    function handleEditPriorityClick(event)
    {

        event.preventDefault();


        onChangePriority(event.target.value);

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
        onChangeCompleted();

        if (completedStatus === "Not Completed")
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
            

            {/* Title Elements */}
            <div className={styles.cardTopSection}>
           
            <div 
            className={styles.deleteButton} onClick={onRemove}>
                    X</div>
                <h3 className={styles.title}>
                {isEditingTitle ? (
                    <input 
                    className={styles.titleInput}
                        type="text"
                        value={title}
                        placeholder={title}
                        onChange={handleTitleChange}
                        onKeyDown={handleTitleSubmit}
                        onBlur={handleTitleBlur}
                        autoFocus
                        />
                ) : (
                    <span >{title}</span>
                )}
                </h3>
                {/* Edit Cog SVG */}
                
                { !isEditingTitle ? (
                    <svg 
                    onClick={() => setIsEditingTitle(true)}
                    className={styles.editCog} fill="#ffffff" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" >
                
                    <path d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"></path> 
                    </svg>)
                    : (
                        <svg 
                        onClick={() => setIsEditingTitle(false)}
                        className={styles.editCogEditing} fill="#ff0000" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" >
                    
                        <path d="M32.57,15.72l-3.35-1a11.65,11.65,0,0,0-.95-2.33l1.64-3.07a.61.61,0,0,0-.11-.72L27.41,6.2a.61.61,0,0,0-.72-.11L23.64,7.72a11.62,11.62,0,0,0-2.36-1l-1-3.31A.61.61,0,0,0,19.69,3H16.31a.61.61,0,0,0-.58.43l-1,3.3a11.63,11.63,0,0,0-2.38,1l-3-1.62a.61.61,0,0,0-.72.11L6.2,8.59a.61.61,0,0,0-.11.72l1.62,3a11.63,11.63,0,0,0-1,2.37l-3.31,1a.61.61,0,0,0-.43.58v3.38a.61.61,0,0,0,.43.58l3.33,1a11.62,11.62,0,0,0,1,2.33L6.09,26.69a.61.61,0,0,0,.11.72L8.59,29.8a.61.61,0,0,0,.72.11l3.09-1.65a11.65,11.65,0,0,0,2.3.94l1,3.37a.61.61,0,0,0,.58.43h3.38a.61.61,0,0,0,.58-.43l1-3.38a11.63,11.63,0,0,0,2.28-.94l3.11,1.66a.61.61,0,0,0,.72-.11l2.39-2.39a.61.61,0,0,0,.11-.72l-1.66-3.1a11.63,11.63,0,0,0,.95-2.29l3.37-1a.61.61,0,0,0,.43-.58V16.31A.61.61,0,0,0,32.57,15.72ZM18,23.5A5.5,5.5,0,1,1,23.5,18,5.5,5.5,0,0,1,18,23.5Z"></path> 
                        </svg>
                    )}
                
                    
                    
            </div>
              {/*++++++++++++++*/}
            
        
        
                    <div className={styles.prioritySwitch}>

                    <button className={styles.priorityButton}
                        value={"High"}
                        onClick={handleEditPriorityClick}>High</button>
                    <button className={styles.priorityButton}
                        value={"Low"}
                        onClick={handleEditPriorityClick}>Low</button>
                    </div>
           

             {/* Mid Row Elements */}
            <div className={styles.cardTopButtons}>
               
                <button onClick={handleCompletedClick}>
                    {completedStatus}</button>
                <button onClick={onWorkingOnIt}>Working On It</button>
            </div>
            {/*++++++++++++++*/}

            {/*Text Notes*/}
            <p className={styles.textBox}>{cardText}</p>
            {/*++++++++++++++*/}

            {/*Time+Date Created*/}
            <div className={styles.timeDateCreated}>
                {(timeCreated.toLocaleString("en-US"))}

            </div>

            {/*++++++++++++++*/}
            </div>
    )
}