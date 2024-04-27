import { useEffect, useState } from "react"
import styles from "./createNewCard.module.css"
import Card from "../Card/card";
import { v4 as uuidv4 } from 'uuid'; // Ensure you have `uuid` installed
import CardTitleArray from "../CardArray.jsx/cardTitleArray";

export default function CreateNewCard()
{
    const [ title, setTitle ] = useState("");
    const [ time, setTime ] = useState("");
    const [ completed, setCompleted ] = useState("Not Completed");
    const [ priority, setPriority ] = useState("High");
   
    const [ text, setText ] = useState("");

    const [ cards, setCards ] = useState([]);
    const [ highPriorityCards, setHighPriorityCards ] = useState([]);
    const [ lowPriorityCards, setLowPriorityCards ] = useState([]);
    const [ completedCards, setCompletedCards ] = useState([]);

    useEffect(() => {
        getTime();
        sortPriorityCards();
        sortCompletedCards();
        changeCompletedStatus();
    }, [cards]);

    function handleTitleChange(event){
        setTitle(event.target.value);
    }
    function handleCompletedChange(event){
        setCompleted(event.target.value);
    }
    function handlePriorityChange(event){
        setPriority(event.target.value);
    }
    function handleTextChange(event){
        setText(event.target.value);
    }
    function handleSubmitNewCard(event){
        event.preventDefault();
        getTime();

        // Create New Card with values at time of submit
        const newCard = {
            id: uuidv4(),
            time,
            completed,
            title,
            priority,
            text,
        };

        //Add new card to the start of the array
        setCards(prevCards => [newCard, ...prevCards]);
        sortPriorityCards();
        sortCompletedCards();
        ResetValues();
        
    }
    function ResetValues(){
        //Reset values for next card
        setTitle("");
        setTime({});
        setCompleted("Not Completed");
        setPriority("High");
        setText("");
    }

    function getTime(){ 
        let currentDate = new Date();
        setTime(currentDate);
    }

    function sortPriorityCards(){
        const newHighPriorityCards = cards.filter(card => card.priority === "High");
        const newLowPriorityCards = cards.filter(card => card.priority !== "High");
        setHighPriorityCards(newHighPriorityCards);
        setLowPriorityCards(newLowPriorityCards);
    }

    function sortCompletedCards(){
        const completedCards = cards.filter(card => card.completed === "Completed");
        setCompletedCards(completedCards);
    }

    {/* Callback Functions on Cards Already Made */}
    function changeCompletedStatus(cardId, card){
        let id = cardId;

        console.log("Card: " + card)
        
        const currentCardToChange = cards.filter(card => card.id === id);
        if (currentCardToChange[0]){
            if (currentCardToChange[0].completed === "Not Completed"){
                currentCardToChange[0].completed = "Completed";
            }else{
                currentCardToChange[0].completed = "Not Completed";
            }
        }
       
        sortCompletedCards();
    }

    function removeCard(cardId){
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
                <div className={styles.inputRow}>
                    <h3 className={styles.newCardFormLowTitle}>Completed?</h3>
                    <div className={styles.inputColumn}>
                        <label>
                            <input 
                                type="radio" 
                                name="completeStatus" 
                                value="Completed" 
                                onChange={handleCompletedChange} 
                                checked={completed === 'Completed'}/>
                            Yes
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="completeStatus" 
                                value="Not Completed" 
                                onChange={handleCompletedChange} 
                                checked={completed === 'Not Completed'}/>
                            No
                        </label>
                    </div> 
                </div>

                {/* Radio buttons for Priority */}
                <div className={styles.inputRow}>
                    <h3 className={styles.newCardFormLowTitle}>Priority:</h3>
                    <div className={styles.inputColumn}>
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
                </div>

                <textarea 
                    className={styles.inputText}
                    type="text" 
                    name="text" 
                    placeholder="About this thing..." 
                    value={text} 
                    onChange={handleTextChange}>
                </textarea>

                <button 
                    className={styles.submitButton}
                    onClick={handleSubmitNewCard}>
                        Submit
                </button>

                </form>
                </div>

                {/* Render Each Card */}
                <div>
                    {cards.map((card) => (
                        <Card 
                        key={card.id}
                        timeCreated={card.time}
                        cardCompleted={card.completed}
                        cardTitle={card.title}
                        cardPriority={card.priority}
                        cardText={card.text}
                        onRemove={() => removeCard(card.id)}
                        onChangeCompleted={() => 
                            changeCompletedStatus(card.id, card)
                        }
                        />
                    ))}
                </div>
        {/* Currently Learning List*/}
        <div>
            Currently Learning
        </div>
             
        {/* Completed Card List*/}
        <div className={styles.completedCardList}>
            Completed          
            {/*All Cards */}
            <CardTitleArray inputArray={completedCards}/>
        </div>

    </div>
    )
}