import { useEffect, useState } from "react";
import CreateNewCard from "../CreateNewCard/createNewCard";
import TopNavBar from "../TopNavBar/topNavBar";
import VerticalMenu from "../VerticalMenu/verticalMenu";
import styles from "./mainBody.module.css";
import VerticalList from "../VerticalMenu/VerticalList/verticalList";
import RandomCardGenerator from "../Card/RandomCardGenerator/randomCardGenerator";

export default function MainPage(){

    const [ currentCards, setCurrentCards ] = useState([]);
    const [ completedCards, setCompletedCards ] = useState([]);
    const [ highPriorityCards, setHighPriorityCards ] = useState([]);
    const [ lowPriorityCards, setLowPriorityCards ] = useState([]);

    useEffect(() => {
        sortPriorityCards();
    }, [currentCards]);

    function handleNewCard(newCard)
    {
        setCurrentCards(prevCards => [newCard, ...prevCards]);
        if (newCard.priority === 'High') {
            setHighPriorityCards(prevCards => [newCard, ...prevCards]);
        }
        else if (newCard.priority === 'Low'){
            setLowPriorityCards(prevCards => [newCard, ...prevCards]);
        }

    }

    function handleCompletedChange(cardId, card)
    {
        console.log("GOT HERE!!");
        

        const currentCardToChange = currentCards.filter(card => card.id === cardId);
        if (currentCardToChange[0])
        {
            if(currentCardToChange[0].completed === 'Completed')
            {
                setCompletedCards(prevCards => [currentCardToChange[0], ...prevCards]);
            }
            else if (currentCardToChange[0].completed === 'Not Completed')
            {
                setCompletedCards(prevCards => prevCards.filter(card => card.id !== cardId));
            }
        }

    }

    function handlePriorityChange(cardId, priorityLevel)
    {
        
        const currentCardToChange = currentCards.filter(card => card.id === cardId);
        if (currentCardToChange[0]){
            if (currentCardToChange[0].priority === "High" && priorityLevel !== "High")
            {
                currentCardToChange[0].priority = "Low";
            }else if (priorityLevel !== "Low"){
                currentCardToChange[0].priority = "High";
            }
            
        }

        sortPriorityCards();
    }

    function sortPriorityCards(){
        const newHighPriorityCards = currentCards.filter(card => card.priority === "High");
        const newLowPriorityCards = currentCards.filter(card => card.priority !== "High");
        setHighPriorityCards(newHighPriorityCards);
        setLowPriorityCards(newLowPriorityCards);
    }

    function handleRemoveCard(cardId)
    {
        setCurrentCards(prevCards => prevCards.filter(card => card.id !== cardId));
    }

    return(
        <div className={styles.allContent}>
            <div className={styles.topNavBar}>
                <TopNavBar />
            </div>
            <div className={styles.mainBody} >
                <VerticalMenu 
                    highPriorityCards={highPriorityCards}
                    lowPriorityCards={lowPriorityCards}/>
                <CreateNewCard 
                    onNewCard={handleNewCard}

                    onChangeCompleted={(cardId, completedStatus) => handleCompletedChange(cardId, completedStatus)}
                    onChangePriority={(cardId, priorityLevel) => handlePriorityChange(cardId, priorityLevel)}
                    onRemoveCard={(cardId) => handleRemoveCard(cardId)}
                    />
                <VerticalList 
                    listTitle="Current Cards"
                    inputArray={currentCards}
                />

                <VerticalList
                    listTitle="Completed Cards"
                    inputArray={completedCards}
                />
                <div className={styles.multiVerticalMenu}>
                
                
                <VerticalList
                    listTitle="Random Card 1"
                    inputArray={completedCards}
                />
                <RandomCardGenerator 
                    listTitle="Random Button"
                    inputArray={currentCards}
                />
              
                </div>
            </div>
        </div>
    )
}