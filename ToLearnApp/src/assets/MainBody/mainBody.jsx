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
    const [ notCompletedCards, setNotCompletedCards ] = useState([]);
    const [ highPriorityCards, setHighPriorityCards ] = useState([]);
    const [ lowPriorityCards, setLowPriorityCards ] = useState([]);

    const [ randomCard, setRandomCard ] = useState([]);

    

    useEffect(() => {
        sortPriorityCards();
        
    }, [currentCards, ]);

    function handleNewCard(newCard)
    {
        if(newCard)
        {
            setCurrentCards(prevCards => [newCard, ...prevCards]);


            if (newCard.priority === 'High') {
                setHighPriorityCards(prevCards => [newCard, ...prevCards]);
            }
            else if (newCard.priority === 'Low'){
                setLowPriorityCards(prevCards => [newCard, ...prevCards]);
            }

            if (newCard.completed)
            {

                if (newCard.completed === "Completed")
                {
                    setCompletedCards(prevCards => [newCard, ...prevCards]);
                }
                else
                {
                    setNotCompletedCards(prevCards => [newCard, ...prevCards]);
                }
            }
            
            
        }
    }

    function handleCompletedChange(cardId, card)
    {
        

        const currentCardToChange = currentCards.filter(card => card.id === cardId);

        if (currentCardToChange[0])
        {
            console.log("Ready To Change");
            if(currentCardToChange[0].completed === 'Completed')
            {
                setCompletedCards(prevCards => [currentCardToChange[0], ...prevCards]);
                setNotCompletedCards(prevCards => prevCards.filter(card => card.id !== cardId));
            }
            else if (currentCardToChange[0].completed === 'Not Completed')
            {
                setNotCompletedCards(prevCards => [currentCardToChange[0], ...prevCards]);
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

    function sortCompletedCards(){
        const newCompletedCards = currentCards.filter(card => card.completed === 'Completed');
        const newNotCompletedCards = currentCards.filter(card => card.completed !== 'Completed');
        setCompletedCards(newCompletedCards);
        setNotCompletedCards(newNotCompletedCards);
    
    }

    function handleRemoveCard(cardId)
    {
        
        
        
        
        setCurrentCards(prevCards => prevCards.filter(card => card.id !== cardId));
        sortPriorityCards();
        sortCompletedCards();
    }

    function handleNewRandomCard(newRandomCard)
    {
        setRandomCard([newRandomCard]);
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
                    listTitle="All"
                    inputArray={currentCards}
                    
                />

                <VerticalList
                    listTitle="Completed"
                    inputArray={completedCards}
                />

                <VerticalList
                    listTitle="Not Completed"
                    inputArray={notCompletedCards}
                />
                <div className={styles.multiVerticalMenu}>

                <VerticalList
                    listTitle="Random Card"
                    inputArray={randomCard}
                />
                <RandomCardGenerator 
                    inputArray={notCompletedCards}
                    onRandomCardGenerated={(newRandomCard) => handleNewRandomCard(newRandomCard)}
                />
              
                </div>
            </div>
        </div>
    )
}