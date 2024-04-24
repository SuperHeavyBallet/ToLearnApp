import { useEffect, useState } from "react"
import styles from "./createNewCard.module.css"
import Card from "../Card/card";
import { v4 as uuidv4 } from 'uuid'; // Ensure you have `uuid` installed

export default function CreateNewCard()
{
    const [ title, setTitle ] = useState("Title");
    const [ priority, setPriority ] = useState("High");
    const [ text, setText ] = useState("");

    const [ cards, setCards ] = useState([]);
    const [ highPriorityCards, setHighPriorityCards ] = useState([]);
    const [ lowPriorityCards, setLowPriorityCards ] = useState([]);

    function handleTitleChange(event)
    {
        setTitle(event.target.value);

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
            title,
            priority,
            text,
        };
        //Add new card to the start of the array
        setCards(prevCards => [newCard, ...prevCards]);
        sortPriorityCards(cards);

        //Reset values for next card
        setTitle("");
        setPriority("High");
        setText("");

        
    }


    useEffect(() => {
        sortPriorityCards();
    }, [cards]);

    function sortPriorityCards()
    {
        const newHighPriorityCards = cards.filter(card => card.priority === "High");
        const newLowPriorityCards = cards.filter(card => card.priority !== "High");

        setHighPriorityCards(newHighPriorityCards);
        setLowPriorityCards(newLowPriorityCards);
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

                {highPriorityCards.map((card) => (
                    <div key={card.id}>
                        <h4>{card.title}</h4>
                        </div>
                    ))}

                Low Priority:
                {lowPriorityCards.map((card) => (
                    <div key={card.id}>
                        <h4>{card.title}</h4>
                        </div>
                    ))}
            </div>

             {/* New Card Form*/}
        <div className={styles.newCardForm}>
            <h3 className={styles.newCardFormTopTitle}>I Need To Learn...</h3>
            
            <form className={styles.form}>
                <input type="text" name="title" placeholder="Title" value={title} onChange={handleTitleChange}></input>
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
                        cardTitle={card.title}
                        cardPriority={card.priority}
                        cardText={card.text}
                        onRemove={() => removeCard(index)}
                       
                            />
                    ))}
                </div>
                         
        </div>

        {/* Completed Card List*/}
        <div className={styles.completedCardList}>
                            Completed
                         </div>
        </div>
    )
}