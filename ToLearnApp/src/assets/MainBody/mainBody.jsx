import { useEffect, useMemo, useState } from "react";
import CreateNewCard from "../CreateNewCard/createNewCard";
import TopNavBar from "../TopNavBar/topNavBar";
import VerticalMenu from "../VerticalMenu/verticalMenu";
import styles from "./mainBody.module.css";
import VerticalList from "../VerticalMenu/VerticalList/verticalList";
import RandomCardGenerator from "../Card/RandomCardGenerator/randomCardGenerator";
import RandomCardDisplay from "../Card/RandomCardGenerator/RandomCardDisplay/randomCardDisplay";

export default function MainPage(){

    const savedCards = () => {
        const cards = localStorage.getItem('currentCards');
        if (cards) {
            try {
                return JSON.parse(cards);
            } catch (e) {
                console.error("Error parsing cards from localStorage:", e);
                return [];  // Return an empty array or default value if there's an error
            }
        }
        return [];  // Return an empty array if there's no item in localStorage
    }

    const [ currentCards, setCurrentCards ] = useState(savedCards);

    const [ completedCards, setCompletedCards ] = useState([]);
    const [ notCompletedCards, setNotCompletedCards ] = useState([]);
    const [ highPriorityCards, setHighPriorityCards ] = useState([]);
    const [ lowPriorityCards, setLowPriorityCards ] = useState([]);

    const [ randomCard, setRandomCard ] = useState([]);
    const [ randomCardTitle, setRandomCardTitle ] = useState("");
    

    useEffect(() => {

        sortCompletedCards();
        sortPriorityCards();
        localStorage.setItem('currentCards', JSON.stringify(currentCards));
       

        
    }, [currentCards ]);

    function handleNewCard(newCard)
    {
        if(newCard)
        {
            setCurrentCards(prevCards => [newCard, ...prevCards]);
        }
    }

    function handleCompletedChange(cardId)
    {
        const currentCardToChange = currentCards.filter(card => card.key === cardId);

        console.log("HEY!" , currentCardToChange);
        console.log(currentCardToChange[0]);

        if (currentCardToChange[0])
        {
            if(currentCardToChange[0].completed === 'Completed')
            {

                currentCardToChange[0].completed = 'Not Completed';

            }
            else if (currentCardToChange[0].completed === 'Not Completed')
            {
                currentCardToChange[0].completed = 'Completed';

            }

        }

        const updatedCards = currentCards.map(card =>
            card.id === cardId ? { ...card, completed: card.completed === "Completed" ? "Not Completed" : "Completed" } : card
        );

        setCurrentCards(updatedCards);

    }


    function handlePriorityChange(cardId, priorityLevel)
    {
        
        const currentCardToChange = currentCards.filter(card => card.key === cardId);
        
        if (currentCardToChange[0]){
            if (currentCardToChange[0].priority === "High" && priorityLevel !== "High")
            {
                currentCardToChange[0].priority = "Low";
            }else if (priorityLevel !== "Low"){
                currentCardToChange[0].priority = "High";
            }
            
        }

       
        
    }

    function sortPriorityCards(){
        const newHighPriorityCards = currentCards.filter(card => card.priority === "High");
        const newLowPriorityCards = currentCards.filter(card => card.priority !== "High");
        setHighPriorityCards(newHighPriorityCards);
        setLowPriorityCards(newLowPriorityCards);
    }

    function sortCompletedCards(){

        const newCompletedCards = currentCards.filter(card => card.completed === "Not Completed");
        const newNotCompletedCards = currentCards.filter(card => card.completed === "Completed");
        setCompletedCards(newCompletedCards);
        setNotCompletedCards(newNotCompletedCards);
    
    }

    function handleRemoveCard(cardId)
    {
        
        
        console.log("Clicked Remove at Main Level" + cardId);
        
        setCurrentCards(prevCards => prevCards.filter(card => card.key !== cardId));
    
    }

    

    function handleNewRandomCard(newRandomCard)
    {
        setRandomCard([newRandomCard]);
        setRandomCardTitle(newRandomCard.title);

        
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

                    
                    onChangePriority={(cardId, priorityLevel) => handlePriorityChange(cardId, priorityLevel)}
                   
                    />

                <VerticalList 
                    listTitle="All"
                    inputArray={currentCards}
                    onRemoveCard={(cardId) => handleRemoveCard(cardId)}
                    onToggleCompleted={(cardId) => handleCompletedChange(cardId)}
                    
                />

                <VerticalList
                    listTitle="Completed"
                    inputArray={completedCards}
                    onRemoveCard={(cardId) => handleRemoveCard(cardId)}
                    onToggleCompleted={(cardId) => handleCompletedChange(cardId)}
                />

                <VerticalList
                    listTitle="Not Completed"
                    inputArray={notCompletedCards}
                    onRemoveCard={(cardId) => handleRemoveCard(cardId)}
                    onToggleCompleted={(cardId) => handleCompletedChange(cardId)}
                    
                />
                <div className={styles.multiVerticalMenu}>

                
                <RandomCardGenerator 
                    inputArray={notCompletedCards}
                    onRandomCardGenerated={(newRandomCard) => handleNewRandomCard(newRandomCard)}
                />
                
                <RandomCardDisplay 
                    listTitle="Random Card"
                    elementTitle={randomCardTitle}
                    inputArray={randomCard}
                />

                
              
                </div>
            </div>
        </div>
    )
}