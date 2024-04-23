import { useState } from "react"
import styles from "./createNewCard.module.css"
import Card from "../Card/card";

export default function CreateNewCard()
{
    const [ title, setTitle ] = useState("Title");
    const [ priority, setPriority ] = useState("High");
    const [ text, setText ] = useState("");

    const [ cards, setCards ] = useState([]);

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
            title,
            priority,
            text
        };

        setCards([newCard, ...cards]);
        setTitle("");
        setPriority("High");
        setText("");
    }
    return (

        <div className={styles.wholePage}>
            <div className={styles.listOfCards}>
                Array

                {cards.map((card, index) => (
                    <div key={index}>
                        <h4>{card.title}</h4>
                        </div>
                    ))}
            </div>
        <div className={styles.newCardForm}>
            <h3>I Need To Learn...</h3>
            
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
                        key={index}
                        cardTitle={card.title}
                        cardPriority={card.priority}
                        cardText={card.text}
                            />
                    ))}
                </div>
           
        </div>
        </div>
    )
}