import { useEffect, useState } from "react"
import styles from "./createNewCard.module.css"
import Card from "../Card/card";
import { v4 as uuidv4 } from 'uuid'; // Ensure you have `uuid` installed
import CardTitleArray from "../CardArray.jsx/cardTitleArray";

export default function CreateNewCard()
{
    const [ title, setTitle ] = useState("");
    const [ completed, setCompleted ] = useState("Not Completed");
    const [ priority, setPriority ] = useState("High");
   
    const [ text, setText ] = useState("");

    const [ cards, setCards ] = useState([]);
    const [ highPriorityCards, setHighPriorityCards ] = useState([]);
    const [ lowPriorityCards, setLowPriorityCards ] = useState([]);
    const [ completedCards, setCompletedCards ] = useState([]);

    function handleTitleChange(event)
    {
        setTitle(event.target.value);

    }
    
    function handleCompletedChange(event)
    {
        setCompleted(event.target.value);
    }

    function handlePriorityChange(event)
    {
        setPriority(event.target.value);
    }

    function handleTextChange(event)
    {
        setText(event.target.value);
    }

    function handleSubmitNewCard(event)
    {
        event.preventDefault();
        // Create New Card with values at time of submit
        const newCard = {
            id: uuidv4(),
            completed,
            title,
            priority,
            text,
        };
        //Add new card to the start of the array
        setCards(prevCards => [newCard, ...prevCards]);
        sortPriorityCards();
        sortCompletedCards()

        //Reset values for next card
        setTitle("");
        setCompleted("Not Completed");
        setPriority("High");
        setText("");
        console.log(newCard);

        
    }


    useEffect(() => {
        sortPriorityCards();
        sortCompletedCards();
    }, [cards]);

    function sortPriorityCards()
    {
        const newHighPriorityCards = cards.filter(card => card.priority === "High");
        const newLowPriorityCards = cards.filter(card => card.priority !== "High");

        setHighPriorityCards(newHighPriorityCards);
        setLowPriorityCards(newLowPriorityCards);
    }

    function sortCompletedCards()
    {
        const completedCards = cards.filter(card => card.completed === "Completed");
        setCompletedCards(completedCards);
    
    }

    function removeCard(cardId)
    {
        setCards(prevCards => prevCards.filter(card => card.id !== cardId));
    }


    return (

        <div className={styles.wholePage}>

            {/* Priority List*/}
            <div className={styles.listOfCards}>
                High Priority:

                <CardTitleArray inputArray={highPriorityCards}/>

                Low Priority:
                <CardTitleArray inputArray={lowPriorityCards}/>


                

            </div>

             {/* New Card Form*/}
        <div className={styles.newCardForm}>
            <h3 className={styles.newCardFormTopTitle}>I Need To Learn...</h3>
            
            <form className={styles.form}>
                {/* Input For Title */}
                <input type="text" name="title" placeholder="Title" value={title} onChange={handleTitleChange}></input>
                
                 {/* Input For Completed */}
                 <div>
                    <label>
                        <input 
                            type="radio" 
                            name="completeStatus" 
                            value="Completed" 
                            onChange={handleCompletedChange} 
                            checked={completed === 'Completed'}/>
                        Completed
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="completeStatus" 
                            value="Not Completed" 
                            onChange={handleCompletedChange} 
                            checked={completed === 'Not Completed'}/>
                        Not Completed
                    </label>

                </div>
                {/* Radio buttons for Priority */}
                <div>
                    <label>
                        <input 
                            type="radio" 
                            name="priority" 
                            value="High" 
                            onChange={handlePriorityChange} 
                            checked={priority === 'High'}/>
                        High
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="priority" 
                            value="Low" 
                            onChange={handlePriorityChange} 
                            checked={priority === 'Low'}/>
                        Low
                    </label>
                </div>
                <input 
                    className={styles.inputText}
                    type="text" 
                    name="text" 
                    placeholder="About this thing..." 
                    value={text} 
                    onChange={handleTextChange}></input>
                    <div>{title}</div>
                    <div>{text}</div>

                <button 
                    className={styles.submitButton}
                    onClick={handleSubmitNewCard}>
                        Submit
                        </button>

                        </form>

                {/* Render Each Card */}
                <div className="">
                    {cards.map((card, index) => (
                        <Card 
                        key={card.id}
                        cardCompleted={card.completed}
                        cardTitle={card.title}
                        cardPriority={card.priority}
                        cardText={card.text}
                        onRemove={() => removeCard(index)}
                       
                            />
                    ))}
                </div>

                
                         
        </div>

        <div>
            Currently Learning
        </div>

        {/* Completed Card List*/}
        <div className={styles.completedCardList}>
                            Completed

                            <CardTitleArray inputArray={completedCards}/>

                         </div>
        </div>
    )
}